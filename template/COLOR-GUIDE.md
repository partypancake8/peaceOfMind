# 🎨 COLOR CUSTOMIZATION GUIDE

## Current Color Scheme

The template uses colors from the original moving company website. **You should change these to match your brand!**

### Original Colors (Change These!)

```css
--primary-color: #ff2a13; /* Bright red - main buttons, links */
--primary-hover: #d80f0f; /* Darker red - hover states */
--secondary-color: #054866; /* Dark blue - headers, footer */
--accent-color: #ff862d; /* Orange - highlights, accents */
--dark-blue: #042f43; /* Very dark blue - mobile header */
--light-blue: #cae7f5; /* Light blue - backgrounds */
--text-dark: #272727; /* Almost black - body text */
--text-light: #ffffff; /* White - light text */
--background-light: #f3f3f3; /* Light gray - page background */
--error-red: #cf2e2e; /* Red - error messages */
```

---

## How to Choose Your Colors

### Step 1: Identify Your Brand Colors

**Do you have:**

- A logo? → Use colors from your logo
- Brand guidelines? → Use specified brand colors
- Existing marketing? → Match your business cards, brochures
- No branding yet? → Choose colors that represent your business

### Step 2: Pick Your Primary Color

This is your **main brand color**. It will appear on:

- Buttons
- Links
- Important highlights
- Call-to-action elements

**Example brands:**

- Facebook: #1877f2 (blue)
- Coca-Cola: #f40009 (red)
- Starbucks: #00704a (green)

### Step 3: Pick Your Secondary Color

This supports your primary color. Often used for:

- Headers
- Footers
- Sections
- Navigation bars

**Pro tip:** Choose a color that complements your primary color!

### Step 4: Pick Your Accent Color

This adds visual interest. Used for:

- Hover effects
- Special highlights
- Icons
- Small details

---

## Color Combinations That Work

### Professional Blue

```css
--primary-color: #0066cc; /* Medium blue */
--primary-hover: #0052a3; /* Darker blue */
--secondary-color: #1a1a1a; /* Almost black */
--accent-color: #ffa500; /* Orange accent */
```

**Good for:** Tech, finance, corporate, professional services

---

### Fresh Green

```css
--primary-color: #28a745; /* Green */
--primary-hover: #218838; /* Darker green */
--secondary-color: #2c3e50; /* Dark blue-gray */
--accent-color: #17a2b8; /* Teal accent */
```

**Good for:** Eco-friendly, health, wellness, organic, sustainability

---

### Bold Purple

```css
--primary-color: #6f42c1; /* Purple */
--primary-hover: #5a32a3; /* Darker purple */
--secondary-color: #212529; /* Very dark gray */
--accent-color: #fd7e14; /* Orange accent */
```

**Good for:** Creative, luxury, beauty, innovative, artistic

---

### Classic Red

```css
--primary-color: #dc3545; /* Red */
--primary-hover: #c82333; /* Darker red */
--secondary-color: #343a40; /* Dark gray */
--accent-color: #ffc107; /* Yellow/gold accent */
```

**Good for:** Urgent services, food, emergency, energetic

---

### Modern Teal

```css
--primary-color: #20c997; /* Teal */
--primary-hover: #1aa179; /* Darker teal */
--secondary-color: #495057; /* Medium gray */
--accent-color: #ff6b6b; /* Coral accent */
```

**Good for:** Modern, fresh, medical, tech, clean

---

### Elegant Navy

```css
--primary-color: #003366; /* Navy blue */
--primary-hover: #002244; /* Darker navy */
--secondary-color: #2c3e50; /* Blue-gray */
--accent-color: #e74c3c; /* Red accent */
```

**Good for:** Legal, financial, professional, trustworthy

---

## How to Update Colors in Your Template

### Method 1: Edit CSS Variables (Recommended)

1. Open `template/css/styles.css`
2. Find lines 4-14 (the `:root` section)
3. Replace the hex codes with your colors
4. Save the file
5. Refresh your browser!

**Example:**

