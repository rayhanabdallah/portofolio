# Rayhan Abdallah Portfolio

Modern personal portfolio for Rayhan Abdallah, Informatics Student at Universitas Pasundan. Built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide React.

## Features

- Responsive premium product-inspired interface
- Light/dark system color scheme
- Animated hero, scroll reveals, responsive navigation, custom desktop cursor
- Selected projects with links shown only when real URLs exist
- Certifications timeline and accessible detail modal
- Local knowledge-based “Ask Rayhan” assistant. No API keys or remote AI calls.
- Terminal easter egg with `whoami`, `skills`, `projects`, `contact`, `help`, and `clear`
- GitHub Pages-safe Vite configuration with relative asset base path

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

Build output appears in `dist/`.

## GitHub Pages Deployment

1. Create GitHub repository and push this project.
2. Run `npm run build` locally to verify build succeeds.
3. In GitHub repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **GitHub Actions**.
5. Add workflow file `.github/workflows/deploy.yml` using Vite GitHub Pages workflow, or publish `dist/` using preferred deployment action.
6. Vite uses `base: './'` in `vite.config.ts`, so generated assets work from repository subpaths.

Alternative manual deployment with `gh-pages`:

```bash
npm run build
npx gh-pages -d dist
```

Then select `gh-pages` branch in GitHub Pages settings.

## Where to Edit Content

| Content | File |
| --- | --- |
| Personal copy, social URLs, navigation | `src/components/Hero.tsx`, `src/components/About.tsx`, `src/components/Contact.tsx`, `src/components/Navbar.tsx` |
| Projects and project links | `src/data/projects.ts` |
| Certificates | `src/data/certifications.ts` |
| Skills and current learning topics | `src/data/skills.ts` |
| Local Ask Rayhan answers | `src/data/knowledgeBase.ts` |
| Learning journey | `src/data/journey.ts` |
| GitHub profile and project cards | `src/components/GitHubSection.tsx` |

## Certificate Images

Add certificate images under `public/certificates/`, then add their paths to `certificateImage` in `src/data/certifications.ts`. The current modal always shows credential metadata and is ready to display those assets once supplied.

## Content Accuracy

Project links intentionally remain hidden until real repository or demo URLs are added to `src/data/projects.ts`. No credentials, API keys, or remote AI integrations are included.
