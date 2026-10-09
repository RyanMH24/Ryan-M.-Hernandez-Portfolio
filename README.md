# Ryan M. Hernandez — IT Portfolio

**Live site:** https://ryanmh24.github.io/Ryan-M.-Hernandez-Portfolio/

Personal portfolio for Ryan M. Hernandez, an Infrastructure Operations Analyst and endpoint specialist with 7+ years of IT support and systems experience at Apple and Comerica Bank. The site is terminal-themed and built from plain HTML, CSS, and JavaScript, so there's nothing to install or build.

**Career focus:** Systems Administrator · Endpoint Engineer · IT Infrastructure Engineer

## What's on the site

| Section | Contents |
|---|---|
| `about` | Background and highlights: Tier 1–3 support for 1,000+ users, sole Mac technician for 30+ banking centers |
| `skills` | Endpoint management (Jamf Pro, SCCM/MECM), identity & access (Okta, Active Directory), ITSM (ServiceNow), automation, platforms |
| `projects` | Work and independent projects, including live demos |
| `experience` | Roles at Comerica Bank, Apple, and Best Buy |
| `certs` | Jamf Certified Associate, Google Cybersecurity Professional Certificate, education |
| `contact` | Email and LinkedIn |

## Featured projects

- **[5Y54DM1N5](https://github.com/RyanMH24/5Y54DM1N5)**: a self-paced sysadmin training platform with a six-week curriculum, simulated Linux/PowerShell terminal labs, and mock Okta, Jamf, AD, and ServiceNow-style consoles. Built with Next.js, React, and TypeScript. [Try it live](https://ryanmh24.github.io/Ryan-M.-Hernandez-Portfolio/5y54dm1n5/)
- **[5CR1PT3R5](https://github.com/RyanMH24/5CR1PT3R5)**: a personal AI engineering team of 25 agents, built with Claude Code, that turns plain-English requests into tested, reviewed code. [Screenshots](https://ryanmh24.github.io/Ryan-M.-Hernandez-Portfolio/5cr1pt3r5.html)
- **Project Attenborough** (Apple): an internal reporting tool that cut executive report creation from 10 days to 2.
- **Device Refresh Workflow** (Comerica Bank): Microsoft Forms + Power Automate automation for hardware upgrades.

## Files

| Path | Purpose |
|---|---|
| `index.html` | All main page content and structure |
| `5cr1pt3r5.html` | 5CR1PT3R5 screenshot gallery |
| `5y54dm1n5/` | Static build of the 5Y54DM1N5 live demo (generated; don't edit by hand) |
| `css/style.css` | Terminal theme (colors are at the top under `:root`) |
| `js/script.js` | Typing effect, nav highlight, copy-email button |
| `img/` | Project screenshots |
| `resume.pdf` | Downloadable resume |
| `favicon.svg` | Browser tab icon |
| `.nojekyll` | Tells GitHub Pages to serve the demo's `_next/` folder as-is |

## Editing and previewing

Open `index.html` in any editor. Comments marked `<!-- EDIT -->` and the section headers show what to change. To add a project, job, skill group, or certification, copy an existing block and edit it.

To preview, double-click `index.html` to open it in a browser (the VS Code **Live Server** extension also auto-reloads). The 5Y54DM1N5 demo only works when served from a web server, such as GitHub Pages or Live Server.

## Updating the 5Y54DM1N5 demo

The demo is built from the [5Y54DM1N5 repo](https://github.com/RyanMH24/5Y54DM1N5):

```powershell
cd C:\Users\ryanm\projects\5Y54DM1N5
npm run build:static
```

Then replace this repo's `5y54dm1n5/` folder with the generated `out/` folder, commit, and push.

## Publishing

The site is hosted on GitHub Pages from the `main` branch (Settings → Pages → Deploy from a branch → `main` / root). Pushing to `main` updates the live site in about a minute.
