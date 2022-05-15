# My pendings

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Steps to run locally

### Install the dependencies

You need to run `npm install` to install all the dependencies of the project.

### Run the project

You can run the project in the development mode by running `npm start` and the project will be running in your port `3000`.

## Key features

- The dashboard only displays active pendings
- A card with a button that shows the form to add a new pending
- The form to add new pending consists of 3 fields (priority, text, and status)
- The button to add a pending in the form is disabled until the text exists
- When a new pending is added, the form is hidden again
- Every single pending is displayed on a card
- Every card contains the pending text, the priority, and two action buttons.
- A button to delete a pending
- A button to complete a pending
- A counter that receives the pendings and calculates the active and done pendings
- The counter also displays the number of active and done pendings
- A custom styled button that is used in other components
- The pending cards are draggable
- The application does not allow duplicated descriptions

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
