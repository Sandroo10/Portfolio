export type ProjectCategory = 'Frontend' | 'QA' | 'Backend';

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  categories: ProjectCategory[];
  githubUrl?: string;
  liveUrl?: string;
  imageClassName?: string;
  imageFit?: 'contain';
  isFeatured?: boolean;
};

export const projects: Project[] = [
    {
      title: 'GenOfIT',
      description: 'Freelance full-stack development for GenOfIT, A responsive platform for a QA training company, featuring course enrollment, an admin panel, Stripe payments, Supabase-backed content and order management, and automated emails, testing, and deployment.',
      image: '/images/genofit.png',
      technologies: ['Next.js', 'Supabase', 'Stripe', 'Resend', 'Google Search Console', 'Cloudflare'],
      categories: ['Frontend', 'Backend', 'QA'],
      liveUrl: 'https://www.genofit.tech/',
      isFeatured: true,
    },
    {
      title: 'EvCarCharger',
      description: 'A freelance e-commerce website for EV charging products, built with React and Supabase, with payment and email integrations.',
      image: '/images/EvCarCharger.webp',
      technologies: ['React', 'Supabase', 'Resend', 'Bog Payment'],
      categories: ['Frontend', 'Backend'],
      liveUrl: 'https://evcarcharger.ge',
      isFeatured: true,
    },
    {
      title: 'KIU re-make Website',
      description: 'I participated in KIU re-make website contest and this is the website me and my teammate made. I was chosen as the Co-winner and am working on new website.',
      image: '/images/KIU.webp',
      technologies: ['React','Express', 'Chatbot', 'Tailwind', 'FormSpree', 'Vercel'],
      categories: ['Frontend'],
      liveUrl: 'https://kiu-website.vercel.app/en',
      githubUrl: 'https://github.com/Mosa-5/Kiu_website',
      isFeatured: true,
    },
    {
      title: 'KINO XII — Cinema Booking (RedBerry Project)',
      description: 'Cinema booking application built for Redberry Bootcamp XII. Features movie discovery, session filters, authentication, and API-backed seat selection with timed holds, checkout, and ticket management. Built with React, TypeScript, and TanStack Query.',
      image: '/images/movie-website.png',
      technologies: ['React', 'TypeScript', 'TanStack Query', 'SCSS Modules'],
      categories: ['Frontend'],
      liveUrl: 'https://movie-website-sigma-seven.vercel.app/',
      githubUrl: 'https://github.com/Sandroo10/Movie-Website',
      isFeatured: true,
    },
    {
      title: 'WebdriverIO Practice',
      description: 'A focused WebdriverIO test automation practice project with browser-based test scenarios. This repository contains tests only, with no hosted application.',
      image: '/svgs/webdriverio.svg',
      imageFit: 'contain',
      technologies: ['WebdriverIO', 'JavaScript', 'Automated Testing'],
      categories: ['QA'],
      githubUrl: 'https://github.com/Sandroo10/WebDriverIO-practice',
      isFeatured: true,
    },
    {
      title: 'Playwright Practice',
      description: 'A professional Playwright automation project built around SauceDemo, covering authentication, inventory, sorting, cart management, checkout, and purchase validation. It uses TypeScript, Page Object Model, reusable fixtures, multi-browser testing, CI with GitHub Actions, HTML reports, screenshots, traces, and automated type-checking—demonstrating maintainable, reliable end-to-end test architecture.',
      image: '/svgs/playwright.svg',
      imageFit: 'contain',
      technologies: ['Playwright', 'TypeScript', 'End-to-End Testing'],
      categories: ['QA'],
      githubUrl: 'https://github.com/Sandroo10/PlayWright-Practice',
      isFeatured: true,
    },
    {
      title: 'Advanced Playwright Banking Practice (In Progress)',
      description: 'An in-progress Playwright and TypeScript test automation project for a demo banking interface. It focuses on building reliable end-to-end coverage for core user journeys while practicing scalable test organisation and browser automation patterns.',
      image: '/images/advanced-playwright-banking-practice.png',
      technologies: ['Playwright', 'TypeScript', 'End-to-End Testing'],
      categories: ['QA'],
      githubUrl: 'https://github.com/Sandroo10/Advanced-Playwright-Banking-Practice',
      isFeatured: true,
    },
    {
      title: 'API Testing in JavaScript Practice',
      description: 'A focused API testing practice project using Axios for HTTP requests and Cucumber for readable, behaviour-driven scenarios. It demonstrates structured API checks, reusable step definitions, and JavaScript-based test automation.',
      image: '/svgs/axios.svg',
      imageFit: 'contain',
      technologies: ['Axios', 'Cucumber', 'JavaScript', 'API Testing'],
      categories: ['QA', 'Backend'],
      githubUrl: 'https://github.com/Sandroo10/API-Testing-in-JS-practice',
      isFeatured: true,
    },
    {
      title: 'Marionette MusicBox (Website + Discord Bot)',
      description: 'A FNAF-inspired showcase website for Marionette MusicBox, paired with a working Discord music bot. The bot supports slash commands, per-server queues, and YouTube playback.',
      image: '/images/Marionette-MusicBox.png',
      technologies: ['React', 'TypeScript', 'Tailwind', 'Discord.js', 'Node.js'],
      categories: ['Frontend', 'Backend'],
      liveUrl: 'https://marionette-discordbot.vercel.app/',
      githubUrl: 'https://github.com/Sandroo10/MarionetteBotShowcase'
    },
    {
      title: 'RetailMax (Final for TBC Academy Project) *Updated*',
      description: 'A project that was done in 2 days while I had finals. still rough design but updated as well as new code structure, supabase for backend and database. working cart + login functionality. ',
      image: 'https://di2ponv0v5otw.cloudfront.net/shows/2024/03/09/9/m_65ec9e82849fc2e041077792.png',
      imageClassName: 'scale-110',
      technologies: ['React', 'Tailwind', 'Supabase', 'ShadCn'],
      categories: ['Frontend', 'Backend'],
      liveUrl: 'https://retail-max.vercel.app/',
      githubUrl: 'https://github.com/Sandroo10/RetailMax',
      isFeatured: false,
    },
    {
      title: '.Net WebServerApp',
      description: 'Small webserver application that I designed in .Net very raw but great test for learning.',
      image: '/images/WebApp.webp',
      technologies: ['HTML', '.NET', 'WebServer', 'C#'],
      categories: ['Backend'],
      githubUrl: 'https://github.com/Sandroo10/ProjectWebServerApp'
    },
  ];

export const projectSlug = (project: Project) => project.githubUrl?.split('/').pop()?.split('?')[0] || 'project';

