export interface ProjectData {
  slug: string
  heroImage: string
  previewImage: string
  images: string[]
  title: string
  description: string

  stack: string[]
  code_url?: string
  demo_url?: string
  focus: string[]
  backend?: string[]
}

export const Projects: ProjectData[] = [
  {
    slug: 'audiophile-ecommerce',
    heroImage: 'https://ik.imagekit.io/jwdesjardin/tr:w-1110,h-550/audiophile-hero.jpg',
    previewImage: 'https://ik.imagekit.io/jwdesjardin/tr:w-540,h-500/audiophile-preview.jpg',
    images: [
      'https://ik.imagekit.io/jwdesjardin/tr:w-600,h-378/audiophile-main1.jpg',
      'https://ik.imagekit.io/jwdesjardin/tr:w-600,h-378/audiophile-main2.jpg',
      'https://ik.imagekit.io/jwdesjardin/tr:w-600,h-378/audiophile-main3.jpg',
    ],
    title: 'Audiophile Ecommerce',
    description: `This is a full-stack ecommerce project with many features including a shopping cart, checkout form, user login and registration using a secure server.`,
    stack: [
      'React',
      'Next.js',
      'TailwindCSS',
      'Node/Express',
      'Postgres',
      'Prisma',
      'Formik',
      'Typescript',
    ],
    code_url: 'https://github.com/jwdesjardin/audiophile-ecommerce-website',
    demo_url: 'https://audiophile-ecommerce-website.vercel.app/',
    focus: [
      `Using Next.js Static generation features for quick page load.`,
      `Using Tailwind config file with SCSS classes to set up a design system for typography, layout, buttons, and input elements.`,
      `Creating custom-styled radio buttons, number and text inputs while maintaining accessibility standards.`,
      `Using CSS and Tailwind to manage responsive layouts through all screen sizes. ( Using Flexbox and Grid )`,
      `Using CSS position and transform properties to expertly place background images and SVGs.`,
      `Using Formik for form validation and form submission.`,
      `Using Lighthouse to improve Performance, SEO, and Accessibility.`,
      `Creating a Layout component to be reused on each page with variations and optional components.`,
    ],
    backend: [
      `Creating a Sanity CMS backend to provide product data and a admin interface (This ended up being replaced with the product API in production)`,
      `Creating a Node/Express API that serves data for a product and provides next.js with the slugs for SSG.`,
      `Creating a Node server that supports registration, authentication, creating an order, and viewing orders.`,
      `Using Docker to create a docker image of the node application.`,
      `Using Google Cloud Platform to create a compute engine from the node server and adjust firewall rules to allow outside connections.`,
      `Using Heroku to host authentication server allowing https connections.`,
    ],
  },
  {
    slug: 'pay-api',
    heroImage: 'https://ik.imagekit.io/jwdesjardin/tr:w-1110,h-550,fo-top/payapi_hero.jpg',
    previewImage: 'https://ik.imagekit.io/jwdesjardin/tr:w-540,h-500,fo-left/payapi_hero.jpg',
    images: [
      'https://ik.imagekit.io/jwdesjardin/tr:w-600,h-378/payapi_index.JPG',
      'https://ik.imagekit.io/jwdesjardin/tr:w-600,h-378/payapi_form.JPG',
    ],
    title: 'Pay API',
    description: `This project is a multi-page landing webiste for a new startup. Marketing details are carefully displayed about the product, pricing and the team. The site also collects contact information from interested vistors in a form.`,

    stack: ['React', 'TailwindCSS', 'Next.js', 'Typescript'],
    code_url: 'https://github.com/jwdesjardin/payapi-multi-page-website',
    demo_url: 'https://payapi-multi-page-website-seven.vercel.app/',
    focus: [
      `Placing SVGs as background images and positioning with CSS position and transform properties.`,
      `Creating reusable Navbar and footer components for layout.`,
      `Embedding Fonts into SVGs to maintain font style across all browsers.`,
      `Passing a value through a query string using the Next.js link component.`,
      `Using CSS to display an image that stretches the width of the screen responsively.`,
      `Maintain accessible inputs and links.  `,
      `Using the Next.js Image Component to optimize performance.`,
      `Using Formik for form validation.`,
      `Using keyframe animations for side menu including exit animation.`,
    ],
  },
  {
    slug: 'coffee-roasters',
    heroImage: 'https://ik.imagekit.io/jwdesjardin/tr:w-1110,h-550,fo-top/CR_index.png',
    previewImage: 'https://ik.imagekit.io/jwdesjardin/tr:w-540,h-500,fo-top/CR_index.png',
    images: [
      'https://ik.imagekit.io/jwdesjardin/tr:w-600,h-378/dropdown.png',
      'https://ik.imagekit.io/jwdesjardin/tr:w-600,h-378/whatContainer.png',
      'https://ik.imagekit.io/jwdesjardin/tr:w-600,h-378/psuedo.png',
      'https://ik.imagekit.io/jwdesjardin/tr:w-600,h-378/pagestate.png',
    ],
    title: 'Coffee Roasters',
    description: `This is a landing page with a modern design for a coffee roasting subsription service. Two pages show information about the product, brand and services. A third page allow a visitor to select options for their own subscirption plan.`,

    stack: ['React', 'TailwindCSS', 'Next.js', 'Typescript'],
    code_url: 'https://github.com/jwdesjardin/coffee-roasters-subscription-site',
    demo_url: 'https://coffee-roasters-subscription-site.vercel.app/',
    focus: [
      `Creating a Hero component with a dynamic background.`,
      `Using Pseudo-elements to create background designs.`,
      `Creating a popup screen that disables scrolling while open.`,
      `Using Tailwind classes and CSS Modules to style projects to meet design requirements. `,
      `Using React to store local page state for subscription form and order summary.`,
      `Create click event listeners to expand or close dropdown subscription questions.`,
      `Creating a responsive layout using CSS Flexbox and Grid.`,
    ],
  },
  {
    slug: 'nhl-app',
    heroImage: 'https://ik.imagekit.io/jwdesjardin/tr:w-1110,h-550,fo-top/main.JPG',
    previewImage: 'https://ik.imagekit.io/jwdesjardin/tr:w-540,h-500,fo-top/main.JPG',
    images: [
      'https://ik.imagekit.io/jwdesjardin/tr:w-600,h-378/leaders.JPG',
      'https://ik.imagekit.io/jwdesjardin/tr:w-600,h-378/team-games.JPG',
      'https://ik.imagekit.io/jwdesjardin/tr:w-600,h-378/team-standings.JPG',
      'https://ik.imagekit.io/jwdesjardin/tr:w-600,h-378/team-bio.JPG',
    ],
    title: 'NHL Stats App',
    description: `This project is a full-stack application that uses a custom API to scrape NHL stats data from the internet then displays this data across several custom pages.`,

    stack: ['React', 'ChakraUI', 'Cheerio.js', 'Node/Express', 'Axios', 'Typescript'],
    code_url: 'https://github.com/jwdesjardin/nhl-stats-app',
    demo_url: 'https://nhl-stats-app.netlify.app/',
    focus: [
      `Designing the mockups using Figma.`,
      `Using Chakra UI library to develop the front-end quickly. `,
      `Create a game component that will display differently based on the current time and whether the game has passed or not.`,
      `Creating a reusable table component that can be configured by passing an options object. `,
      `Creating a feature to choose sort columns of the table.`,
      `Creating a feature to search for players or teams in the side menu.`,
      `Using the React "useEffect" hook to fetch dynamic data to refresh team, player, and game pages. `,
    ],
    backend: [
      `Using Node and Express to create routes that retrieve data about NHL games, teams, and players.`,
      `Using Axios to fetch HTML from a website.`,
      `Using Cheerio.js to create a DOM-like structure we can work with Node.`,
      `Using string methods .replace and .match and Cheerio methods to gather the information we want.`,
      `Using Express to return the cleaned-up data as a JSON string.`,
    ],
  },
  {
    slug: 'jeopardy-game',
    heroImage: 'https://ik.imagekit.io/jwdesjardin/tr:w-1110,h-550,fo-top/jeopardy-main.JPG',
    previewImage: 'https://ik.imagekit.io/jwdesjardin/tr:w-540,h-500,fo-top/jeopardy-main.JPG',
    images: [
      'https://ik.imagekit.io/jwdesjardin/tr:w-600,h-378/q1.JPG',
      'https://ik.imagekit.io/jwdesjardin/tr:w-600,h-378/a1.JPG',
      'https://ik.imagekit.io/jwdesjardin/tr:w-600,h-378/comp2.JPG',
      'https://ik.imagekit.io/jwdesjardin/tr:w-600,h-378/a2.JPG',
      'https://ik.imagekit.io/jwdesjardin/tr:w-600,h-378/summary.JPG',
    ],
    title: 'Jeopardy Game',
    description: `This project recreates a Jeopardy game with modified rules.`,
    stack: ['React', 'ChakraUI', 'Framer Motion', 'Jeopardy API', 'Typescript'],
    code_url: 'https://github.com/jwdesjardin/jeopardy-game',
    demo_url: 'https://jeopardy-game-ts.netlify.app/home',
    focus: [
      `Using Figma to design mockups of the project from a concept.`,
      `Using third-party API to fetch data for Jeopardy questions.`,
      `Using Chakra UI to develop the front-end.`,
      `Using light/dark mode of Chakra UI.`,
      `Use the set/clear Interval and Timeout methods to create a game clock.`,
      `Using conditional statements and app-level state to block user interaction when it is not their turn.`,
      `Using local storage to keep track of all answered questions in order to maintain progress at all times.`,
      `Using Framer Motion for page animations.`,
    ],
  },
]
