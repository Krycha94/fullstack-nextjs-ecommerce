![Krycha Store gif](https://github.com/Krycha94/fullstack-nextjs-ecommerce/blob/main/public/krycha-store-gif.gif?raw=true)

# Krycha Store

[SEE THIS PROJECT LIVE](https://krycha-store.vercel.app/)

## Project Overview

Krycha Store is Fullstack Next.js E-Commerce website. The main use of Next.js in this project is pre-rendering, specifically Static Site Generation (SSG). Pre-rendering can result in better performance and SEO which is important in commercial websites. For backend, I used Firebase, so I don't have to worry about implementing, scaling, or maintaining the backend at all and can focus on Frontend only. The application is also tested with Jest and React Testing Library.

Search for the products you are interested in and add them to your shopping cart. To be able to make a purchase, you will need to create an account and then log in. Finally, website uses Stripe to complete the transaction.

## Technologies

In this project I used:

- [Next.js](https://nextjs.org/) React Based framework with server side rendering capability. It is very fast and SEO friendly (version: 13.4.1)
- [React](https://reactjs.org/) JavaScript library for building user interfaces (version: 18.2.0)
- [Typescript](https://www.typescriptlang.org/) Javascript superset, which add static typing to Javascript (version: 5.0.4)
- [SASS](https://sass-lang.com/) CSS with superpowers. Sass is the most mature, stable, and powerful professional grade CSS extension language in the world (version: 1.61.0)
- [Firebase](https://firebase.google.com/) Backend platform for building Web, Android and IOS applications. It offers real time database, different APIs, multiple authentication types and hosting platform (version: 9.19.1)
- [Jest](https://jestjs.io/) JavaScript Testing Framework with a focus on simplicity (version: 29.5.0)
- [React Testing Library](https://testing-library.com/) Set of helpers that let you test React components without relying on their implementation details (version: 14.0.0)
- [Stripe](https://stripe.com/) Suite of APIs powering online payment processing and commerce solutions for internet businesses of all sizes (version: 12.3.0)
- [Framer Motion](https://www.framer.com/motion/) Simple yet powerful motion library for React. It powers the amazing animations and interactions (version: 10.12.8)
- [React Icons](https://react-icons.github.io/react-icons/) Small library that helps you add icons (from all different icon libraries) to your React apps (version: 4.8.0)
- [React Hot Toast](https://react-hot-toast.com/) Add beautiful notifications to your React app (version: 2.4.1)

## Screenshots

![Krycha Store test](https://github.com/Krycha94/fullstack-nextjs-ecommerce/blob/main/public/krycha-store-test.jpg?raw=true)

## Installation

Clone repo and install all the dependencies

```
git clone https://github.com/Krycha94/fullstack-nextjs-ecommerce.git
npm install
```

Create file named

```
.env
```

Which will contain all environmental variable

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<YOUR STRIPE PUBLISHABLE KEY>
NEXT_PUBLIC_STRIPE_SECRET_KEY=<YOUR STRIPE SECRET KEY>
NEXT_PUBLIC_FIREBASE_API_KEY=<YOUR FIREBASE API KEY>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<YOUR FIREBASE AUTH DOMAIN>
NEXT_PUBLIC_FIREBASE_PROJECT_ID=<YOUR FIREBASE PROJECT ID>
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<YOUR FIREBASE STORAGE BUCKET>
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<YOUR FIREBASE MESSAGING SENDER ID>
NEXT_PUBLIC_FIREBASE_APP_ID=<YOUR FIREBASE APP ID>
```

Run app in development mode

```
npm run dev
```

Build for production then run app

```
npm run build
npm run start
```

Test app

```
npm run test
```
