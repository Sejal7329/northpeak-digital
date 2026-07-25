# Website Optimization Changelog

## ⚡ Performance Improvements

* **Optimized Images:** Compressed image files and added `loading="lazy"` to portfolio cards for faster page loads.
* **Layout Stability:** Added fixed dimensions (`width` and `height`) to images to eliminate layout shifts (CLS).
* **Lean Styles:** Kept component CSS clean and modular to minimize render-blocking resources.

---

## ♿ Accessibility Enhancements

* **Semantic Structure:** Used proper `<header>`, `<main>`, `<section>`, and `<footer>` HTML tags.
* **Form Labels:** Explicitly connected all form inputs to their `<label>` elements for screen readers.
* **Readable Contrast:** Updated text and background colors to meet WCAG AA contrast standards.
* **Descriptive Alt Text:** Ensured all project images have clear `alt` text descriptions.
* **Keyboard Navigation:** Ensured full keyboard access with clear `aria-label` tags on interactive buttons.

---

## 🎯 Final Results

* **Lighthouse Performance Score:** 90+
* **Lighthouse Accessibility Score:** 90+
* **Responsiveness:** Verified across 360px (mobile), 768px (tablet), and 1440px (desktop)

## 📊 Lighthouse Audit Reports

### Desktop Audit (90+ Score)
![Lighthouse Desktop Report](./src/assets/Screenshot%202026-07-26%20005433.png)

### Mobile Audit (90+ Score)
![Lighthouse Mobile Report](./src/assets/Screenshot%202026-07-26%20011628.png)