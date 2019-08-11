This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

- `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

- `npm run eject`

## Defination of Testing

Writing automated tests speeds up your development flow and gives you a way of quickly identifying issues, breaking changes and side effects. It speeds up development because you don’t have to test everything manually after every change. When testing code manually, it’s easy to overlook a certain scenario and therefore to overlook a bug.

Of course you can also write bad automated tests, you can forget an important scenario there, too. But over the lifespan of your project development, you’ll very likely encounter issues and add respective tests. Additionally, if you write tests, you’re forced to think about your app and potential issues harder. You have to come up with clever tests that will fail if something important changes.

You are also forced to write cleaner, more modular code because the more spaghetti your code becomes, the harder it will be to test.

## Unit Tests, Integration Tests & End-to-End Tests

When talking about “tests” or “automated tests” (I’ll use these terms interchangeably), we can differentiate between three kind of tests:

- **Unit tests** that test one isolated unit/ piece of code (e.g. a function) [ Need to write thousands ]
- **Integration tests** which test the combination of features (e.g. a function calling another function)
- **End-to-End (e2e)** or UI tests which test a full interaction path in your app (e.g. the signup process) [ Very few tests ]

These kind of tests have a different level of complexity to write them and a different frequency with which you’ll write them.

## Testing Configuration
