# MUN Quant Society website

A plain HTML, CSS and JavaScript site. No build step, no installs, no framework: what is in this folder is what gets published. It is set up for **GitHub Pages**, which hosts it for free.

```
index.html        Home
about.html        About, executives, alumni
teams.html        Teams and members
projects.html     Project list
project.html      One project page (the MQS Fund). Copy it for more.
events.html       Upcoming and past events
resources.html    Resource library
signin.html       Sign-in page (placeholder, see "What is not live yet")
404.html          "Page not found" page (GitHub Pages uses this automatically)
favicon.svg       Browser tab icon
assets/css/       Styles. base.css is shared; the rest are one per page.
assets/js/        main.js: the filters, tabs and card fan
assets/img/       All photos
```

---

## 1. Publish it (about 10 minutes, no coding)

You need a GitHub account with permission to add files to the `MUNQuantSociety/mqs-website-v1` repository.

1. **Unzip** the download. Open the unzipped folder so you can see `index.html`, `about.html` and the `assets` folder inside it.
2. Go to **https://github.com/MUNQuantSociety/mqs-website-v1**.
3. Click **Add file → Upload files**.
4. **Select everything inside the unzipped folder** (`index.html`, the other `.html` files, `favicon.svg`, `README.md` and the `assets` folder) and drag it onto the page.
   - Drag the *contents*, not the outer folder. `index.html` has to end up at the top level of the repository, not inside another folder.
   - Drag the `assets` folder itself rather than opening it. GitHub keeps the folder structure when you do.
   - Chrome, Edge and Firefox all handle folder drops. If your browser does not, upload the `.html` files first, then repeat for `assets/css`, `assets/js` and `assets/img` one at a time.
5. Wait for the file list to finish loading (about 40 files). Under **Commit changes**, write a message such as `Add website`, choose **Commit directly to the main branch**, and click **Commit changes**.
6. Go to **Settings → Pages** (left sidebar, under "Code and automation").
7. Under **Build and deployment**, set **Source** to **Deploy from a branch**. Set **Branch** to **main** and the folder to **/ (root)**, then click **Save**.
8. Wait one to two minutes and refresh the Pages settings. A box appears at the top: **"Your site is live at …"**. It will be:

   **https://munquantsociety.github.io/mqs-website-v1/**

If that page shows a 404, wait another minute and refresh. First publishes are sometimes slow.

**If "Pages" is greyed out or asks you to upgrade:** GitHub Pages on a *private* repository needs a paid GitHub plan. Either make the repository public (Settings → General → Danger Zone → Change visibility) or use an organisation plan that includes Pages. A public repository is fine here because everything in it is public website content.

---

## 2. Edit text

Every page is an ordinary `.html` file. To change wording:

1. In the repository, open the file (for example `about.html`).
2. Click the pencil icon (**Edit this file**).
3. Press `Ctrl+F` (or `Cmd+F`) to find the text, change it, and click **Commit changes**.
4. The live site updates in a minute or two.

Comments in the HTML, such as `<!-- SPONSORS: move a name between tiers … -->`, mark the parts you are most likely to edit: "Life at MQS", sponsors, the other executives and alumni. To change the "advisors have worked at" firm names on the Home page, search for `Société Générale`.

### Placeholders

Anything still to be filled in is easy to find:

- **Visible placeholders** are written in square brackets: `[Name]`, `[Role]`, `[DD]`, `[Time · Room]`, `[YEAR]`, `[TERM]`, `[Alumni name]`. Search for `[` in each file.
- **Placeholder links** look like `<a href="#" data-todo="LinkedIn link for [Name]">`. The `data-todo` text says which link belongs there. Replace `#` with the real address and delete the `data-todo="…"` part. Search for `data-todo` to list them all.

The link placeholders are: Instagram and LinkedIn for the society, each executive's and member's LinkedIn, each alumnus's LinkedIn, event RSVP links, every Resources item, the fund report links on the project page, the Join form and the backtest visualizer on the sign-in page.

