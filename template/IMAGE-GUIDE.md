# IMAGE REPLACEMENT QUICK REFERENCE

## 🖼️ Where Each Image Appears on the Website

### Logo (logo.png)

**Locations:**

- Desktop navigation (top of every page)
- Mobile header (smaller screens)
  **Dimensions:** 300px × 91px recommended
  **Find in HTML:** Lines 34, 85

---

### Logo White (logo-white.png)

**Locations:**

- Footer (bottom of page)
  **Dimensions:** 150px wide recommended
  **Find in HTML:** Line 359

---

### Favicon (favicon.png)

**Locations:**

- Browser tab icon
- Bookmarks
  **Dimensions:** 32×32px minimum (also provide 192×192px)
  **Find in HTML:** Line 11

---

### Hero Background (hero-bg.jpg)

**Locations:**

- Large background image behind main headline
- Behind the quote form
- First thing visitors see
  **Dimensions:** 1920px × 1080px or larger
  **Find in CSS:** Line 252 (styles.css)
  **CSS Code to Change:**

```css
.hero-section {
  background: linear-gradient(rgba(5, 72, 102, 0.8), rgba(5, 72, 102, 0.9)),
    url("../images/hero-bg.jpg") center/cover no-repeat;
}
```

---

### Blog Image 1 (blog-1.jpg)

**Locations:**

- First card in resources section
- Bottom of homepage
  **Dimensions:** 800px × 400px recommended
  **Find in HTML:** Line 291

---

### Blog Image 2 (blog-2.jpg)

**Locations:**

- Second card in resources section
- Bottom of homepage
  **Dimensions:** 800px × 400px recommended
  **Find in HTML:** Line 303

---

### Blog Image 3 (blog-3.jpg)

**Locations:**

- Third card in resources section
- Bottom of homepage
  **Dimensions:** 800px × 400px recommended
  **Find in HTML:** Line 315

---

## 📐 Recommended Image Specifications

### For Best Quality:

**Logos:**

- Format: PNG with transparency
- Resolution: 2x size for retina displays
- Color: Full color for main logo, white for footer

**Hero Background:**

- Format: JPG (optimized)
- File size: Under 500KB (use compression)
- Resolution: High quality, 1920px+ width
- Aspect ratio: 16:9 or wider

**Blog/Resource Images:**

- Format: JPG
- File size: 100-200KB each
- Resolution: 800px × 400px
- Aspect ratio: 2:1 (landscape)

---

## 🎨 Color Overlay on Hero Background

The hero background has a dark blue overlay to ensure text readability.

**To adjust the overlay:**
Edit line 252 in `css/styles.css`:

```css
/* Lighter overlay (shows more image) */
background: linear-gradient(rgba(5, 72, 102, 0.5), rgba(5, 72, 102, 0.6)),
  url("../images/hero-bg.jpg") center/cover no-repeat;

/* Darker overlay (shows less image, better text contrast) */
background: linear-gradient(rgba(5, 72, 102, 0.9), rgba(5, 72, 102, 0.95)),
  url("../images/hero-bg.jpg") center/cover no-repeat;
```

The numbers (0.8, 0.9) control opacity: 0 = transparent, 1 = solid color

---

## 🔍 How to Find & Replace in Your Editor

### VS Code / Most Editors:

1. Press `Cmd+F` (Mac) or `Ctrl+F` (Windows)
2. Search for filename (e.g., "logo.png")
3. Replace with your new filename
4. Or just update the existing files in `/images/` folder

### Keep Same Filenames:

Easiest option - just replace the actual image files:

1. Save your logo as `logo.png`
2. Place in `template/images/` folder
3. Overwrites placeholder
4. No code changes needed! ✅

---

## 📱 Mobile Testing Reminder

After adding images, test on:

- iPhone (Safari)
- Android (Chrome)
- iPad/Tablet
- Desktop browsers

Images should:

- Load quickly
- Look sharp on retina displays
- Not cause layout shifts
- Be optimized for file size

---

## ✅ Image Checklist

Before going live:

- [ ] Logo looks sharp at all sizes
- [ ] Logo white version visible on dark footer
- [ ] Favicon appears in browser tab
- [ ] Hero background loads quickly
- [ ] Hero background looks good at different screen sizes
- [ ] All blog images are same aspect ratio
- [ ] All images compressed/optimized
- [ ] Alt text updated for accessibility
- [ ] Images don't slow page load (test with Chrome DevTools)

---

**Pro Tip:** Use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/) to compress images before uploading!
