# typescript-react-vite-template

A Vite + React + TypeScript template.

## How to use

1. Create your project based on this template.

   - Click `Use this template` in this page to create a new repository.
   - Use `git submodule`.

2. Update meta-information.

   - Update the `package.json`.
   - Change the author in `LISCENSE`.
   - Clean up this README.

3. Run

   - `npm install -g pnpm` (install `pnpm` firstly)
   - `pnpm install`
   - `npm run dev`: start the development server on `localhost:6543`

4. Testing

   - Unit tests:
     - `npm run test`: run unit tests with Vitest and React Testing Library
     - `npm run coverage`: get test coverage of your project via `istanbul`
   - End-to-end tests:
     - `npm run dev`: start the development server
     - `npm run cypress:open`: open cypress in dev mode
     - `npm run cypress:run`: execute Cypress in CLI

5. Linting

   - `npm run lint`: run linter
   - `npm run lint:fix`: fix lint issues
   - `npm run format`: format source files with a consistent style

6. Continuous integration
   - Add `.yml` under `.github/workflows`

## Tech stack

- [TypeScript](https://www.typescriptlang.org)
- [ESLint](https://eslint.org) and [Prettier](https://prettier.io)
- [Lint-staged](https://github.com/lint-staged/lint-staged) and [Husky](https://typicode.github.io/husky/)
- [Vitest](https://vitest.dev/) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for the unit tests
- [Cypress](https://www.cypress.io/) for e2e tests
- [Istanbul](https://istanbul.js.org/)
- [GitHub Action Workflows](https://github.com/features/actions) set up to run tests and linting on push

## Reference

1. [typescript-react_best_practices-vite_template](https://github.com/CodelyTV/typescript-react_best_practices-vite_template)
2. [Vitest with React Testing Library In React(created with Vite)](https://victorbruce82.medium.com/vitest-with-react-testing-library-in-react-created-with-vite-3552f0a9a19a)
3. [Cypress, React and Vite collaboration](https://medium.com/@nelfayran/cypress-react-and-vite-collaboration-bed6761808fc)