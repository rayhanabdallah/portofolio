# Portfolio Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Navigation with mobile menu, section highlighting
│   │   ├── Hero.tsx             # Hero with status indicator, social buttons, subtle animations
│   │   ├── About.tsx            # Personal introduction, branding, current goal
│   │   ├── Skills.tsx           # Skills categories + "Currently Exploring" constellation
│   │   ├── Projects.tsx         # Selected projects with cards, only show buttons when URLs exist
│   │   ├── Journey.tsx          # Horizontal/vertical timeline visualization
│   │   ├── Certifications.tsx   # Certifications + accessible modal for details
│   │   ├── GitHubSection.tsx    # GitHub profile summary, static repo cards, activity visualization
│   │   ├── Terminal.tsx         # Interactive terminal with `whoami`, `skills`, `projects`, `contact`, `help`, `clear`
│   │   ├── Contact.tsx          # Contact links (email, GitHub, LinkedIn, Instagram)
│   │   ├── Footer.tsx           # Copyright and student info, NPM as optional footnote
│   │   ├── AskRayhan.tsx        # Local knowledge-based assistant (no API keys, no remote calls)
│   │   └── Icons.tsx            # Custom icon wrappers (GitHub, LinkedIn, Instagram)
│   ├── data/
│   │   ├── projects.ts          # Project data (add/remove/edit links)
│   │   ├── certifications.ts    # Certificates data (add images here too)
│   │   ├── skills.ts            # Skills categories + exploring topics
│   │   ├── knowledgeBase.ts     # Local assistant Q&A (edit questions/answers here)
│   │   └── journey.ts           # Learning journey steps
│   ├── App.tsx                  # Main app with custom cursor (desktop only)
│   └── index.css                # Tailwind CSS + custom styles
├── public/                      # Static assets (cert images go here)
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md

```

## Edit Points

1. **Personal Information**: Edit URLs in Hero, About, Contact components
2. **Projects**: Add/remove links in `src/data/projects.ts` (show buttons only for real URLs)
3. **Certificates**: Add certificate images to `public/certificates/`, add paths in `src/data/certifications.ts`
4. **Ask Rayhan Assistant**: Edit `src/data/knowledgeBase.ts` to update questions/answers
5. **Skills & Journey**: Edit `src/data/skills.ts` and `src/data/journey.ts` as needed
6. **GitHub Section**: Add real repo links in `src/components/GitHubSection.tsx`

## GitHub Pages Deployment

Push to repository → Settings → Pages → GitHub Actions → use `gh-pages` or Vite deployment action.

Vite `base: './'` ensures assets work from any subpath.
