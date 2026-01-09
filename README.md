# Singh's Taxi M0541

Local taxi service website for Preetipal Singh, serving Kyneton, Heathcote, Mia Mia & Redesdale.

## 🚀 Quick Start

### 1. Add Your Contact Details

Edit `_data/site.yml` and replace these placeholders:

| Placeholder | What to add |
|-------------|-------------|
| `{PHONE_E164}` | Phone in format `+61412345678` |
| `{PHONE_DISPLAY}` | Phone for display `0412 345 678` |
| `{WHATSAPP_NUMBER}` | WhatsApp number (no +) `61412345678` |
| `{EMAIL_CONTACT}` | Email address |
| `{VEHICLE_TYPE}` | e.g., "Toyota Camry" |
| `{ABN}` | Your ABN (optional) |

### 2. Add Your Images

Place in `/assets/images/`:
- `taxi-placeholder.webp` - Photo of your taxi (400x300px, <100KB)
- `og-image.webp` - Social share image (1200x630px)

### 3. Preview Locally

```bash
npm install
npm start
```

Opens at `http://localhost:8080`

### 4. Deploy to GitHub Pages

1. Push to GitHub
2. Go to **Settings → Pages**
3. Source: **GitHub Actions**
4. Site will be live at `https://username.github.io/repo-name/`

## 📁 Project Structure

```
singh-taxi-website/
├── _data/site.yml        # Your details (edit this!)
├── _includes/            # Header, footer, layout
├── content/
│   ├── index.njk         # Homepage
│   └── privacy.md        # Privacy policy
├── assets/
│   ├── css/styles.css    # All styles
│   ├── js/main.js        # Minimal JS
│   └── images/           # Your photos
└── .github/workflows/    # Auto-deploy
```

## ✅ Before Launch

- [ ] Phone number added
- [ ] WhatsApp number added
- [ ] Taxi photo added
- [ ] Test call/WhatsApp buttons on mobile

---

Built with [Eleventy](https://www.11ty.dev/) • Hosted free on GitHub Pages
