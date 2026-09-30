# IT Portfolio

A terminal-themed portfolio site made of plain HTML, CSS and JavaScript. There's nothing to install or build.

## 1. Edit your content
Open **`index.html`** in any editor, such as VS Code. Comments marked `<!-- EDIT -->` and the section headers show what to change. To add a skill group, project, job or certification, copy an existing block and edit it. To remove a whole section, delete its `<section>` and its link in the `<nav>` at the top.

To add a resume, save it as `resume.pdf` next to `index.html`. If you don't have one, delete the two resume buttons.

## 2. Preview
Double-click `index.html` to open it in your browser. Refresh after each edit.
(In VS Code, the **Live Server** extension also reloads the page automatically.)

## 3. Publish to GitHub Pages (free)
1. On GitHub, create a **public** repo named `<your-username>.github.io`.
2. Upload the files. Either drag this folder's contents into the repo page ("Add file → Upload files"), or run:
   ```powershell
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages → Build and deployment**. Set **Source: Deploy from a branch**, **Branch: main**, **Folder: / (root)**, then click Save.
4. About a minute later the site is live at `https://<your-username>.github.io`.

To update the site, edit the files and upload or push again.

## Files
| File | Purpose |
|---|---|
| `index.html` | All page content and structure |
| `css/style.css` | Terminal theme (colors are at the top under `:root`) |
| `js/script.js` | Typing effect, nav highlight, copy-email button |
| `favicon.svg` | Browser tab icon |
| `resume.pdf` | Your resume (you add this) |
