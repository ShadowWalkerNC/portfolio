# Changelog

All notable changes to the portfolio site will be documented in this file.

## [1.0.0] - 2026-07-11

### Added
- **Dynamic Cursor Spotlight Glows**: Added dynamic, high-performance cursor tracking to position hover glows on card spotlight boundaries and portal splits.
- **Mesh Gradients**: Replaced standard linear gradients on the main landing screen with deep, modern multi-point radial mesh gradients.
- **Refined Culinary Brand Identity**: Imported the **DM Serif Display** Google Font and styled the culinary section headings to give them an authentic, artisanal feel.
- **macOS IDE Code Showcase**: Created a premium code editor visual on the developer home section with mac-style window controls and tab indicators.
- **Glassmorphic Depth**: Added `backdrop-filter: blur(12px)` layers and translucent backgrounds directly to developer project cards.
- **Interactive Projects Category Filter**: Integrated a tabbed filter bar on `/dev/projects` to dynamically sort projects client-side with clean layout transitions.
- **Context-Aware dynamic Favicons**: Tab icon dynamically swaps between 💻 (Developer pages), 👨‍🍳 (Chef pages), and 🌐 (neutral landing page).
- **Native Culinary Gallery**: Generated and natively embedded high-resolution Maine food imagery to replace basic raw photo link CTAs on `/food`.

### Changed
- Refined base design variables, shadow variables, and border properties in `src/styles/global.css` to build modern contrast.
- Updated centered brand lockup on the portal screen (`index.astro`) to fade out and scale down smoothly on hover to prevent layout overlaps.
- Removed text overlay on mobile and desktop from split page to clean up the landing aesthetics.
