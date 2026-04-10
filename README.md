# React + Vite

You can preview the app here -> https://twmeggett.github.io/charter-react/

To start the application run -> npm run dev 
 * http://localhost:5173/charter-react/

I'd like to point out that there's a drawer which allows you to add or delete tiers in the project. The graph and transactions table will update accordingly. This is to illustrate that the reward tiers are completely configurable.


Also, I've made the dashboard relatively mobile friendly with the help of tailwind css' breakpoint classes.


- Things to consider
  * Even though there's a tsconfig file, this app is written in js as the prompt demands. This is here to solve an aliasing dependency required by shadcn.
  * I'm using kebab case for React component to solve the famous renaming issue on windows, and to keep naming consistent, simple, and easily readable.
  * I'm purposely not using default imports as they can be misspelled and lead to inconsistencies.
  * You may notice in use-rewards-dashboard I'm wrapping the tier manipulation actions in a useCallback, and then constructing an object with them and memoizing that object. That's necessary to pass that object into the context provider and not cause unnecessary re-renders. Use context was able to make the code a lot cleaner by removing prop-drilling and ensuring each component only had to worry about the props directly affecting it, but it has a drawback of being inefficient out the box, and without being able to use Redux as per the instructions, this was the next best thing.
