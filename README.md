# Minna Life

A browser-playable, top-down Nigerian city-life simulation prototype built with HTML5 Canvas, CSS3 and vanilla JavaScript.

## Launch
1. Extract `Minna-Life.zip`.
2. Open `index.html` in a modern browser. For best compatibility, you can also serve the folder with a static local server.
3. Select **New Game**, create a character and enter Minna.

No backend, API key, account or paid service is required. Core gameplay is local-first. The Lucide icon script and Google Fonts are optional online enhancements; the game remains playable if those resources are unavailable.

## Implemented in this release
- Main menu, character creation and playable Canvas city.
- Keyboard movement, mobile virtual joystick, running and collision against buildings/map boundaries.
- Camera follow, minimap, named city buildings, roads, trees and kiosks.
- Interactable NPCs with distinct dialogue and relationship/reputation changes.
- Hunger, health, energy, hygiene, mood and stamina simulation.
- Naira wallet, food shops, purchase validation, inventory and food consumption.
- Short jobs with timed completion, rewards and XP/level progression.
- Shared-room rental, rest interaction and simple study/park activities.
- Destination-based paid transport/map travel.
- In-game clock/day cycle, HUD, pause/resume and tutorial.
- Autosave, manual save, continue, multiple named save slots, basic save validation and reset confirmation.
- Responsive mobile and desktop interface; settings for graphics preference and UI scale.

## Controls
**Desktop:** WASD or arrow keys to move; Shift to run; E to interact; I for inventory; M for city map; J for jobs; Esc to pause/resume.

**Mobile/tablet:** Use the on-screen joystick and Run control. Tap Interact, Bag, Map, Jobs or Save in the bottom action bar.

## Saves
Saves are stored in this browser's `localStorage` under the Minna Life key. They are device/browser-specific and are not synced. Use Save before clearing browser data. The game keeps an autosave slot and supports additional slots through the load/save system architecture; the current visible Save action writes to the autosave slot.

## GitHub Pages
Upload the extracted folder contents to a repository, keeping `index.html` at the repository root. Enable GitHub Pages for the desired branch and root folder. All core game code is static and does not require a server API.

## Known limitations
This is a playable core release, not the full feature list in the supplied master prompt. The world is procedural 2D artwork rather than a production sprite/3D asset set. NPCs have simple movement and dialogue rather than complex schedules. Weather, vehicle driving, deep business ownership, full quest chains, audio production, advanced housing/storage, and a comprehensive automated QA suite are not included. Graphics quality is currently a saved preference rather than a full rendering pipeline switch. The project uses a CDN for Lucide icons and Google Fonts when internet is available; gameplay itself does not depend on them.

## QA summary
- Source files and referenced local CSS/JS files were generated and packaged.
- Basic static checks: all expected local script/style paths exist; JavaScript syntax was checked during packaging where tooling was available.
- Not performed: full browser automation, Android device testing, GitHub Pages deployment, exhaustive gameplay balance testing, or verification across multiple browsers. These are explicitly not claimed as passed.
