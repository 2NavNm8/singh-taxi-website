# Singh's Taxi

**Taxi M0541** - Local taxi service website for Preetipal Singh, serving Kyneton, Heathcote, Mia Mia & Redesdale.

## 🚀 Quick Start

### 1. Preview Locally

```bash
npm install
npm start
```

Opens at `http://localhost:8080`

### 2. Add Your Images

Place in `/assets/images/`:
- `taxi-placeholder.webp` - Photo of your taxi (400x300px recommended)
- `og-image.webp` - Social share image (1200x630px) - shown when sharing on Facebook/Twitter

### 3. Set Up Google Reviews (Important!)

To let customers leave reviews via QR code:

1. **Create Google Business Profile** at [business.google.com](https://business.google.com)
   - Search for your existing listing or create new
   - Add your business name: "Singh's Taxi"
   - Add service areas: Kyneton, Heathcote, Mia Mia, Redesdale
   - Verify your business (Google will send a postcard)

2. **Get your Place ID**
   - Go to [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
   - Search for your business
   - Copy the Place ID

3. **Update `_data/site.yml`**
   ```yaml
   google_place_id: "YOUR_PLACE_ID_HERE"
   google_review_url: "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID_HERE"
   ```

4. **Generate QR Code**
   - Go to [QR Code Generator](https://www.qrcode-monkey.com/) or similar
   - Enter your review URL: `https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID`
   - Download as PNG (150x150px minimum)
   - Save as `/assets/images/review-qr.png`

5. **Print for the taxi**
   - Print the QR code on a card/sticker
   - Place in your taxi for customers to scan

### 4. Deploy to GitHub Pages

1. Push to GitHub
2. Go to **Settings → Pages**
3. Source: **GitHub Actions**
4. Site will be live at `https://username.github.io/repo-name/`

**Note:** Update the `base_url` in `_data/site.yml` with your live URL for SEO.

## 📁 Project Structure

```
singh-taxi-website/
├── _data/site.yml        # Business details & config
├── _includes/            # Header, footer, layout templates
├── content/
│   ├── index.njk         # Homepage
│   └── privacy.md        # Privacy policy
├── assets/
│   ├── css/styles.css    # All styles (yellow taxi theme)
│   ├── js/main.js        # Minimal JavaScript
│   └── images/           # Photos & QR code
└── .github/workflows/    # Auto-deploy to GitHub Pages
```

## ✅ Launch Checklist

- [x] Phone number: 0452 628 986
- [x] WhatsApp: 61452628986  
- [x] Business name: Singh's Taxi
- [x] Taxi number: M0541
- [ ] Taxi photo added (`taxi-placeholder.webp`)
- [ ] Google Business Profile created
- [ ] Review QR code generated and added
- [ ] Test call/WhatsApp buttons on mobile
- [ ] Push to GitHub
- [ ] Update `base_url` in site.yml with live URL

## 🎨 Design Features

- **Yellow taxi theme** - Classic, recognizable colors
- **Large buttons** - Easy to tap for all ages
- **Mobile-first** - Works great on phones and tablets
- **Fast loading** - No JavaScript frameworks, minimal CSS
- **SEO optimized** - Meta tags, structured data, sitemap
- **Accessible** - Proper headings, ARIA labels, focus states

## 🔧 Customization

### Change Colors
Edit the CSS variables in `/assets/css/styles.css`:
```css
:root {
  --color-accent: #FFC107;  /* Taxi yellow */
  --color-primary: #1a1a1a; /* Dark text/headers */
}
```

### Add/Remove Service Areas
Edit `_data/site.yml`:
```yaml
service_areas: "Kyneton, Heathcote, Mia Mia, Redesdale"
```

### Edit Reviews
Update the sample reviews in `/content/index.njk` in the reviews section.

---

Built with [Eleventy](https://www.11ty.dev/) • Hosted free on GitHub Pages
