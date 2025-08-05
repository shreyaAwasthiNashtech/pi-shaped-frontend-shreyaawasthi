# React & Next.js Advanced Demo

**Introduction**
This project consists of two parts aimed at practising and understanding the fundamentals and some advanced concepts of React and Next.js using TypeScript. The goal is to build practical, real-world components and pages while learning important concepts like state management, lazy loading, client-side and server-side rendering, and API integration.

# React Demo (Part 1)

**Overview**
In this part, I created a React app that demonstrates:

- A Counter component, which lets you increase or decrease a number.

- Use of memoization (useMemo) to make an expensive calculation efficient.

- Use of React.memo to prevent unnecessary re-rendering of the Counter component.

- A lazy-loaded Settings panel component, loaded only when you ask for it, improving app performance.

- Simple tests written with React Testing Library to check the counter and lazy loading features work correctly.

- ESLint and Prettier set up to keep the code clean, consistent, and error-free.

**How It Works**
-> The Counter shows a number that can be increased or decreased by clicking buttons. Behind the scenes, it performs a slow calculation whenever the number changes, but thanks to useMemo, this calculation runs only when needed, keeping the UI fast and responsive.

-> You can press the "Show Settings" button to load the Settings panel. This component is not loaded with the initial app, saving resources and making the app quicker to start.

-> Tests ensure the counter updates properly and the settings panel appears as expected.

-> ESLint and Prettier help maintain the code style and catch common mistakes.

**Usage**
To see this in action, run the app and try clicking the increment/decrement buttons and toggle the settings panel.

# Next.js Demo (Part 2)

**Overview**
The second part shows practical examples of two main ways Next.js renders data and pages:

1. CSR (Client Side Rendering)

2. SSR (Server Side Rendering)

An API endpoint returns a list of fruits, which is then fetched and displayed differently on each page.

**What’s Included**
- An API route /api/fruits that returns a simple list of fruit names.

- A CSR page (pages/csr.tsx): This page fetches the fruit list on the client-side using React’s useEffect hook. The data loads after the page is shown in the browser.

- An SSR page (pages/ssr.tsx): This page fetches the fruit list on the server for every request using Next.js’s getServerSideProps. The browser receives a fully-rendered list immediately.

- Both pages include simple, clean, and responsive designs to display the fruits list attractively.

**Why Two Methods?**
-> **CSR** loads fast but initially shows no data until the client fetches it. This is useful when data changes often or when less server load is desired, but it’s not great for search engines.

-> **SSR** fetches data on the server before sending the page, so content is ready immediately and better for SEO. However, it places more load on the server and can be slower per individual request.

**Running the Project**
  Both demos are separate and can be run independently.

   For React Part (Part 1)
   Navigate to the React project folder (day4/react-advanced-demo)

1. Run npm install to install packages

2. Run npm run dev (for Vite) or npm start (if using CRA)

3. Open the browser at http://localhost:3000 to see the React demo.

   For Next.js Part (Part 2)
   Navigate to the Next.js project folder (day4/next-rendering-demo)

1. Run npm install to install packages

2. Run npm run dev to start the Next.js server

3. Open the browser and visit:

http://localhost:3000/csr for the Client Side Rendered fruit list

http://localhost:3000/ssr for the Server Side Rendered fruit list

**What I Learned**
- How to use state and memoization in React to write efficient components.

- How to split large apps by lazy loading parts only when needed.

- Setting up and writing basic tests to catch problems early.

- How to integrate and differentiate client-side vs server-side rendering in Next.js.

**Final Thoughts**
This project helped me take a deeper dive into both React and Next.js, showing real benefits of modern web development techniques. It reinforced understanding of rendering methods and performance improvements. I hope this code is clear and helpful for anyone interested in learning these technologies.
