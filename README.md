# North San Antonio Hills HOA Website

The community website for the North San Antonio Hills Homeowners Association
(NSAH HOA). It gives residents a central place to find neighborhood news,
events, contacts, documents, committee information, HOA dues details, forms,
and other community resources.

## Tech stack

- [Next.js](https://nextjs.org/) with the App Router
- [React](https://react.dev/) and TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/)
- [React PDF](https://github.com/wojtekmaj/react-pdf) and PDF.js
- [pnpm](https://pnpm.io/) for package management

## Getting started

### Prerequisites

- A current Node.js LTS release
- pnpm (`npm install --global pnpm` if it is not already installed)

### Run locally

1. Clone the repository and open it in a terminal.
2. Install dependencies:

	```shell
	pnpm install
	```

3. Start the development server:

	```shell
	pnpm dev
	```

4. Open [http://localhost:3000](http://localhost:3000). The root URL redirects
	to `/home`.

The application currently does not require environment variables for local
development.

## Available scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Starts the Turbopack development server. |
| `pnpm build` | Creates an optimized production build. |
| `pnpm start` | Runs the production build. Run `pnpm build` first. |

## Site sections

| Route | Content |
| --- | --- |
| `/home` | Welcome message, latest news, forms, and community resources |
| `/home/news` | Neighborhood news and newsletters |
| `/home/events` | Upcoming events and the community calendar |
| `/home/contacts` | HOA board and community contacts |
| `/home/documents` | Community and board document links |
| `/home/committees` | HOA committee information |
| `/home/hoadues` | HOA dues information |

## Project structure

```text
app/
├── components/       Reusable components grouped by site section
├── home/             App Router pages and the shared HOA site layout
├── lib/              Data, types, models, and PDF configuration
├── styles/           Global styles, fonts, and CSS modules
├── layout.tsx        Root application layout
└── page.tsx          Root redirect to /home
public/
├── pdfjs/            PDF.js web worker
└── pdfs/             Static PDF documents
```

## Updating content

- Edit page-specific content in `app/home/<section>/page.tsx`.
- Edit homepage sections in `app/components/home/`.
- Update sidebar links in `app/components/home/nav-links.tsx`.
- Update committee data in `app/lib/data.ts`.
- Place static documents in `public/pdfs/` and reference them from `/pdfs`.

Before publishing a change, verify the production build succeeds with
`pnpm build`.