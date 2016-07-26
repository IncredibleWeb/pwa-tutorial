# PWA Tutorial
A simple progressive web application that demonstrates the use of Service Workers, Cache API and offline functionality; the use of a Manifest for Web and Add to Homescreen.

## Progressive Web Apps
Progressive Web Applications take advantage of the latest technologies to combine the best of web and mobile apps; think of it as a website built using web technologies but which acts and feels like an app. Recent advancements in the browser and the availability of service workers, the Cache and the Push APIs, have given web developers the possibility to install web apps to the home screen, receive push notifications and even work offline.

### Service Workers
Event-driven scripts (written in JavaScript) that have access to domain-wide events, including network fetches. Through service workers, it's possible to cache all static resources, which could drastically reduce network requests and have considerable performance improvements too.

### Manifest
A simple JSON file that must follow the specification available on [W3C](a href="https://w3c.github.io/manifest/" target="_blank"), it is possible to run the web app in full-screen as a standalone application, assign an icon which will be displayed once the application is installed onto the device or assign a theme and background colour to your app. In addition, Chrome on Android also proactively suggests to the user to install the web app using [Web App install banners](https://developers.google.com/web/updates/2015/03/increasing-engagement-with-app-install-banners-in-chrome-for-android).

### Technology
Built using traditional HTML5 and vanilla JavaScript that simulates the retrieval of data from a mock API. Throughout the application we use small bits of [KnockoutJS](http://knockoutjs.com) to handle our model-view-viewmodel (MVVM) bindings; a lightweight JavaScript framework that allow us to bind our JavaScript models to our HTML views. You may replace this with any other framework such as React or AngularJS.

### API
For the scope of this demo, we will be retrieving a static JSON file instead of a real API. This is only to keep things simple and in the real world you would query an API or use web sockets.

## Demo
Demo: [https://incredibleweb.github.io/pwa-tutorial/](https://incredibleweb.github.io/pwa-tutorial/)