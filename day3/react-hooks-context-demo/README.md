# React Hooks & Context Mini App (Day 3)

**Introduction**
This project is a small, practical React app built using TypeScript that helps me explore some important React hooks, context API, and TypeScript generics. The aim was to learn how to write clean, efficient, and type-safe React code, while creating interactive and user-friendly features.

It's designed to be easy for beginners to follow along and understand how different React concepts work together in real projects.

**What’s Included in This Project?**
The app is split into several parts, each focusing on a set of concepts:

**1. Counter & Timer**
- Counter: A simple counter that you can increase, decrease, or reset.
  The number changes colour based on whether it’s positive, negative, or zero, making it visually clear what the current state is.

- Timer: A timer that starts automatically and counts seconds up.
  You can start or stop the timer with a toggle button.

These components use the React Hook useState to manage their state, and useEffect in the Timer to handle side effects like starting and clearing intervals.

**2. useRef & useMemo**
- _InputFocus:_ This component has an input box and a button. Clicking the button sets the focus on the input field.
  Here, I used useRef to directly interact with the DOM element (the input), which is something React normally abstracts away from.

- ExpensiveCalc: This component calculates the factorial of a number using a deliberately slow loop to simulate a heavy computation.
  To avoid slowing down the UI every time the component renders, this calculation is wrapped in useMemo.
  This hook makes sure the calculation only runs when the input number changes, but not when other parts of the component update.

  This makes the app more performant by remember("memoising") the costly result.

**3. useCallback & Memoised Child**
Here, I created a parent component with a list of items and a child component that displays the list and allows adding new items.

The function to add an item is wrapped in useCallback so it doesn’t change unnecessarily, which helps the child component avoid unwanted re-renders.

The child component is wrapped with React.memo to only rerender when its inputs really change.

This combination teaches how to optimise performance by preventing re-renders.

**4. Context API with Theme Switching**
I built a simple theme context to switch between light and dark themes.

Using React's createContext, useContext and useState, the app lets users pick a theme from a dropdown.

The whole app responds immediately by changing background and text colours accordingly.

This shows how React Context enables sharing global state in an app without cumbersome prop drilling.

**5. TypeScript Generics and Utility Types**
The project includes a generic dropdown component that can handle any kind of options, thanks to TypeScript generics.

It accepts options and handlers that are strongly typed, allowing safe reuse for different purposes.

For example, the theme dropdown uses string union types ('light' | 'dark'), while the user role dropdown uses more complex types defined in the types folder.

**What React Hooks Were Used and Why?**
- _useState_: To hold and update component state like counters, selected items, or timer seconds.

- _useEffect_: To manage side effects, specifically starting and cleaning up the timer interval automatically.

- _useRef_: To grab a reference to the input element and give it programmatic focus when requested.

- _useMemo_: To memoise expensive calculations so they only run when their inputs change, making the UI buttery smooth.

- _useCallback_: To memoise functions passed down as props, helping avoid unnecessary renders.

- _useContext (with createContext)_: To share the current theme and theme toggling function easily among all components.

**How Generics and Utility Types Were Applied**
The Dropdown component uses a generic type parameter to accept option values of any type while keeping type safety intact.

_For example:_

The theme dropdown uses generic type 'light' | 'dark'.

The user role dropdown uses a custom type UserRole (a union of string literals like "Admin" | "User" | "Guest").

This flexibility means the dropdown can be reused anywhere in the app with confidence about the types.

**Project Structure**
src/
├── components/      # All React components (Counter, Timer, InputFocus, etc.)
├── context/         # The ThemeContext and provider
├── types/           # Shared TypeScript types like UserRole, RoleOption
├── utils/           # Utility functions (e.g., slow factorial)
├── App.tsx          # Main app component combining everything
├── index.tsx        # React app entry point

**How to Run the App**
Run npm install to install dependencies.

Start the development server with npm run dev (Vite) or npm start (CRA).

Open your browser at http://localhost:3000.

Try switching themes from the dropdown and see the whole app update colours smoothly. Play with the counter, timer, focus input, and dropdowns side-by-side inside neat boxes!

**Final Thoughts**
This project was an excellent chance to solidify understanding of React hooks in a practical way, improve typing with TypeScript, and practise code organisation.

It shows how hooks make managing state and side effects easier, how context can elegantly handle global settings, and how generics improve component reusability.
