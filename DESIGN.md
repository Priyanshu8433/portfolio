# High-End Editorial Portfolio Design System

## 1. Overview & Creative North Star
### Creative North Star: "The Kinetic Curator"
This design system is a radical departure from the "boxed-in" web. It is a digital manifestation of a high-end physical exhibition—merging the raw, tactile energy of a screen-printed poster with the sophisticated precision of modern editorial design.

We move beyond standard UI templates by utilizing **intentional asymmetry** and **atmospheric depth**. The design breaks the grid to create visual tension; elements do not just sit on a page, they exist within an environment characterized by film grain, silhouetted forms, and aggressive typographic scales. This is a system built for impact, clarity, and a premium "signature" feel that prioritizes the curator's perspective over generic utility.

---

## 2. Colors
The palette is built on high-contrast tension: a vibrant, hyper-saturated orange set against a foundation of "absolute" blacks and off-whites.

*   **Primary (Vibrant):** `primary` (#ff906d) and `primary_container` (#ff784d). This is our signature "action" color, used for high-impact brand moments and focal points.
*   **Neutrals:** `surface` (#0e0e0e) and `on_surface` (#ffffff). The background is never a "flat" digital black but a deep, textured void.

### The "No-Line" Rule
Standard 1px solid borders for sectioning are strictly prohibited. We define space through **Tonal Transitions**. Boundaries are created by shifting from `surface` (#0e0e0e) to `surface_container_low` (#131313). Content should feel separated by light and shadow, not by architectural lines.

### Surface Hierarchy & Nesting
Treat the UI as physical layers. Use the `surface_container` tiers to create "stacked" importance. An inner card should use `surface_container_high` (#1f1f1f) placed atop a `surface_container` (#191919) section to imply a natural lift.

### The "Glass & Gradient" Rule
To avoid a flat, "out-of-the-box" look, floating elements must utilize **Glassmorphism**. Apply a semi-transparent `surface_variant` with a 20px backdrop-blur. For primary CTAs, use a subtle radial gradient transitioning from `primary` (#ff906d) to `primary_fixed_dim` (#ff5d26) to provide a 3D "glow" that feels professional and intentional.

---

## 3. Typography
The typography is the backbone of the editorial feel. It utilizes a high-contrast pairing of a massive, authoritative sans-serif and a clinical, technical monospace.

*   **Display (Inter):** Oversized, tight tracking (-2% to -4%). `display-lg` (3.5rem) is the voice of the brand. It should overlap imagery to create depth.
*   **Headline (Inter):** Bold and unapologetic. Used for section headers to anchor the eye.
*   **Body & Labels (Space Grotesk):** Provides a "technical" counterpoint to the display type. Monospaced in spirit, these fonts handle utility text, metadata, and long-form reading with extreme legibility and a "produced" aesthetic.

The hierarchy communicates a specific brand story: The **Display** type represents the "Creative Vision," while the **Space Grotesk** labels represent the "Precision Craft" behind it.

---

## 4. Elevation & Depth
In this system, depth is atmospheric, not structural.

*   **The Layering Principle:** Stacking `surface-container-lowest` on `surface-container-low` creates a soft, natural lift. This mimics fine paper stock or matte materials.
*   **Ambient Shadows:** If a floating effect is required (e.g., a "Product Shot" card), use extra-diffused shadows.
    *   **Blur:** 40px - 60px.
    *   **Opacity:** 6% of the `on_surface` color.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline_variant` (#484848) at **15% opacity**. A 100% opaque border is a failure of the system's aesthetic.
*   **Signature Texture:** All backgrounds must feature a 5-10% opacity "Grain" or "Noise" SVG overlay. This eliminates digital flatness and makes the colors feel "inked."

---

## 5. Components

### Buttons
*   **Primary:** Sharp edges (`0px` radius). `primary_container` (#ff784d) background with `on_primary_fixed` (#000000) text.
*   **Secondary:** Ghost Border style. No fill, `outline` token at 20% opacity. On hover, transition to a 100% `on_surface` fill with inverted text.
*   **Interaction:** Hover states must be subtle—a slight shift in background tone or a micro-move (2px) on the Y-axis.

### Input Fields
*   **Styling:** Minimalist bottom-border only (`outline_variant`). 
*   **Focus State:** The border transitions to `primary` (#ff906d). Labels use `label-sm` in `spaceGrotesk`.

### Cards & Lists
*   **Forbid Dividers:** Vertical white space from the Spacing Scale (64px+) must be used to separate list items.
*   **Portfolio Cards:** Use large, silhouetted product imagery that breaks the container's edge. Use `surface_container_low` for the card background to create a "recessed" look.

### The "Curator" Navigation
A high-end, floating navigation bar using Glassmorphism. It should sit at the bottom or top of the viewport with a heavy backdrop-blur, appearing as a translucent "lens" over the content.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use massive amounts of whitespace. If it feels like "too much," it’s likely just right.
*   **Do** overlap typography over silhouetted imagery to create a 3D editorial layout.
*   **Do** keep all corners strictly `0px` (Sharp). This conveys a precise, architectural feel.
*   **Do** use the `primary` orange sparingly as a "laser pointer" to guide the user's eye.

### Don't:
*   **Don't** use standard shadows or "Drop Shadow" presets.
*   **Don't** use rounded corners (`border-radius`) anywhere in the system.
*   **Don't** use 1px solid high-contrast dividers to separate content.
*   **Don't** use center-alignment for everything. Embrace the "asymmetric" grid; let elements breathe on the edges of the frame.