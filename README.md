# PWA-SPA-login-blank_screen-menu-Starter-Kit (React and Material UI)


## Full insight into the realm of PWA
Progressive Web Apps - PWA Roadshow: https://youtu.be/z2JgN6Ae-Bo



## Welcome to the HARDFORK of PWA Builder
(modified to be able to use React and Material UI, dropping the original lit and FAST libraries)

PWA Builder is an awesome project of a handful Microsoft developers providing a great entree for building a PWA.

You can check anytime how many PWA Points your actual app/page has on (https://www.pwabuilder.com/)
(this template has 87 Points, Google Map's PWA has 83) *evillaughing*

PWABuilder.com is an awesome page providing all resources, for drag and drop & copy and paste a manifest or service worker scripts and many well explained snippets for additional native app like features.



 PWA-SPA-login-blank_screen-menu-Starter-Kit!
 
 Looking to build a new [Progressive Web App](https://web.dev/progressive-web-apps/) and not sure where to get started?
 This is what you are looking for! The PWA-SPA-Map-and-Menu-Starter-Kit includes everything you need to start building a production ready PWA and follows all best practices.
 
 
 
 ## You will get:

- lazy-loaded routes using [@vaadin/router](https://vaadin.com/router).
- A 100 on [Lighthouse](https://developers.google.com/web/tools/lighthouse/), giving you a great starting point for performance and accessibility.
- Includes the [PWABuilder pwa-install component](https://github.com/pwa-builder/pwa-install#pwa-install) for an app store like PWA install experience.
- [Workbox](https://developers.google.com/web/tools/workbox/) for service workers along with the [PWABuilder pwa-update component](https://github.com/pwa-builder/pwa-update#pwa-update) to give your PWA a great offline experience.
- Includes [PWABuilder pwa-auth](https://github.com/pwa-builder/pwa-auth) web component. This component lets your users sign-in/sign-up using their Google, Apple, or Facebook account. Your app receives their email address, name, and profile picture.
- Includes a blank mainscreen and a blank menu with an open/close animation.

Everything's ready to your demand...

**[Live Demo](https://pwa-starter-demo.glitch.me/)** (it's the same package with the same 87 points on pwa-builder.com, but we dropped the pwa-starter example page from our package and made it React + Material UI compatible)



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



### Deployment


Once your PWA is ready to deploy you can deploy/host it anywhere.

We recommend Cloudflare.com (0€ Basic plan, unlimited pages, unlimited bandwidth and 500 deploys a month)
Your static, but API refreshed app, will be deployed to 200 servers worldwide, loading your app in an average of 1.8 sec in every corner around the globe.
From Metropole to jungle village...

Your API is the only bottleneck, but thats awesome, since we've eliminated everything else, with dropping our app to Cloudflare.
Without Cloudflare, you would have to pay server traffic every time a user visits your app and had to pay after reaching the limits.

Later, the PWA even saves Cloudflare some traffic, but we are able to catch spikes in traffic with ease.

We recommend Digitalocean STRAPI Basic Droplet: 2 Cpu, 2 GB Ram, 2 Terabyte Traffic included (thats 2 billion API requests) for 10$ a month.
Another Terabyte comes for another cheap 10$.

From there, you growing bigger and bigger, your one and only task is "only" scaling your API. Thats it.
All the other stuff, thats usually connected with running an app or even a platform, is done.

You can focus on design and code and nothing else. (...and API scaling...)

Cheers.


### Packaging

Many app stores, including the Microsoft Store and the Google Play Store support PWAs. To package your PWA for deployment to these app stores head back to https://pwabuilder.com/, put in your URL and hit `Build My PWA`.


## Dual Screen support

The default layout of this starter is dual screen friendly. We do this [here](https://github.com/pwa-builder/pwa-starter/blob/master/src/script/pages/app-home.ts#L41) by using the [CSS Spanning API](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/master/Foldables/explainer.md#proposal-css-primitives-for-building-dual-screen-layouts) to adjust the layout when the app is spanned on a dual screen device. As you start to build your PWA you can use these CSS features to ensure that your PWA looks good in all of the [dual screen postures](https://docs.microsoft.com/en-us/dual-screen/introduction#dual-screen-overview). For more info on developing PWAs for dual screen devices you can check out the [Microsoft docs here](https://docs.microsoft.com/en-us/dual-screen/cross-platform/#build-web-experiences).



## Addons


### Authentication

For Authentication you can use the [PWABuilder pwa-auth](https://github.com/pwa-builder/pwa-auth) web component. This component lets your users sign-in/sign-up using their Google, Apple, or Facebook account. Your app receives their email address, name, and profile picture. Built with ❤ by the PWABuilder team.

😎 Bonus: It's super lightweight, pulling in the authentication libraries only when the user tries to sign-in with one.

😎😎 Double bonus: It uses the new [Credential Management APIs](https://developers.google.com/web/fundamentals/security/credential-management) to speed through sign-ins without bulky pop-ups or redirects.



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
