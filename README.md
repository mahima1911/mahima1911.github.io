# Mahima Sundararajan — Portfolio

A personal portfolio focused on backend engineering, distributed systems, multi-tenant fintech platforms, and practical AI developer tools.

**Website:** [mahima1911.github.io](https://mahima1911.github.io/)

**LinkedIn:** [mahimasundarp](https://www.linkedin.com/in/mahimasundarp)

**Contact:** [mahimasundarp@gmail.com](mailto:mahimasundarp@gmail.com)

## About

I’m a Software Engineer II at Advisor360, building backend systems and AI tools for wealth management. My work includes migrating applications to multi-tenancy, designing production APIs, and building agents for incident triage, release preparation, and dependency upgrades. Previously, I developed logistics software at Kaleris / Navis. I hold an MS in Computer Science from UMass Amherst (GPA: 3.98/4).

## What’s inside

| Page | Content |
| --- | --- |
| `index.html` | Introduction, engineering outcomes, selected work, about, skills, and contact |
| `experience.html` | Advisor360, Kaleris / Navis, and LatentView Analytics |
| `projects.html` | Searchable, filterable projects and an expandable archive of earlier work |
| `education.html` | Degrees, coursework, community, and selected recognition |
| `research.html` | Publications with expandable overviews and paper links |
| `404.html` | Custom not-found page |

### Selected work

- **AI incident triage:** MCP access to Elasticsearch and Dynatrace, integrated into Slack with environment- and tenant-scoped investigations.
- **Release agent:** Python integrations with Bitbucket and Jira, reducing preparation from approximately a week to under 30 minutes.
- **Dependency upgrade agent:** LangGraph and LangChain workflows for upgrades, builds, tests, and pull requests.
- **Distributed stock trading:** AWS, Docker, gRPC, and REST APIs, with caching and consensus protocols.
- **SEEDB:** Python and SQL database analytics.
- **Code summarization and evaluation:** Language-model-powered code summaries and feedback.

Internal company projects are described at a high level; their source code is private. Public projects link to their respective repositories, including collaborative projects.

## Run locally

No package installation or build step is needed. With Python 3 installed, run from the repository root:

```sh
python3 -m http.server 8000
```

Open [localhost:8000](http://localhost:8000). Stop the server with `Ctrl+C`.

## Edit content

- Edit the relevant HTML file directly. Core content is rendered in HTML and remains readable without JavaScript.
- Shared design, responsive layouts, and reduced-motion support live in `assets/css/portfolio.css`.
- Mobile navigation and project search/filtering live in `assets/js/portfolio.js`.
- Navigation and footer markup are present in each page; update all six pages when changing shared links.
- Keep the project category (`data-category`) aligned with filter button values (`data-filter`). Search covers project descriptions and technology tags as well as titles.
- Keep older projects in the expandable archive rather than removing their links.
- Update page titles, descriptions, canonical URLs, and `sitemap.xml` when adding pages.

The existing assets and legacy scripts/styles remain in the repository for reference. The refreshed core pages use `portfolio.css`, `portfolio.js`, and `portfolio-effects.js`, with no runtime third-party JavaScript or CSS dependencies. Cursor and particle interactions live in `assets/js/portfolio-effects.js`.

## Publish with GitHub Pages

This is a static site compatible with GitHub Pages. Use the repository’s configured publishing branch and folder (typically the repository root). Commit and push reviewed changes to that source to publish. Local changes alone do not update the live website. No Sites hosting or server backend is required.

## Visual direction

The refreshed layout includes a few touches from the original portfolio: lavender and pink accents, the local Autography handwriting font, a circular portrait, and a constellation illustration and a mouse-responsive particle background. The hero focuses on a personal introduction rather than a technical workflow diagram.

## Accessibility and behavior

- Semantic landmarks, descriptive links, a skip link, and visible keyboard focus.
- Responsive mobile navigation with `aria-expanded` state and Escape-to-close behavior.
- Native expandable research summaries and project archive.
- Project filters with pressed states, an announced result count, and a no-results state.
- Reduced-motion preference support; no loading screen. The original-style dot-and-ring cursor is enabled only for a fine mouse pointer. The homepage has connected, drifting particles that repel from the pointer. A Pause motion control stops the decorative animation; reduced-motion preferences disable it by default. Touch devices retain their native behavior.

## License

See [LICENSE](LICENSE) for the existing repository license. Portfolio content describes Mahima Sundararajan’s work; linked projects may have separate licenses and contributors.
