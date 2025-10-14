# GMU Coding Club — Homepage

Drop-in static homepage built with HTML, Tailwind (CDN), and minimal JS.

Files:
- `index.html` — main page
- `assets/logo.svg` — placeholder logo
- `assets/illustration.svg` — placeholder illustration
- `js/main.js` — modal + carousel behavior

How to use:
1. Open `index.html` in a browser.
2. Click the "Login" button to open the demo modal.
3. Resize the browser to see responsive behavior.

Notes:
- Tailwind is included via CDN for convenience. For production, compile Tailwind to reduce CSS size.
- The login is client-side only (demo). Replace with real auth as needed.

Keyboard shortcuts and accessibility:
- Alt + L: Open/close login modal
- Esc: Close modal
- Tab / Shift+Tab: Navigate inside modal (focus is trapped)

Manual verification checklist:
1. Open `index.html` and verify header, hero, features, and footer render correctly.
2. Click Login and confirm modal opens, first input is focused, and Tab cycles inside modal.
3. Press Alt+L to toggle the modal and Esc to close it.
4. Resize to mobile widths and confirm layout stacks into one column.

