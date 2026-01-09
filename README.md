# {BUSINESS_NAME} - Taxi Website

A fast, accessible, mobile-first static website for a local taxi business. Built with [Eleventy](https://www.11ty.dev/) and hosted free on GitHub Pages.

## 🚀 Live Site

**URL:** `https://{GITHUB_USERNAME}.github.io/{REPO_NAME}/`

---

## 📋 Quick Start

### 1. Replace Placeholders

Find and replace these placeholders throughout the project:

| Placeholder | Description | Example |
|-------------|-------------|---------|
| `{BUSINESS_NAME}` | Your business name | Singh's Taxi Service |
| `{DRIVER_NAME}` | Driver's name | Harpreet Singh |
| `{PHONE_E164}` | Phone in E.164 format | +61412345678 |
| `{PHONE_DISPLAY}` | Phone for display | 0412 345 678 |
| `{WHATSAPP_NUMBER}` | WhatsApp (no +) | 61412345678 |
| `{EMAIL_CONTACT}` | Email address | bookings@example.com |
| `{CITY_REGION}` | Service area | Melbourne, Victoria |
| `{SERVICE_AREAS}` | Detailed areas | Melbourne CBD, Inner Suburbs |
| `{VEHICLE_TYPE}` | Your vehicle | Toyota Camry Hybrid |
| `{ABN}` | Australian Business Number | 12 345 678 901 |
| `{MAP_LAT}` | Latitude | -37.8136 |
| `{MAP_LON}` | Longitude | 144.9631 |
| `{ACCENT_HEX}` | Brand colour | #D4A017 |
| `{GOOGLE_FORM_EMBED_URL}` | Google Form URL | https://docs.google.com/forms/d/e/xxx/viewform?embedded=true |
| `{GA4_ID}` | Google Analytics ID | G-XXXXXXXXXX |

### 2. Add Your Images

Place images in `/assets/images/`:
- `logo.svg` or `logo.png` - Your business logo
- `og-image.webp` - Social share image (1200x630px)
- `favicon.ico` - Browser icon
- See `/assets/images/README.md` for full list

### 3. Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm start

# Build for production
npm run build
```

Site will be available at `http://localhost:8080`

### 4. Deploy to GitHub Pages

1. Push your code to GitHub
2. Go to **Settings → Pages**
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. The included workflow will automatically build and deploy

Alternatively, deploy from branch:
- Source: **Deploy from a branch**
- Branch: `main` / `_site`
- Run `npm run build` and commit `_site` folder

---

## 📁 Project Structure

```
singh-taxi-website/
├── _data/
│   └── site.yml          # Site configuration (placeholders)
├── _includes/
│   ├── base.njk          # Main layout template
│   ├── header.njk        # Sticky header with CTAs
│   └── footer.njk        # Footer with contact info
├── content/
│   ├── index.njk         # Homepage
│   ├── about.md          # About page
│   ├── services.njk      # Services page
│   ├── fares.njk         # Pricing page
│   ├── book.njk          # Booking page (Google Form)
│   ├── testimonials.njk  # Reviews page
│   ├── privacy.md        # Privacy policy
│   └── sitemap.xml.njk   # Auto-generated sitemap
├── assets/
│   ├── css/
│   │   └── styles.css    # All styles (mobile-first)
│   ├── js/
│   │   └── main.js       # Minimal JS enhancements
│   └── images/
│       └── README.md     # Image guidelines
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions workflow
├── .eleventy.js          # Eleventy configuration
├── package.json          # Dependencies
├── robots.txt            # Search engine directives
├── CNAME                 # Custom domain (optional)
└── LICENSE               # MIT License
```

---

## ✅ Pre-Launch Checklist

### Content
- [ ] All placeholders replaced
- [ ] Fares table updated with actual prices
- [ ] Service areas accurate
- [ ] Business hours correct
- [ ] Testimonials updated (or use real reviews)

### Images
- [ ] Logo uploaded
- [ ] OG image created (for social sharing)
- [ ] Favicon added

### Booking
- [ ] Google Form created and URL added
- [ ] Form tested on mobile

### Technical
- [ ] Site builds without errors (`npm run build`)
- [ ] All links work
- [ ] Phone number clickable on mobile
- [ ] WhatsApp link works

### SEO & Accessibility
- [ ] Run [Lighthouse](https://developers.google.com/web/tools/lighthouse) audit (aim for 90+)
- [ ] Test [Google Rich Results](https://search.google.com/test/rich-results) for structured data
- [ ] Check [WAVE](https://wave.webaim.org/) for accessibility
- [ ] Verify [colour contrast](https://webaim.org/resources/contrastchecker/) (4.5:1 minimum)

### Deployment
- [ ] GitHub Pages enabled
- [ ] Site loads at GitHub URL
- [ ] Custom domain configured (optional)
- [ ] HTTPS working

---

## 🎨 Customisation

### Colours

Edit CSS custom properties in `/assets/css/styles.css`:

```css
:root {
  --color-primary: #1a1a2e;    /* Dark blue - header, footer */
  --color-accent: #d4a017;      /* Gold - buttons, highlights */
  --color-call: #0066cc;        /* Blue - call button */
  --color-success: #25d366;     /* Green - WhatsApp */
}
```

### Adding Pages

1. Create a new `.md` or `.njk` file in `/content/`
2. Add frontmatter:
```yaml
---
layout: base.njk
title: Page Title
description: Page description for SEO
---
```
3. Add content below frontmatter
4. Add link to navigation in `/_includes/header.njk`

---

## 🔧 Technical Notes

- **No JavaScript required** - Site fully functional without JS
- **Mobile-first CSS** - Base styles for mobile, media queries for larger screens
- **Semantic HTML** - Proper heading hierarchy, ARIA labels, landmarks
- **Performance** - No external dependencies except optional Google Fonts
- **Accessibility** - Skip link, keyboard navigation, sufficient contrast

---

## 📄 License

MIT License - See [LICENSE](LICENSE) file.

---

## 🆘 Support

For issues with the website template, check:
- [Eleventy Documentation](https://www.11ty.dev/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

---

Built with ❤️ for local taxi businesses in Australia.
