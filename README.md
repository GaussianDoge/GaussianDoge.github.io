# Zhengwen Tang — Portfolio

A React and Vite portfolio featuring professional experience, research, coursework, and detailed project pages across digital design, embedded systems, machine learning, and software.

## Run locally

Install [Node.js 22](https://nodejs.org/), then run these commands from the project folder:

```powershell
npm install
npm run dev
```

Open the local address printed by Vite. The development server updates the page as files change.

## Build and preview

Create the production website and preview the result locally:

```powershell
npm run build
npm run preview
```

Vite writes the production files to `dist/`.

## Page URLs

The site uses React Router's `HashRouter`, so routes appear after `#` in the address. Examples:

- User site: `https://username.github.io/#/projects`
- Project site: `https://username.github.io/repository-name/#/projects`
- Project detail: `https://username.github.io/repository-name/#/projects/vector-cpu`

Hash routes remain available when a visitor refreshes a project page because GitHub Pages always requests the site's main `index.html` before React reads the route.

## Publish with GitHub Pages

1. Commit the complete project, including `package-lock.json`, and push it to the repository's `main` branch.
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the repository's **Actions** tab and wait for **Deploy portfolio to GitHub Pages** to finish.
5. Open the address shown by the deployment or in the Pages settings.

The included workflow installs dependencies, builds the site, uploads `dist/`, and deploys it whenever `main` is updated. It can also be started manually from the Actions tab.

The Vite base path is selected automatically from `GITHUB_REPOSITORY`:

- A repository whose name exactly matches `<account>.github.io` uses `/`, producing `https://username.github.io/`.
- Any other repository uses `/<repository-name>/`, producing `https://username.github.io/repository-name/`. For example, `GaussianDoge/zhengwen.github.io` uses `/zhengwen.github.io/`.

To override that behavior, set `VITE_BASE_PATH` before building. For example:

```powershell
$env:VITE_BASE_PATH = "/custom-path/"
npm run build
```

For automated deployments, create an Actions repository variable named `VITE_BASE_PATH`; the workflow passes it to the build. Use `/` for a custom domain hosted at its root.

