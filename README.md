# MARRI SAI BABU — portfolio

Responsive Vite + React portfolio. Personal details not provided in the brief remain placeholders in `src/data/portfolio.js` and the profile image in `src/App.jsx` is a stock replacement image.

## Folder structure

```text
public/
  resume.pdf                  # Replace with your own PDF
src/
  assets/                     # Add local images here
  components/
    Icon.jsx
    Navbar.jsx
    Navbar.css
  data/
    portfolio.js              # Skills, projects, social links, education
  hooks/
    useReveal.js
  styles/
    global.css
    App.css
  App.jsx
  main.jsx
index.html
package.json
```

## Run locally

Install a current Node.js LTS release, then from this folder run:

```bash
npm install
npm run dev
```

Open the local URL Vite prints. Create a production build with `npm run build`; preview it with `npm run preview`.

## Customize

1. Replace `public/resume.pdf` with your resume PDF, keeping that filename (or change the href on the Download Resume link in `src/App.jsx`).
2. Put your portrait in `public/profile-photo.jpg`. The hero uses that path and falls back to `public/profile-placeholder.svg` until the photo is present. You can replace the filename/path in `src/App.jsx` if needed.
3. In `src/data/portfolio.js`, replace project image URLs, each project's `demo` and `code` `#` values, and the GitHub, LinkedIn, and email placeholders. Set education and certificate entries to your actual details. Edit skill levels to reflect your experience.
4. The contact form validates fields in the browser and opens the visitor's email app using a `mailto:` link. Set `socials.email` to your real address before publishing. To collect messages without requiring an email app, connect Formspree or EmailJS and replace the `submit` handler in `src/App.jsx` with that provider's submission call. Keep provider keys out of public source code.

## Deploy to Vercel

### GitHub flow

1. Create a GitHub repository and push this project to it.
2. In Vercel, choose **Add New → Project**, import that repository, and keep the detected Vite settings (`npm run build`, output directory `dist`).
3. Deploy. Vercel will build and publish the site, then redeploy when you push future commits.

### Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts to link or create a project. For a production deploy, run `vercel --prod`.

## SEO finish checklist

- Confirm the page title and description in `index.html` match your current portfolio.
- Add a favicon under `public/` and reference it from `index.html`.
- Add a share image and `og:image` metadata for Open Graph previews.
- Use your real project URLs, profile URLs, and contact email before launch.
