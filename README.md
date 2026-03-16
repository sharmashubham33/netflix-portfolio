# Netflix Portfolio - Shubham Sharma

A Netflix-themed personal portfolio website built with React, TypeScript, and Vite.

## Live Demo

[View Portfolio](https://shubhamresume.vercel.app)

## Features

- **Netflix Intro Animation** - Cinematic name reveal with the iconic Netflix "ta-dum" sound effect
- **"Who's Watching?" Profile Selector** - Choose between Recruiter, Hiring Manager, Engineer, or Visitor profiles to see personalized content
- **Animated GIF Backgrounds** - Dynamic backgrounds on the profile page, just like Netflix
- **Netflix-Style UI Components** - Play button, More Info button, Top Picks row, Continue Watching row
- **Skills Page** - 10 categorized skill groups with letter-by-letter drop animation
- **Work Experience Timeline** - Vertical timeline with work and education entries in Netflix dark theme
- **Key Projects** - Project cards with tech badges and red glow hover effects
- **31 Certifications** - All with official badge logos and credential verification links (Microsoft, AWS, Google, IBM, Meta)
- **Contact Page** - LinkedIn badge, email, phone, GitHub with Netflix-styled contact cards
- **Fully Responsive** - Mobile-first design with hamburger menu and sidebar navigation
- **Netflix Dark Theme** - #141414 background, #e50914 red accents throughout

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast builds and HMR
- **React Router** for client-side routing
- **React Icons** for iconography
- **React Vertical Timeline** for work experience
- **CSS3** with Netflix-authentic styling and animations

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── assets/          # Images, sounds, cert logos
├── browse/          # "Who's Watching?" profile selector
├── components/      # Navbar, PlayButton, MoreInfoButton, ProfileCard
├── data/            # All portfolio data (hardcoded, no CMS dependency)
├── pages/           # Skills, Projects, WorkExperience, Certifications, ContactMe
├── profilePage/     # ProfilePage, ProfileBanner, TopPicksRow, ContinueWatching
├── App.tsx          # Router configuration
├── Layout.tsx       # Layout wrapper with Navbar
└── NetflixTitle.tsx # Intro animation screen
```

## Inspired By

This portfolio was inspired by [SamalaSumanth0262/netflix_portfolio](https://github.com/SamalaSumanth0262/netflix_portfolio) and enhanced with additional features, improved animations, and personalized content.

## License

MIT
