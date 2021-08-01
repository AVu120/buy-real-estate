# Instructions to Build This Project

Note: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1. Ensure you have [node.js](https://nodejs.org/en/) installed.
2. In the root folder of this project, run

```
npm i
```

to install all required dependencies.

3. Run

```
npm start
```

to run the app on a local development server.

4. Access the running app in any browser at http://localhost:3000.

# Testing

Run all tests (in src\App.test.tsx) with

```
npm test
```

# Features

- Property cards will be displayed in a 'Results' and 'Saved Properties' column.
- Hover over a property card in the Results column to display an 'Add property' button.
- Click the 'Add property' button to create the property in the 'Saved Properties' column.
- Hover over a property card in the 'Saved Properties' column to display a 'Remove property' button.
- Click the 'Remove property' button to remove the property from the 'Saved Properties' column.

# Extra Features

- Clicking the 'Add property' button will permanently display an 'Already added' button on the property card until it's removed from the 'Saved Properties' column.
- App is responsively designed to work and display well on all device screen sizes.
- App code is typed using typescript.
