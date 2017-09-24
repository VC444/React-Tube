This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

React-Tube resides at https://react-tube-ab0c0.firebaseapp.com/

# Description
React-Tube is a web app built using React JS. It is a minimal clone of youtube. Seach for any video and the app makes a request to Youtube Data API and shows the top 5 results.

Just a small difference that I made - The user does not have to press enter to finish his search query. The app fires the function calling the Youtube Data API every 500 milliseconds. This is done using an npm package called Lodash.
