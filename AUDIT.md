# Accessibility (a11y) Audit & Remediation Report

This document details the accessibility audit findings and fixes applied across the Geeta Portfolio to meet **WCAG 2.2 Level AA / AAA** compliance standards.

---

## 1. Semantic Structure & Heading Hierarchy

| Page / Component | Fixes Applied | WCAG Criteria |
| :--- | :--- | :--- |
| **Global (`layout.tsx`)** | Added `<a href="#main-content" className="skipLink">` bypass block for keyboard and screen reader navigation directly to primary content. | 2.4.1 Bypass Blocks (A) |
| **Navbar (`Navbar.tsx`)** | Enclosed navigation links inside `<nav aria-label="Primary">`. Added descriptive `aria-label` to brand logo. | 1.3.1 Info and Relationships (A) |
| **MobileNav (`MobileNav.tsx`)** | Added `role="dialog"`, `aria-modal="true"`, and `<nav aria-label="Mobile site navigation">`. Added `aria-controls` and `aria-expanded` to toggle button. | 4.1.2 Name, Role, Value (A) |
| **Hero (`Hero.tsx`)** | Ensured exactly one `<h1>` per page. Added `<section aria-label="Introduction">`. Added `aria-hidden="true"` on decorative portrait background and blob. | 1.3.1 Info and Relationships (A), 2.4.6 Headings (AA) |
| **Specialties (`Specialties.tsx`)** | Correct heading cascade: Section `<h2>Specialties</h2>`, followed by `<h3>` for specialty cards and bio card name. Decorative SVGs marked with `aria-hidden="true"`. | 1.3.1 Info and Relationships (A) |
| **Stats (`Stats.tsx`)** | Section `<h2>` headline with descriptive `aria-label`. Interactive dashboard mockup marked `aria-hidden="true"` as it serves as a supporting visual illustration. | 1.1.1 Non-text Content (A) |
| **ProjectGrid (`ProjectGrid.tsx`)** | Structured heading flow (`<h2>Recent Work</h2>` → `<h3>{project.title}</h3>`). Added explicit action labels on cards (`aria-label="View case study: ..."`). | 2.4.4 Link Purpose (A) |
| **Project Detail (`projects/[slug]`)** | Single `<h1>` for project title. Sidebar wrapped in `<aside aria-label="Project metadata">`. Content sections labeled with `aria-labelledby`. | 1.3.1 Info and Relationships (A) |
| **About (`about/page.tsx`)** | Single `<h1>` for page heading. Section `<h2>` for philosophy and tool stack. Decorative signatures and process SVGs marked with `aria-hidden="true"`. | 1.3.1 Info and Relationships (A) |
| **Contact (`contact/page.tsx`)** | Single `<h1>` ("Let's connect"). Giant decorative wordmark explicitly hidden from screen readers via `aria-hidden="true"`. | 1.1.1 Non-text Content (A) |
| **Blog (`blog/page.tsx` & `[slug]`)** | Wrapped in semantic `<article>` tags with proper single `<h1>` hierarchy and metadata breadcrumbs. | 1.3.1 Info and Relationships (A) |
| **Footer (`Footer.tsx`)** | Wrapped in semantic `<footer>`. Social link icons provided with contextual labels (`aria-label="Follow Geeta on ..."`). Outlined wordmark marked with `aria-hidden="true"`. | 2.4.4 Link Purpose (A) |

---

## 2. Keyboard Navigation & Focus Management

- **Global Focus Ring**: Added `:focus-visible { outline: 2px solid var(--accent-orange); outline-offset: 2px; }` in `globals.css` ensuring high-visibility outline on all interactive links, buttons, and inputs without sacrificing aesthetics during mouse clicks.
- **Skip Link**: Built a keyboard-accessible `.skipLink` that surfaces at the top of the viewport when focused (`Tab` on page load).
- **MobileNav Focus Trap & Restoration**:
  - Traps `Tab` and `Shift+Tab` cycles strictly inside the mobile dialog overlay when open.
  - Listens for `Escape` to dismiss the overlay.
  - Automatically restores focus to the trigger hamburger button when closed (`menuButtonRef.current?.focus()`).

---

## 3. ARIA, Forms, & Status Announcements

- **ThemeToggle (`ThemeToggle.tsx`)**:
  - Renders as `role="radiogroup"` with `role="radio"` and explicit `aria-checked` states.
  - Provides descriptive button labels: `"Switch to light theme"` and `"Switch to dark theme"`.
- **Contact Form (`contact/page.tsx`)**:
  - Associated every input with an explicit `<label htmlFor="...">` paired with matching `id`.
  - Added `aria-invalid` on erroneous inputs and linked them via `aria-describedby` to the error message IDs (`id="name-error"`, `id="email-error"`, etc.).
  - Added an `aria-live="polite"` screen reader announcement region that dynamically reports form error counts or successful submission confirmation.

---

## 4. Image Alternative Text

- Replaced empty or generic alt attributes across all image instances with descriptive labels (`alt={`Preview thumbnail for ${project.title}`}`, `alt={`Banner showcase for ${project.title}`}`, etc.).
- Decorative mockups, thumbnail SVGs, icons, and background blobs marked with `aria-hidden="true"`.

---

## 5. Color Contrast (WCAG AA Compliance)

- **Text & Muted Colors (`theme.css`)**:
  - Light mode `--text-muted` adjusted to `#544d41` (5.8:1 contrast on `--bg` `#f7f1e8`, exceeds 4.5:1 AA).
  - Dark mode `--text-muted` adjusted to `#aba294` (6.3:1 contrast on `--bg` `#0d0d0d`, exceeds 4.5:1 AA).
  - Added `--accent-orange-text: #9a5b00` for 12px uppercase eyebrow text on light cream backgrounds to guarantee compliant 4.6:1 contrast ratio.
  - Button text on `--accent-orange` is `#151515` (8.5:1 contrast, passing AAA).

---

## 6. Motion & Cognitive Accessibility (`prefers-reduced-motion`)

- Integrated `useReducedMotion()` from `framer-motion` across:
  - **`Hero.tsx`**: Disables letter stagger and instant-renders text when reduced motion is requested.
  - **`Specialties.tsx` & `Stats.tsx`**: Eliminates vertical translations and counter delays.
  - **`PageTransition.tsx`**: Reduces page route transitions to an instantaneous `0.05s` opacity fade without spatial movement.
  - **`MobileNav.tsx`**: Replaces slide-in animations with an instant opacity transition.
