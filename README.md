# Sree Charan Sai Manne — Developer Portfolio
Created by me.
A modern, AI-powered developer portfolio built with Next.js 14, optimized for recruiters and hiring managers.

**Live:** [charanmanne.dev](https://charanmanne.dev)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **UI Components:** ShadCN-style (Radix UI primitives)
- **Icons:** Lucide React
- **Contact Form:** EmailJS
- **Analytics:** Vercel Analytics
- **API:** GitHub REST API

## Features

- Dark mode default with Apple/Linear/Vercel inspired design
- Smooth scroll animations and page transitions
- Recruiter quick summary card (experience, certifications, cloud platforms)
- GitHub repository auto-sync via GitHub API
- Contact form with EmailJS integration
- Blog with markdown rendering
- SEO optimized (meta tags, OpenGraph, structured data, sitemap, robots.txt)
- Fully responsive, mobile-first
- Lighthouse performance optimized

## Pages

| Page | Route |
|------|-------|
| Home | `/` |
| Projects | `/projects` |
| Experience | `/experience` |
| Skills | `/skills` |
| Certifications | `/certifications` |
| Blog | `/blog` |
| Blog Post | `/blog/[slug]` |
| Contact | `/contact` |

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy the example env file and fill in your values:

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
# Optional — increases GitHub API rate limit from 60 to 5000 req/hr
GITHUB_TOKEN=your_github_personal_access_token

# EmailJS (required for contact form)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Build for Production

```bash
npm run build
npm start
```

## Connecting GitHub API

1. Go to [github.com/settings/tokens](https://github.com/settings/tokens)
2. Generate a new **classic** token with `public_repo` scope
3. Add it as `GITHUB_TOKEN` in your `.env.local`
4. The Projects page will automatically fetch and display your repositories

Without a token, the GitHub API allows 60 requests/hour (sufficient for development).

## Configuring EmailJS

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Create an **Email Service** (Gmail, Outlook, etc.)
3. Create an **Email Template** with these variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{subject}}` — email subject
   - `{{message}}` — message body
4. Copy your Service ID, Template ID, and Public Key into `.env.local`

## Deploying to Vercel

### Option A: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Option B: CLI

```bash
npm i -g vercel
vercel
```

### Environment Variables on Vercel

Add these in your Vercel project settings under **Settings → Environment Variables**:

| Variable | Value |
|----------|-------|
| `GITHUB_TOKEN` | Your GitHub personal access token |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Your EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Your EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Your EmailJS public key |

## Adding Your Resume

Place your resume PDF at `public/charan_resume.pdf`. The "Download Resume" button in the hero section links to this file.

## Customization

- **Personal info:** Edit `lib/constants.ts`
- **Experience:** Edit `data/experience.ts`
- **Projects:** Edit `data/projects.ts`
- **Skills:** Edit `data/skills.ts`
- **Certifications:** Edit `data/certifications.ts`
- **Education:** Edit `data/education.ts`
- **Blog posts:** Edit `data/blog.ts`
- **GitHub username:** Edit `lib/github.ts`

## Project Structure

```
├── app/                  # Next.js App Router pages
│   ├── blog/[slug]/      # Dynamic blog post pages
│   ├── layout.tsx        # Root layout with navbar, footer, analytics
│   ├── page.tsx          # Home page
│   └── sitemap.ts        # Auto-generated sitemap
├── components/
│   ├── sections/         # Page sections (hero, about, experience, etc.)
│   ├── ui/               # Reusable UI primitives (button, card, badge, etc.)
│   ├── motion.tsx        # Framer Motion animation wrappers
│   ├── navbar.tsx        # Sticky navbar with blur
│   └── footer.tsx        # Site footer
├── data/                 # Static data (experience, projects, skills, etc.)
├── lib/                  # Utilities, constants, GitHub API
└── public/               # Static assets (resume.pdf, og.png)
```

## License

MIT
