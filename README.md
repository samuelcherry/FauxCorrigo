# FauxCorrigo 🎫

A full-stack ticket tracking simulation and monitoring suite. **FauxCorrigo** models an enterprise ticket workflow without needing direct access to proprietary API endpoints. 

It provides a mock data generator (React dashboard + Express backend), alongside two multi-platform clients (a Google Chrome extension and an Electron desktop app) that monitor ticket counts segmented by severity in real time.

---

## Architecture Overview

The system consists of four coordinated components:
┌───────────────────────────┐         ┌───────────────────────────┐
│     React Dashboard       │ ◄─────► │      Express Server       │
│  (Manual Ticket Controls) │  HTTP   │   (Mock API / State Store)│
└───────────────────────────┘         └─────────────┬─────────────┘
│
Polled Updates / API │
▼
┌──────────────────────────────┴──────────────────────────────┐
│                                                             │
▼                                                             ▼
┌─────────────────────────┐                                   ┌─────────────────────────┐
│    Chrome Extension     │                                   │      Electron App       │
│  (Browser Quick Monitor)│                                   │  (Standalone Desktop UI)│
└─────────────────────────┘                                   └─────────────────────────┘

### Components

1. **Mock API Backend (`Express`)**: Serves simulated ticket endpoints, persists/updates in-memory ticket states, and supports ticket increment/decrement mutations.
2. **Simulation Dashboard (`React`)**: A management interface that allows users to manually trigger, increment, and decrement tickets across different severity levels (e.g., Low, Medium, High, Urgent).
3. **Chrome Extension (`Vanilla JavaScript`)**: Sits in the browser toolbar, polls the backend endpoint, and surfaces live ticket tallies categorized by severity level.
4. **Desktop App (`Electron`)**: A standalone cross-platform desktop application providing persistent status visibility outside the browser.

---

## Tech Stack

- **Backend:** Express, Express
- **Control Dashboard:** React.js, HTML5/CSS3
- **Browser Extension:** JavaScript (Manifest V3), Chrome Extensions API
- **Desktop Client:** Electron, HTML/CSS/JS

---

## Project Structure

```text
├── server/             # Express API server
├── client/             # React dashboard for controlling ticket counts
├── ticket-extension/   # Manifest, background scripts, and popup UI
└── electron/           # Electron wrapper and desktop client


Getting StartedPrerequisitesEnsure you have the following installed:Express (v16.x or later recommended)npm or yarnGoogle Chrome (for loading unpacked extensions)1. Start the Backend APIBashcd backend
npm install
npm start
The API server typically starts at http://localhost:5000 (or your configured port).2. Launch the React Control DashboardBashcd frontend
npm install
npm start
Runs the dashboard locally at http://localhost:3000. Use the UI buttons to simulate incoming tickets or resolve existing ones across severity tiers.3. Install the Chrome ExtensionOpen Google Chrome and navigate to chrome://extensions/.Enable Developer mode via the toggle switch in the top-right corner.Click Load unpacked.Select the chrome-extension/ directory from this repository.Pin the extension to your toolbar to view ticket metrics update in real time.4. Run the Electron Desktop AppBashcd desktop-app
npm install
npm start
API Endpoints (Mock Server)MethodEndpointDescriptionGET/api/ticketsReturns the current tally of tickets grouped by severityPOST/api/tickets/incrementIncrements ticket count for a specified severity levelPOST/api/tickets/decrementDecrements ticket count for a specified severity levelPOST/api/tickets/resetResets ticket counters to zero or default baselineExample Response (GET /api/tickets):JSON{
  "urgent": 2,
  "high": 5,
  "medium": 12,
  "low": 8,
  "lastUpdated": "2026-09-03T17:40:00Z"
}
Future Enhancements[ ] Add WebSocket support for instant push notifications instead of interval polling.[ ] Implement badge alerts on the Chrome extension icon for Urgent severity spikes.[ ] Add basic authentication and persistent storage (SQLite/MongoDB) for simulated ticket histories.LicenseThis project is licensed under the MIT License.
<ElicitationsGroup message="If you'd like to refine this further:">
  <Elicitation label="Add real commands and folder names" query="Can I provide my actual folder names, ports, and API routes so you can plug them directly into the README?"/>
  <Elicitation label="Draft a Quick Demo / GIF section" query="Help me write a 'Demo & Visuals' section with markdown placeholders for screenshots and GIFs."/>
</ElicitationsGroup>