```css
:root {
  /* Your New Brand Colors */
  --primary-color: #0066cc; /* Changed from #ff2a13 */
  --primary-hover: #0052a3; /* Changed from #d80f0f */
  --secondary-color: #1a1a1a; /* Changed from #054866 */
  --accent-color: #ffa500; /* Changed from #ff862d */
  /* ... rest of colors ... */
}
```

### Method 2: Use a Color Picker

1. Find an online color picker (Google "color picker")
2. Choose your color visually
3. Copy the hex code (example: #0066cc)
4. Paste into your CSS

---

## Testing Your Colors

### Contrast Checker

Make sure your colors pass accessibility standards!

**Tool:** [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

**Test combinations:**

- Primary color on white background (for buttons)
- White text on secondary color (for headers)
- Dark text on light background (for body content)

**Required ratio:**

- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- Headers: 3:1 minimum

---

## Where Each Color is Used

### Primary Color (#ff2a13 → Your choice)

- Main buttons (Next, Submit)
- Hover effects on links
- Progress bar fill
- Active navigation items

### Primary Hover (#d80f0f → Your choice)

- Button hover state
- Link hover state
- Active states

### Secondary Color (#054866 → Your choice)

- Header navigation background
- Footer background
- Section headers
- Service area banner

### Accent Color (#ff862d → Your choice)

- Mobile menu toggle button
- Underline animations
- Special highlights
- Icon highlights

### Dark Blue (#042f43 → Your choice)

- Mobile header background
- Mobile off-canvas menu
- Alternative dark sections

### Light Blue (#cae7f5 → Your choice)

- Light section backgrounds
- Hover states
- Subtle backgrounds

---

## Pro Tips

### ✅ DO:

- Use colors that represent your brand
- Keep high contrast for readability
- Test on different screens/devices
- Limit to 3-5 main colors
- Consider color psychology
- Test in light AND dark environments

### ❌ DON'T:

- Use colors that are too similar
- Choose colors that clash
- Forget about colorblind users
- Use low contrast combinations
- Change colors too frequently
- Ignore your brand guidelines

---

## Color Psychology Quick Guide

**Red:** Energy, urgency, passion, excitement
**Blue:** Trust, calm, professional, stable
**Green:** Growth, health, eco-friendly, fresh
**Orange:** Friendly, creative, enthusiastic, fun
**Purple:** Luxury, creative, wise, imaginative
**Yellow:** Optimistic, cheerful, attention-grabbing
**Black:** Sophisticated, powerful, elegant, modern
**White:** Clean, simple, pure, minimal

---

## Quick Color Changes

Want to quickly preview a color? Use browser DevTools:

1. Right-click on your page
2. Choose "Inspect" or "Inspect Element"
3. Find the CSS rule with the color
4. Click on the color box
5. Choose a new color to preview
6. Copy the hex code when you find one you like!

---

## Example: Complete Color Change

**Before (Original):**

```css
:root {
  --primary-color: #ff2a13;
  --primary-hover: #d80f0f;
  --secondary-color: #054866;
  --accent-color: #ff862d;
  --dark-blue: #042f43;
  --light-blue: #cae7f5;
}
```

**After (Your Rebrand):**

```css
:root {
  /* My Business Colors */
  --primary-color: #0066cc; /* My brand blue */
  --primary-hover: #0052a3; /* Darker blue for hover */
  --secondary-color: #1a1a1a; /* Almost black */
  --accent-color: #ffa500; /* Orange for highlights */
  --dark-blue: #0d1117; /* Very dark for headers */
  --light-blue: #e3f2fd; /* Light blue background */
}
```

Save, refresh, and see your new brand colors! 🎨

---

## Need Help Choosing?

### Free Color Tools:

- **Coolors.co** - Generate color palettes
- **Adobe Color** - Color wheel and schemes
- **Paletton** - Advanced color scheme designer
- **Color Hunt** - Browse popular palettes
- **Material Design Colors** - Google's color system

### Get Colors From:

- Your logo (use a color picker tool)
- Competitor websites (see what works in your industry)
- Popular brands in your field
- Stock photos that represent your business

---

**Remember:** Colors create emotion and trust. Choose wisely! 🎨✨
