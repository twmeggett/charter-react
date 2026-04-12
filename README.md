# React + Vite

You can preview the app here -> https://twmeggett.github.io/charter-react/

To start the application run -> npm run dev 
 * http://localhost:5173/charter-react/

I'd like to point out that there's a drawer which allows you to add or delete the reward tiers in the project. Of course it defaults to [{start: 50: mult: 1}, {start: 100, mult: 2}] as instructed in the prompt. When tiers are added or removed the customer graph and transactions table will update accordingly. This is to illustrate that the reward tiers are completely configurable.

I wanted to make the actual compute-rewards function as pure as posible, relying on a singular reduce method to calculate the reqard points for a given transaction.

Also, I've made the dashboard relatively mobile friendly with the help of tailwind css' breakpoint classes.

- Things to consider
  * Even though there's a tsconfig file and the repo mentions typescipt in the files, the actual working app is written in js as the prompt demands. This is here to resolve dependency issues from shadcn.
  * In the same vein, even though there's a reducer folder and shared dispatch, this app isn't using redux as the prompt requested. It's using React's native useReducer and the Context API instead for global state management. I wanted to avoid prop-drilling, so that the components only need to be concerned with the props directly affecting them. 
  * I'm using kebab case for React component to solve the famous renaming issue on windows, and to keep naming consistent, simple, and easily readable.
  * I'm purposely not using default imports as they can be misspelled and lead to inconsistencies.
