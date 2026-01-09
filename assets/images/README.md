# Images Directory

Place your images in this folder. Recommended files and specifications:

## Required Images

| Filename | Size | Format | Description |
|----------|------|--------|-------------|
| `logo.svg` | - | SVG | Business logo (vector preferred) |
| `logo.png` | 280x80px | PNG | Fallback logo if SVG not available |
| `og-image.webp` | 1200x630px | WebP | Social media share image |
| `hero-bg.webp` | 1920x1080px | WebP | Optional hero background |
| `favicon.ico` | 32x32px | ICO | Browser tab icon |
| `favicon.svg` | - | SVG | Modern browsers favicon |
| `apple-touch-icon.png` | 180x180px | PNG | iOS home screen icon |

## Optional Images

| Filename | Size | Format | Description |
|----------|------|--------|-------------|
| `driver.webp` | 400x400px | WebP | Driver profile photo |
| `vehicle.webp` | 800x600px | WebP | Photo of your taxi |
| `service-airport.webp` | 600x400px | WebP | Airport service image |
| `service-local.webp` | 600x400px | WebP | Local trips image |

## Image Guidelines

### Performance
- **Maximum file size:** 200KB for hero images, 100KB for other images
- **Format:** WebP preferred (better compression), PNG for logos with transparency
- **Lazy loading:** All images use `loading="lazy"` except above-fold content

### Accessibility
- All images should have meaningful alt text in the HTML
- Avoid text in images where possible
- Ensure sufficient contrast for any overlaid text

### Optimization Tips
1. Use [Squoosh](https://squoosh.app/) or [TinyPNG](https://tinypng.com/) to compress images
2. Resize images to actual display size (don't upload 4000px images for 400px display)
3. Use WebP format for photographs
4. Use SVG for logos and icons

### Creating og-image.webp
Your social share image should include:
- Business name
- Phone number
- A relevant image (taxi, driver, or local landmark)
- High contrast text for readability

Recommended tools:
- [Canva](https://www.canva.com/) (free templates available)
- [Figma](https://www.figma.com/)
