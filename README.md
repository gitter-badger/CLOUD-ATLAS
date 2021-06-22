# Why the non-commercial license model?

World Peace Engine Labs's existing and upcoming companies, apps, publishings, products, projects, and code, are always licensed by the following two licenses,
to provide the maximum freedom of usage, but restricted to non-profit purposes only.

https://github.com/worldpeaceenginelabs/PWA-SPA-LOGIN-MAINSCREEN-MENU-Starter-Kit/blob/main/LICENSE.txt
+ Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
+ MIT License (altered to non-profit version)

## This is part of [#decentralized-non-profit-as-a-service](https://worldpeaceengine.org/decentralized-non-profit-as-a-service/)

We are building a PWA Starter Kit for the [Jamstack](https://jamstack.org/), restricted to non-profit purposes only.
But at the same time, we are buidling our own app "The Cloud Atlas" on the same codebase, where you are able to do the following amongst many other things:

- Transform your profit-based business ideas (like the one that you maybe came with to this repository) into a decentralized, sustainable non-profit business, reaching a worldwide audience in only 1.8 secs each user, for only 10$ a month each project.(estimated 2 billion API requests montly, est. 1 billion more for 10$, more details look up #Deployment) (coming soon)
- Brainstorm how to transform your business idea into a decentralized, sustainable non-profit business with individuals and non-profit, for-profit, and institutional representatives who share your interest… (coming soon)
- Get crowdfundings and donations for your decentralized, sustainable non-profit business ideas and running projects (coming later)
- Let your sustainable non-profit business crash through the ceiling with connecting your PWA to the Cloud-Atlas and other PWAs, through an either centralized or decentralized or hybrid API (under development)...

## WYSIWYG React Editor coming...
Check out Clutch.io and join the waitlist. I checked out around 20 WYSIWYG solutions for React and Bootstrap, all of them where either jailing you in their system or missing essential features.
Informations are spare, because Clutch is in open beta, but if luck is on our side, we will get a full blown coding IDE, with visual UI editor for React Apps, and live-data while coding, from our self hosted API.

## PWA-SPA-LOGIN-MAINSCREEN-MENU-Starter-Kit
(React and Material UI - dropping the original lit and FAST libraries)

Looking to build a new [Progressive Web App](https://web.dev/progressive-web-apps/) and not sure where to get started?
This is what you are looking for! The PWA-SPA-LOGIN-MAINSCREEN-MENU-Starter-Kit includes everything you need to start building a production ready PWA and follows all best practices.

## Why PWA? Deep insight into the realm of PWA - The future of the internet and apps
Progressive Web Apps - PWA Roadshow: https://youtu.be/z2JgN6Ae-Bo

## This is a HARDFORK of PWA Builder

PWA Builder is an awesome project of a handful Microsoft developers providing a great entree for building a PWA.

You can check anytime how many PWA Points your actual app/page has on (https://www.pwabuilder.com/)

+ Twitter PWA 94 point
+ PWA-SPA-LOGIN-MAINSCREEN-MENU-Starter-Kit 87 points
+ Google Map's PWA 83 points

...so this is a good repository to start with.

PWABuilder.com is an awesome page providing all resources, for drag and drop & copy and paste a manifest or service worker scripts and many well explained snippets for additional native app like features.
 
## You will get:

- lazy-loaded routes using [@vaadin/router](https://vaadin.com/router).
- A 100 on [Lighthouse](https://developers.google.com/web/tools/lighthouse/), giving you a great starting point for performance and accessibility.
- Includes the [PWABuilder pwa-install component](https://github.com/pwa-builder/pwa-install#pwa-install) for an app store like PWA install experience.
- [Workbox](https://developers.google.com/web/tools/workbox/) for service workers along with the [PWABuilder pwa-update component](https://github.com/pwa-builder/pwa-update#pwa-update) to give your PWA a great offline experience.
- Includes [PWABuilder pwa-auth](https://github.com/pwa-builder/pwa-auth) web component. This component lets your users sign-in/sign-up using their Google, Apple, or Facebook account. Your app receives their email address, name, and profile picture.
- Includes a blank mainscreen with a map and a blank menu with an open/close animation. 

Everything's ready to your demand...

**[Live Demo](https://cloud-atlas.org)** (it's the same package with the same 87 points on pwa-builder.com, but we dropped the pwa-starter example page from our package and made it React + Material UI compatible)

## Getting Started

### Supported Browsers

- Edge
- Chrome
- Firefox
- Safari

### Prequisites

You will need the following things properly installed on your computer.

* [Node.js](http://nodejs.org/) (with NPM)
* [NPM](https://www.npmjs.com/get-npm)

You should also be familiar with [TypeScript](https://www.typescriptlang.org/) which we use for this project. This helps give you more guidance as you code from [intellisense](https://code.visualstudio.com/docs/editor/intellisense) when using [VSCode](https://code.visualstudio.com/).

### Recommended Development setup

We recommend the following tools for your dev setup:

* Editor: [VSCode](https://code.visualstudio.com/)
* Terminal: [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal-preview/9n0dx20hk701?activetab=pivot:overviewtab) or [hyper](https://hyper.is/)

### Development

Run `npm install` and then run `npm run dev`, the starter should open in your default browser. From here you can start developing, your changes will be rebuilt and reloaded in the browser as you develop.

### Building for Production

Run `npm run build`, the `dist/` folder will contain your built PWA. The production build will also generate a pre-caching service worker using [Workbox](https://developers.google.com/web/tools/workbox/modules/workbox-precaching).

## Deployment and Packaging

### Front-end Deployment

Once your PWA is ready to deploy you can deploy/host it anywhere.

We recommend Cloudflare.com (0€ Basic plan, unlimited pages, unlimited bandwidth and 500 deploys a month)

Your static, but API refreshed app, will be deployed to 200 servers worldwide, loading your app in an average of 1.8 sec in every corner around the globe.
From Metropole to jungle village...

Your API is pretty much the only bottleneck!
But that's awesome, since we've eliminated every other administrational burden, with just dropping our app to Cloudflare.

Cloudflare is able to catch spikes in traffic with ease.
Without Cloudflare, you would have to pay server traffic every time a user visits your app/page or downloads or updates the app.

If the free tier of most as-a-service/api providers is used up, many developers regret some of their decisions due to the complexity of the huge amount of connected environments that developers in the pre-Jamstack time were facing.

Now it's reduced to only a front-end in the framework/language you prefer, and an API back-end that is also replaceable.

### Back-end Deployment

We recommend Digitalocean's STRAPI Basic Droplet: 2 CPU, 2 GB RAM, 2 Terabyte traffic included (est. 2 billion API requests) for 10$ a month.
Another Terabyte comes for another cheap 10$. (est. 1 billion API requests)

From there, if you are growing bigger and bigger, your one and only task is "only" scaling your API server.

That's it. This will only become an issue again when your business is so big that you actually have the funds to solve the problem.
All the other stuff, thats usually connected with running an app or even a platform, is done.

You can focus on design and code and nothing else. (...and API server scaling...)

Cheers.

### Packaging

Many app stores, including the Microsoft Store and the Google Play Store support PWAs. To package your PWA for deployment to these app stores head back to https://pwabuilder.com/, put in your URL and hit `Build My PWA`.

## Dual Screen support

The default layout of this starter is dual screen friendly. We do this [here](https://github.com/pwa-builder/pwa-starter/blob/master/src/script/pages/app-home.ts#L41) by using the [CSS Spanning API](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/master/Foldables/explainer.md#proposal-css-primitives-for-building-dual-screen-layouts) to adjust the layout when the app is spanned on a dual screen device. As you start to build your PWA you can use these CSS features to ensure that your PWA looks good in all of the [dual screen postures](https://docs.microsoft.com/en-us/dual-screen/introduction#dual-screen-overview). For more info on developing PWAs for dual screen devices you can check out the [Microsoft docs here](https://docs.microsoft.com/en-us/dual-screen/cross-platform/#build-web-experiences).

## Folder Structure

```
pwa-starter
│   README.md (docs)
│   rollup.config.js (bundler config https://rollupjs.org/)
|   tsconfig.json (TypeScript config https://www.typescriptlang.org/)
|   pwabuilder-sw.js (Service Worker https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
|   package.json (https://docs.npmjs.com/creating-a-package-json-file)
|   package-lock.json (https://docs.npmjs.com/files/package-lock.json)
|   manifest.json (web manifest https://developer.mozilla.org/en-US/docs/Web/Manifest)
|   index.prod.html (index.html file used for production builds)
|   index.html (index.html for dev builds)
|   *note*: The index.prod.html registers a service worker which caches assets, so index.html is used for dev builds
|   .gitignore (git config file https://git-scm.com/docs/gitignore)
│
└───src (most of your development will happen here)
│   │   global.css (used for global CSS styles and CSS variables)
│   │ 
|   └─────components
|           |   MainScreen.jsx (component)
|           |   Menu.jsx (component)
|           |
|           |
|           └───pages
|                 |   app.jsx (app component)
|                 |   index.css (Stylesheets)
|                 |   index.jsx (index component)

```
