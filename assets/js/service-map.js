/**
 * Service Area Map - Professional Interactive Map
 * Shows taxi service areas: Kyneton, Heathcote, Mia Mia, Redesdale
 */

(function() {
  'use strict';

  // Store map instance and area config globally for external access
  let mapInstance = null;
  let areaConfigInstance = null;

  document.addEventListener('DOMContentLoaded', initServiceMap);

  function initServiceMap() {
    const mapContainer = document.getElementById('service-map');
    if (!mapContainer) return;

    // Initialize map with cleaner settings
    const map = L.map('service-map', {
      center: [-37.08, 144.58],
      zoom: 10,
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: true
    });

    // Store map instance for external access
    mapInstance = map;

    // Use a clean, professional map style (Stadia Alidade Smooth)
    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>'
    }).addTo(map);

    // Professional color palette - cohesive and clean
    const areaConfig = {
      kyneton: {
        fill: '#F7C52D',
        stroke: '#B8941F',
        name: 'Kyneton',
        description: 'Main service hub',
        coords: [-37.2467, 144.4542]
      },
      heathcote: {
        fill: '#10B981',
        stroke: '#059669',
        name: 'Heathcote',
        description: 'Full coverage area',
        coords: [-36.9283, 144.7108]
      },
      miaMia: {
        fill: '#6366F1',
        stroke: '#4F46E5',
        name: 'Mia Mia',
        description: 'Full coverage area',
        coords: [-37.0150, 144.5850]
      },
      redesdale: {
        fill: '#F97316',
        stroke: '#EA580C',
        name: 'Redesdale',
        description: 'Full coverage area',
        coords: [-37.0200, 144.5400]
      }
    };

    // Store area config for external access
    areaConfigInstance = areaConfig;

    // Create smooth circular coverage areas using circles
    // This looks more professional than irregular polygons
    function createCoverageArea(config, radius) {
      const circle = L.circle(config.coords, {
        radius: radius,
        color: config.stroke,
        weight: 2,
        opacity: 0.8,
        fillColor: config.fill,
        fillOpacity: 0.25,
        className: 'coverage-area'
      });

      // Smooth hover effects
      circle.on('mouseover', function() {
        this.setStyle({
          fillOpacity: 0.4,
          weight: 3
        });
      });

      circle.on('mouseout', function() {
        this.setStyle({
          fillOpacity: 0.25,
          weight: 2
        });
      });

      return circle;
    }

    // Add coverage circles (radius in meters)
    const kynetonCoverage = createCoverageArea(areaConfig.kyneton, 6000);
    const heathcoteCoverage = createCoverageArea(areaConfig.heathcote, 5500);
    const miaMiaCoverage = createCoverageArea(areaConfig.miaMia, 4500);
    const redesdaleCoverage = createCoverageArea(areaConfig.redesdale, 4000);

    // Add to map in order (largest first)
    kynetonCoverage.addTo(map);
    heathcoteCoverage.addTo(map);
    miaMiaCoverage.addTo(map);
    redesdaleCoverage.addTo(map);

    // Create professional location markers with labels
    function createLocationMarker(config, isMain) {
      const markerHtml = isMain 
        ? `<div class="map-marker map-marker--main">
             <div class="map-marker__pulse"></div>
             <div class="map-marker__dot" style="background: ${config.fill}; border-color: ${config.stroke}"></div>
           </div>`
        : `<div class="map-marker">
             <div class="map-marker__dot" style="background: ${config.fill}; border-color: ${config.stroke}"></div>
           </div>`;

      const icon = L.divIcon({
        className: 'map-marker-container',
        html: markerHtml,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      const marker = L.marker(config.coords, { icon: icon });

      // Add clean tooltip that shows on hover
      marker.bindTooltip(config.name, {
        permanent: true,
        direction: 'top',
        offset: [0, -12],
        className: 'map-tooltip'
      });

      return marker;
    }

    // Add location markers
    createLocationMarker(areaConfig.kyneton, true).addTo(map);
    createLocationMarker(areaConfig.heathcote, false).addTo(map);
    createLocationMarker(areaConfig.miaMia, false).addTo(map);
    createLocationMarker(areaConfig.redesdale, false).addTo(map);

    // Draw subtle connection lines between areas
    const connectionStyle = {
      color: '#94A3B8',
      weight: 1.5,
      opacity: 0.5,
      dashArray: '6, 6'
    };

    // Connect areas with subtle lines
    L.polyline([areaConfig.kyneton.coords, areaConfig.miaMia.coords], connectionStyle).addTo(map);
    L.polyline([areaConfig.miaMia.coords, areaConfig.heathcote.coords], connectionStyle).addTo(map);
    L.polyline([areaConfig.miaMia.coords, areaConfig.redesdale.coords], connectionStyle).addTo(map);
    L.polyline([areaConfig.redesdale.coords, areaConfig.kyneton.coords], connectionStyle).addTo(map);

    // Fit bounds to show all areas with padding
    const bounds = L.latLngBounds([
      areaConfig.kyneton.coords,
      areaConfig.heathcote.coords,
      areaConfig.miaMia.coords,
      areaConfig.redesdale.coords
    ]);
    map.fitBounds(bounds, { padding: [50, 50] });

    // Interactive legend highlighting
    const legendItems = document.querySelectorAll('.map-legend__item');
    legendItems.forEach((item, index) => {
      const areas = [kynetonCoverage, heathcoteCoverage, miaMiaCoverage, redesdaleCoverage];
      
      item.addEventListener('mouseenter', () => {
        areas.forEach((area, i) => {
          if (i === index) {
            area.setStyle({ fillOpacity: 0.5, weight: 3 });
          } else {
            area.setStyle({ fillOpacity: 0.1, weight: 1 });
          }
        });
      });

      item.addEventListener('mouseleave', () => {
        areas.forEach(area => {
          area.setStyle({ fillOpacity: 0.25, weight: 2 });
        });
      });
    });

    // Enable scroll zoom only when map is clicked
    map.on('click', () => map.scrollWheelZoom.enable());
    mapContainer.addEventListener('mouseleave', () => map.scrollWheelZoom.disable());

    // Handle clickable location items in the areas list
    const locationItems = document.querySelectorAll('[data-location]');
    locationItems.forEach(item => {
      const locationKey = item.getAttribute('data-location');
      
      const handleLocationClick = () => {
        if (areaConfig[locationKey]) {
          const config = areaConfig[locationKey];
          // Zoom to the location with animation
          map.flyTo(config.coords, 13, {
            duration: 1,
            easeLinearity: 0.5
          });
          
          // Highlight the corresponding coverage area
          const areas = [kynetonCoverage, heathcoteCoverage, miaMiaCoverage, redesdaleCoverage];
          const areaKeys = ['kyneton', 'heathcote', 'miaMia', 'redesdale'];
          const areaIndex = areaKeys.indexOf(locationKey);
          
          areas.forEach((area, i) => {
            if (i === areaIndex) {
              area.setStyle({ fillOpacity: 0.5, weight: 3 });
            } else {
              area.setStyle({ fillOpacity: 0.1, weight: 1 });
            }
          });
          
          // Reset highlight after 2 seconds
          setTimeout(() => {
            areas.forEach(area => {
              area.setStyle({ fillOpacity: 0.25, weight: 2 });
            });
          }, 2000);
          
          // Scroll the map into view if needed
          mapContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      };
      
      // Handle click
      item.addEventListener('click', handleLocationClick);
      
      // Handle keyboard accessibility (Enter and Space)
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleLocationClick();
        }
      });
    });

    // Expose a global function to zoom to a location
    window.zoomToServiceArea = function(locationKey) {
      if (mapInstance && areaConfigInstance && areaConfigInstance[locationKey]) {
        const config = areaConfigInstance[locationKey];
        mapInstance.flyTo(config.coords, 13, {
          duration: 1,
          easeLinearity: 0.5
        });
      }
    };

    // Expose function to reset map view
    window.resetServiceMapView = function() {
      if (mapInstance) {
        const bounds = L.latLngBounds([
          areaConfigInstance.kyneton.coords,
          areaConfigInstance.heathcote.coords,
          areaConfigInstance.miaMia.coords,
          areaConfigInstance.redesdale.coords
        ]);
        mapInstance.flyToBounds(bounds, { padding: [50, 50], duration: 1 });
      }
    };
  }
})();
