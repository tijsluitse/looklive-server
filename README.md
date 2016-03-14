# LookLive server

The project you're looking at is an [express.js](http://expressjs.com) project. You'll use it to get set up a development environment where you're
going to optimize the way this project works. In it's current state, the css is messy, the rendering isn't modern and
overall the product is boring and not efficient. It's up to you to fix this and improve it.

## Getting started

### Step 1 - clone the repo
Github provides some instructions for this and we're assuming that you know how to clone this repo. If you're not sure,
don't hesitate to raise your hand now and ask.

### Step 2 - install dependencies
In order to run the server you'll need to install express.js and it's dependencies. In order to do this, open up a 
terminal and navigate to your project folder (for example `cd ~/Projects/looklive-server`). When you've done this, type
this command to run the instal:

```
npm install
```

That should get you setup.

### Step 3 - running the server
To run the server, stay at the 'root' of your project folder and type:

```
npm start
```

That will get the server to run on port 3000. If you go to [http://localhost:3000](http://localhost:3000) in your browser
you should see an overview page.

## The api

This project comes with a simple API. All you need to know for now is that there's three endpoints:

* `/api/feed/` <- returns a feed of appearances
* `/api/appearance/:uuid` <- returns a single appearance, more detailed than in the feed. Replace `:uuid` with the 
appearance id.
* `/api/product/:uuid` <- returns a single product, including similar and bargain products. Replace `:uuid` with the 
product id.

The API returns JSON (for now).

#Exercises

##Functionalities
- Don't render everything in JS - async render
- Inline first css styles
- Improve first render when in mean time api request is done
- Using cache - Service worker
- Streaming API 
- Read offline button for users

##Before & After Service worker Caching

![Before SW](images/sw-before.jpg)

###Before
- DomContentLoad: 593ms
- Firstpaint: 630ms
- Load event: 2.10s

![Before SW](images/sw-after.jpg)

###After 
- DomContentLoad: 360ms
- Firstpaint: 418ms
- Load event: 1.73s 

##What is a progressive web app?
"A Progressive Web App uses modern web capabilities to deliver an app-like user experience. They evolve from pages in browser tabs to immersive, top-level apps, leveraging the web's low friction."

- Progressive - Work for every user, regardless of browser choice because they’re built with progressive enhancement as a core tenet.
- Responsive - Fit any form factor: desktop, mobile, tablet, or whatever is next.
- Connectivity independent - Enhanced with service workers to work offline or on low quality networks.
- App-like - Feel like an app to the user with app-style interactions and navigation because it's built on the app shell model.
- Fresh - Always up-to-date thanks to the service worker update process.
- Safe - Served via HTTPS to prevent snooping and ensure content hasn’t been tampered with.
- Discoverable - Are identifiable as “applications” thanks to W3C manifests and service worker registration scope allowing search engines to find them.
- Re-engageable - Make re-engagement easy through features like push notifications.
- Installable - Allow users to “keep” apps they find most useful on their home screen without the hassle of an app store.
- Linkable - Easily share via URL and not require complex installation.

Source: [Google Developers](https://developers.google.com/web/progressive-web-apps)

![Progressive Web App](https://addyosmani.com/assets/getting-started-pwa/pwa-general-ff-@1x.jpg)

