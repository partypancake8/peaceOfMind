# Website Template - Rebrand Guide

This is a cleaned-up template based on a moving company website, ready for your business rebrand.

## 📁 Project Structure

```
template/
├── index.html          # Main homepage
├── css/
│   └── styles.css      # All styling (customizable colors/fonts)
├── js/
│   └── main.js         # Form functionality & mobile menu
├── images/             # Place your images here
│   ├── logo.png
│   ├── logo-white.png
│   ├── favicon.png
│   ├── hero-bg.jpg
│   ├── blog-1.jpg
│   ├── blog-2.jpg
│   └── blog-3.jpg
└── README.md          # This file
```

## 🎨 Required Images for Rebrand

### 1. **Logo Images** (PRIORITY)

- **File:** `images/logo.png`

  - **Usage:** Main header/navigation logo
  - **Recommended Size:** 300px × 91px (or similar aspect ratio)
  - **Background:** Transparent PNG preferred
  - **Used in:** Header navigation, mobile header

- **File:** `images/logo-white.png`
  - **Usage:** Footer logo (white version)
  - **Recommended Size:** 150px wide
  - **Background:** Transparent PNG with white text/design
  - **Used in:** Footer

### 2. **Favicon**

- **File:** `images/favicon.png`
  - **Usage:** Browser tab icon
  - **Recommended Size:** 32×32px, 192×192px
  - **Format:** PNG or ICO

### 3. **Hero Background Image** (PRIORITY)

- **File:** `images/hero-bg.jpg`
  - **Usage:** Main homepage hero section background
  - **Recommended Size:** 1920px × 1080px or larger
  - **Format:** JPG (optimized for web)
  - **Notes:** Should represent your business/service visually
  - **Current CSS location:** Line 252 in `css/styles.css`
  - **Example:** Office space, team photo, service in action, etc.

### 4. **Blog/Resource Images**

These are for the resources/blog section at the bottom of the homepage:

- **File:** `images/blog-1.jpg`
  - **Usage:** First blog post thumbnail
  - **Recommended Size:** 800px × 400px
- **File:** `images/blog-2.jpg`
  - **Usage:** Second blog post thumbnail
  - **Recommended Size:** 800px × 400px
- **File:** `images/blog-3.jpg`
  - **Usage:** Third blog post thumbnail
  - **Recommended Size:** 800px × 400px

## ✏️ Text Content to Update

### In `index.html`:

1. **Meta Tags** (Lines 7-9)

   - Update page title
   - Update meta description
   - Add your keywords

2. **License/Registration Numbers** (Line 19)

   - Replace "Your License Info Here" with your credentials

3. **Phone Numbers** (Multiple locations)

   - Replace ALL instances of `YOUR-PHONE` with your actual phone number
   - Format example: `248-469-3644` or `(248) 469-3644`
   - Search for: `tel:YOUR-PHONE` and `YOUR-PHONE`

4. **Business Name**

   - Replace "Your Business Name" throughout the file
   - Locations: title tags, alt text, footer

5. **Main Headline** (Line 99)

   - Update hero section headline

6. **Service Highlights** (Lines 103-110)

   - Customize your 6 key features/benefits

7. **Service Area** (Line 253)

   - Update "Your Service Area" with your counties/regions

8. **About Section** (Lines 264-268)

   - Add your tagline
   - Write your business description

9. **Cities/Service Areas** (Lines 272-280)

   - Replace with your actual service cities
   - Add/remove as needed

10. **Blog Posts** (Lines 288-329)

    - Update titles, dates, and links for your content

11. **Footer Copyright** (Line 368)
    - Update year and business name

## 🎨 Color Customization

### In `css/styles.css` (Lines 4-14):

```css
--primary-color: #ff2a13; /* Main brand color (buttons, links) */
--primary-hover: #d80f0f; /* Hover state for primary */
--secondary-color: #054866; /* Secondary brand color */
--accent-color: #ff862d; /* Accent highlights */
--dark-blue: #042f43; /* Dark backgrounds */
--light-blue: #cae7f5; /* Light backgrounds */
--text-dark: #272727; /* Main text color */
```

**How to customize:**

1. Choose your brand colors
2. Use a color picker tool or brand guidelines
3. Replace the hex codes (#ff2a13) with your colors
4. Save and refresh to see changes

## 📱 Features Included

✅ **Responsive Design** - Works on desktop, tablet, and mobile
✅ **Multi-Step Quote Form** - 7-step lead capture form with validation
✅ **Mobile Menu** - Slide-out navigation for mobile devices
✅ **Progress Bar** - Visual feedback during form completion
✅ **Form Validation** - ZIP codes, phone, email validation
✅ **Smooth Animations** - Professional transitions and hover effects
✅ **SEO Ready** - Proper meta tags and semantic HTML

## 🚀 Form Submission Setup

The form currently **does NOT submit data**. You need to configure it:

### Option 1: Email Service (Simple)

Add a service like [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/)

### Option 2: Custom Backend

Edit `js/main.js` line 169-176 to point to your API endpoint

```javascript
fetch("/api/submit-quote", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});
```

### Option 3: WordPress/CMS Integration

Use a contact form plugin that accepts AJAX submissions

## 📋 Quick Start Checklist

- [ ] Replace all logo images (`logo.png`, `logo-white.png`, `favicon.png`)
- [ ] Add hero background image (`hero-bg.jpg`)
- [ ] Update ALL phone numbers (search for `YOUR-PHONE`)
- [ ] Customize brand colors in CSS
- [ ] Update business name throughout
- [ ] Write your unique headline and description
- [ ] Add your service areas/cities
- [ ] Replace blog post images and content
- [ ] Set up form submission handler
- [ ] Test on mobile devices
- [ ] Update meta tags for SEO

## 🔧 Technical Notes

- **No external dependencies** - Pure HTML, CSS, JavaScript
- **No WordPress required** - Static HTML template
- **Fast loading** - Minimal, optimized code
- **Modern browsers** - IE11+ supported
- **Mobile-first** - Responsive breakpoints at 480px, 768px, 1199px

## 📞 Need Help?

The template is clean and well-commented. Look for `TODO:` comments throughout the code for specific customization points.

## 📄 License

This template was derived from publicly available website code and cleaned for reuse. Customize freely for your business needs.

---

**Remember:** This template removes all original business-specific content. It's your foundation - make it yours!
