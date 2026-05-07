# How to deploy your website

This file walks you through getting the site live on GitHub Pages and gives a few tips for maintaining it later.

## ⚠ One thing to fix first: the repo name

You mentioned creating a new GitHub repo named `taimoor.github.io`. For GitHub Pages to serve a personal site at a clean URL, the repo name **must exactly match your GitHub username + `.github.io`**. Your username is `tislam93`, so the repo must be named:

```
tislam93.github.io
```

If you've already created `taimoor.github.io`:
1. Go to that repo on GitHub → Settings → Repository name
2. Rename it to `tislam93.github.io`

The site will then live at `https://tislam93.github.io`. (If you ever change your GitHub username to something cleaner, just rename the repo to match.)

---

## Step 1 — Push the local files to GitHub

You'll need Git installed locally. Open a terminal in the `Personal Website` folder and run:

```bash
git init
git add .
git commit -m "Initial al-folio site"
git branch -M main
git remote add origin https://github.com/tislam93/tislam93.github.io.git
git push -u origin main
```

If GitHub asks for credentials, use a Personal Access Token (Settings → Developer settings → Personal access tokens) rather than your password.

## Step 2 — Configure GitHub Pages

After pushing:

1. Go to your repo on GitHub → **Settings** → **Pages** (in the left sidebar)
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**
3. Set the branch to `gh-pages` and the folder to `/ (root)`
4. Click **Save**

The repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that automatically builds the site and pushes it to the `gh-pages` branch on every push to `main`. The first build will take 5–10 minutes.

## Step 3 — Watch the first build

Go to your repo → **Actions** tab. You'll see "Deploy site" running. When it turns green, refresh `https://tislam93.github.io` and your site should be live.

If it fails, click into the run to see the error. The most common first-time errors are:
- A typo in `_config.yml` — Jekyll is strict about YAML formatting
- A BibTeX entry with unmatched braces — paste any new entries through a validator first

---

## Optional: preview locally before pushing

If you want to see changes locally before they go live, you'll need Ruby and Jekyll. On macOS:

```bash
brew install ruby
gem install bundler jekyll
cd "Personal Website"
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000` in your browser. Changes you make to markdown files appear after a refresh.

Windows is fussier with Ruby — easiest path is to use WSL (Windows Subsystem for Linux) and run the same commands inside Ubuntu.

---

## How to keep the site fresh

### Add a news entry (small accomplishments, paper acceptances, etc.)

Create a new file in `_news/` named `announcement_N.md` (next number after the existing five). Front matter:

```yaml
---
layout: post
date: 2026-06-01 10:00:00-0500
inline: true
related_posts: false
---

A short one-sentence note about what happened.
```

Push to GitHub and the site rebuilds automatically.

### Add a blog post

Create a file in `_posts/` named `YYYY-MM-DD-short-title.md`. Front matter:

```yaml
---
layout: post
title: "Your title"
date: 2026-06-01
description: One-sentence summary that shows on the blog index.
tags: tag1 tag2
categories: notes
---

Your post content in Markdown.
```

If you want me to draft a post with you, just say the word.

### Add a publication

Open `_bibliography/papers.bib` and append a new entry. Use the existing entries as a template. Add `selected: {true}` if you want it to show on the homepage.

### Update your CV

When your CV changes:
1. Drop the new PDF into `assets/pdf/Islam_CV.pdf` (replacing the old one)
2. Optionally update `_data/cv.yml` if you want the web CV page to match

### Switch the accent color

The teal accent is set in `_sass/_themes.scss`. Search for `Muted teal accent` — there are two places to change (one for light mode, one for dark mode).

---

## Later: a custom domain

When you want to move to something like `taimoorislam.com`:

1. Buy the domain — Cloudflare Registrar is the cheapest, ~$9–10/year
2. In your repo's Settings → Pages, enter the custom domain
3. GitHub will tell you the DNS records to add at your registrar
4. Add them, wait a few minutes, and the site moves over without breaking links

Your URLs (e.g., `/projects/ara/`) stay the same — only the hostname changes.

---

## Files I added or customized

Here's what I touched, in case you want to look at any of it:

- `_config.yml` — site title, name, accent color hooks, scholar config
- `_data/socials.yml` — your contact strip (email, LinkedIn, GitHub, GitLab, Scholar, ORCID, CV)
- `_data/cv.yml` — structured CV that renders on `/cv/`
- `_pages/about.md` — homepage bio
- `_pages/story.md` — the "How it started" page
- `_projects/ara.md`, `accord.md`, `armored.md` — your three projects
- `_bibliography/papers.bib` — your 16 publications, with awards flagged
- `_news/announcement_1.md` through `5.md` — recent news items
- `_posts/2026-05-07-hello.md` — your first blog post
- `_sass/_themes.scss` — muted teal accent color
- Hidden in nav (set `nav: false`): teaching, profiles, repositories, dropdown, books — these were demo pages

The Einstein-themed demo content has been replaced or hidden.
