// Load JQuery
requirejs.config({
  "baseUrl": "lib",
  "paths": {
    "app": "../app",
    //loading jquery from CDN
    "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min",
  }
});

/* console.log("app.js is loaded"); */

// Load the main app module to start the app
requirejs(["app/main"]);