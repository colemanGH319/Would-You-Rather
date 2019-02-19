# Would You Rather?

## Introduction

Would You Rather is an application that lets users create polls, answer each
other's polls and see the results!

## Technologies

The front end is a React app with a Redux
store that houses around 90% of the app's state (basically everything minus the
self-contained state in the form components).

The backend data and API are currently housed in the _DATA.js file provided by
Udacity. I am working on a custom backend API using the Django REST Framework
that will allow for user and polling data to be stored in a remote database in
order for state to persist between sessions.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn install`

Installs the application and all dependencies.

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