### The Join button

Join buttons currently open an email to `munquantsociety@gmail.com`, so they work from day one. When you have a sign-up form (Google Form, Typeform, etc.), search for `Joining%20MQS` and replace each `mailto:…` address with the form's link.

### Add a team, project, event or executive

Copy an existing block in the same file, paste it directly below, and change the text. Moving a block up or down moves it on the page. Deleting a whole block removes it. If you break something, GitHub's **History** button on any file lets you go back to an earlier version.

For a new project page, copy `project.html` to a new name (for example `project-pipeline.html`), edit it, and point the project row in `projects.html` at the new file.

---

## 3. Swap photos

Photos live in `assets/img/`. **The easiest way to replace a photo is to upload a new one with the same file name**:

1. Open `assets/img/` in the repository.
2. Click **Add file → Upload files**, and drop in your new photo with exactly the same name (for example `hike.jpg`). GitHub replaces the old one.

Tips:

- Keep the format as **.jpg**, and aim for square or near-square photos about **1000 px** across; they show crisp on any screen and keep the page fast. Executive portraits work best close-cropped on the face.
- On the About page the executive photos are tinted and turned black-and-white by the site's styling, so any normal colour portrait will match the design.
- If you would rather use a different file name, edit the matching `<img src="assets/img/…">` line in the HTML.

| File | Where it appears |
| --- | --- |
| `exec-1-president.jpg` | About: president portrait (large, in the circle) |
| `exec-2.jpg` to `exec-7.jpg` | About: the other six executives |
| `hike.jpg` | Home "Life at MQS", About collage, Events |
| `interview-practice.jpg` | About collage, Events |
| `spring-social.jpg` | Home "Life at MQS", Events |
| `figgie-night.jpg` | Home "Life at MQS", Events |
| `macro-update.jpg` | Home "Life at MQS", Events |
| `winter-dinner.jpg` | Home "Life at MQS", Events |
| `projects-night.jpg` | Home "Life at MQS", Events |
| `whiteboard.jpg` | About collage, Project page, Events |
| `asset-allocation.jpg` | Home and Projects (the MQS Fund), Project page |

Team member boxes that say "Photo coming soon" are intentional: add a photo file to `assets/img/` and replace the empty `<div class="empty">…</div>` with `<img src="assets/img/your-photo.jpg" alt="Name, role">`.

---

## What is not live yet

These were deliberately kept honest rather than faked:

- **Sign-in.** A static site cannot check passwords. The Members tab links out to the backtest visualizer (add its URL where it says `data-todo`). The Team leads and Admin tabs say they are not live yet. Do not put a password form on this site; it would only be decoration.
- **Locked resources.** Items marked "Members" are just labels. Anyone who has a link can open it, so the protection has to come from the destination (a Google Drive file set to "Restricted", a private repository, a login-protected page). Never put anything confidential directly in this repository.
- **Edit consoles.** The team-lead and admin editing screens from the design were mockups and are not part of this site. Editing happens through GitHub, as above.

---

## Optional: your own web address

To use something like `mqs.ca` instead of the github.io address: in **Settings → Pages → Custom domain**, type the domain and save. Then, at the domain registrar, add the DNS records GitHub lists (see GitHub's "Configuring a custom domain for your GitHub Pages site" guide). Tick **Enforce HTTPS** once it becomes available.

---

## Notes for whoever maintains this

- Fonts (Geist and JetBrains Mono) load from Google Fonts. If a visitor is offline, the site falls back to system fonts.
- All links are relative, so the site works at `…/mqs-website-v1/` and on a custom domain without changes.
- Animations switch off automatically for visitors who ask their device to reduce motion. Every page also works with JavaScript turned off; only the filters and tabs need it.
- Contact address used throughout: `munquantsociety@gmail.com`. Search and replace to change it.
