# Insurance Portal

**Dashboard for Insurance portal**

## Getting started

In the project directory, you can run:

#### `yarn install`

To install dependepencies

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm test`

Launches the test runner in the interactive mode. This is handled with _`react-scripts`_ and _`jest`_

#### `npm test:watch`

Launches the test runner in the interactive watch mode. This is handled with _`react-scripts`_ and _`jest`_

#### `npm test:coverage`

Launches the test runner in watch mode and generates test converage for the components. Generated coverage can be found in _`/coverage`_ folder.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Folder Structure

All the code for the application can be found in _`/src`_, with _`components`_, _`pages`_, _`hooks`_, _`helpers`_, _`routes`_.

- **`components`** : contains the components (`atoms`, `molecules`) and layouts, with tests covering most edge-cases.

- **`pages`** : contains components that forms the page as defined in `routes`.

- **`hooks`**: contains reusable hooks like `useCopyToClipboard` used for copying promo code.

- **`routes`** : contains links, routes and related utilities.

- **`helpers`**: contains utitility functions that can be reused.
