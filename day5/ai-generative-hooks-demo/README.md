# Day 5 Exercise - README
**Overview**
This exercise focuses on integrating generative AI capabilities into a React project using Vite and TypeScript. The aim was to enhance existing components, primarily ExpensiveCalc.tsx and InputFocus.tsx, by adding AI-powered features to provide dynamic explanations and suggestions.

We reused Google’s Gemini AI via the official @google/generative-ai client library, ensuring a clean and reliable integration with debounced inputs for a responsive user experience.

**Features Implemented**
1. ExpensiveCalc.tsx
- Calculates the factorial of a given number with a simulated heavy computation.

- Generates a step-by-step explanation of the factorial calculation from the Gemini AI.

- Uses a debounced effect to avoid flooding the API with requests on every number change.

- Displays loading and error states during AI calls.

2. InputFocus.tsx
- Originally a simple input field with a button to focus it using React’s useRef.

- Enhanced with AI-powered form field validation suggestions.

- As users type a form field label, AI provides validation rules, example inputs, and common pitfalls.

- Also uses debounced input to keep API requests efficient.

- Maintains loading and error UI consistency with ExpensiveCalc.

**Libraries & Tools**
- Vite: For fast frontend tooling.

- React 19 with TypeScript: Frontend framework and typing.

- @google/generative-ai: Official SDK for Google Gemini API.

- React Testing Library + Vitest: Testing utilities and test runner setup.

- Debounce Hook: Custom hook to debounce user inputs.

- Jest-DOM: For richer DOM assertions in tests.

**Testing**
- Created component test files for ExpensiveCalc and InputFocus.

- Mocked AI calls (getGeminiExplanation()) to return fixed responses ensuring tests aren't dependent on live API.

- Verified correct rendering, user interactions (input change, button clicks), loading states, and AI response display.

- Added error case tests to confirm UI handles AI failures gracefully.

- Tests run under Vitest configured for compatibility with Vite and TS.

**Challenges & Solutions**
1. Direct API Integration Complexity
- Early attempts to call Gemini API endpoints directly with fetch led to many JSON payload errors — unknown fields like prompt, temperature, etc.

- This was due to misunderstanding the payload schema and model-specific methods (generateText vs generateContent).

Solution: Shifted to the official @google/generative-ai client library, which abstracts away these complexities and enforces correct usage.

2. TypeScript Test Setup
- Encountered errors like Cannot find name 'describe' and missing matcher types like toBeInTheDocument.

- These stemmed from missing or misconfigured type definitions for the test runner.

Solution: Adopted Vitest, which works smoothly with Vite and React, configured global types and test setup files importing @testing-library/jest-dom.

Added vitest.config.ts and setupTests.ts files ensuring proper jest-dom matchers and test environment configuration.

3. API Rate Limiting and Debounce
- Without debounce, the AI API calls flooded on every keystroke causing rate-limiting errors (HTTP 429).

Solution: Developed and applied a reusable debounce React hook that delays API calls until user pauses typing, improving usability and efficiency.

**How to Run**
- Ensure API Key presence

- Put your Google Gemini API key in .env with:
VITE_GEMINI_API_KEY=your_api_key_here

**Install dependencies**
npm install

-Run dev server
npm run dev

- Run tests
npm run test

**File Summary**
- src/components/ExpensiveCalc.tsx — Factorial calculation + AI explanation

- src/components/InputFocus.tsx — Input focus + AI validation suggestions

- src/utils/gemini.ts — Wrapper around Google Gemini client with flexible prompt support

- src/hooks/useDebounce.ts — Custom debounce hook for API call optimization

- src/components/ExpensiveCalc.test.tsx — Tests for ExpensiveCalc

- src/components/InputFocus.test.tsx — Tests for InputFocus

- vitest.config.ts — Vitest configuration for testing environment

- src/setupTests.ts — Setup file to import jest-dom matchers

- tsconfig.app.json — TS config with Vitest type declarations

**Reflections**
This exercise was an excellent introduction to combining React hooks with cutting-edge AI services. The significant hurdles involved understanding Gemini’s API and ensuring correct TypeScript and testing configurations. Leveraging the official SDK simplified the AI integration considerably, letting us focus on user experience and component design.

Adding AI-driven form suggestions inside an existing simple component like InputFocus felt satisfying, showing how a straightforward UI could be enriched significantly through AI without bloating the codebase.

Using Vitest instead of Jest was a solid choice for Vite and React; the smoother integration and config made testing reliable and predictable.
