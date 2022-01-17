# HackGT Tech Onboardnig

Welcome to the HackGT tech onboarding project. This will serve as an introduction to TypeScript/JavaScript, Node.js, MongoDB, and React. You'll be making a Project Ideas dashboard!

This README has the following sections:

- [Installation](#Installation)
- [Learning Links](#Learning-Links)
- [Setup](#Setup)

Please follow the installation instructions in order, since later tools may depend on installing previous tools first.

## Installation

### Homebrew

If you're on macOS or Linux, you should first install Homebrew. It's essentially a package manager for your computer (you'll need it to install tools like MongoDB).

[Here](https://brew.sh/) are the installation instructions. Test that its installed by typing in `brew --version`

### Node.js and npm

You can download Node.js [here](https://nodejs.org/en/). Select the button saying "Recommended For Most Users".

npm stands for Node Package Manager, though it's name is confusing since it can also be used on the frontend. npm is automatically distributed with Node.js.

To check that you have Node and npm installed, run these commands in your terminal.

- `node -v`
- `npm -v`

If these commands return a number like `v12.18.1` you're good to go.

### yarn

To install Yarn, go [here](https://classic.yarnpkg.com/en/docs/install). After installing, test that it's installed by running `yarn --version`.

### MongoDB

[Here](https://docs.mongodb.com/manual/administration/install-community/) are the installation instructions for MongoDB Community Edition. Check that it's installed by running `mongo --version`.

### MongoDB Compass

MongoDB Compass is a GUI for your database that allows you to easily interact with it and view data. Download it [here](https://www.mongodb.com/try/download/compass)

### VSCode

The easiest code editor to get started with is VSCode. Please don't use Sublime :). You can download it [here](https://code.visualstudio.com/download).

### Postman

Postman is an app that allows you to test your backend code by sending different types of requests. You can download it [here](https://www.postman.com/downloads/).

## Learning Links

On most coding projects, you'll likely be using a wide number of tools, frameworks, and languages, and you'll constantly be learning new ones as projects rise and fall in popularity. As such, here are some cool resources to help you learn the tools we use at HackGT.

### JavaScript and TypeScript

- Modern JavaScript Tutorial [https://javascript.info/](https://javascript.info/)
- JavaScript tutorial [https://www.tutorialrepublic.com/javascript-tutorial/](https://www.tutorialrepublic.com/javascript-tutorial/)
- TypeScript for new programmers [https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)

### React

- Amazing slides made my Tim Aveni, HackGT alum [https://tja.io/hackgt5/slides/](https://tja.io/hackgt5/slides/)
- A great getting started guide with React [https://www.taniarascia.com/getting-started-with-react/](https://www.taniarascia.com/getting-started-with-react/)
- Honestly, the official React docs are great themselves [https://reactjs.org/docs/hello-world.html](https://reactjs.org/docs/hello-world.html)

### Node.js and Express.js

- Node.js/Express overview [https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)
- In depth Node.js [https://nodejs.dev/learn](https://nodejs.dev/learn)
- Official Express getting started [https://expressjs.com/en/starter/hello-world.html](https://expressjs.com/en/starter/hello-world.html)

### MongoDB and Mongoose

- MongoDB tutorial [https://www.freecodecamp.org/news/learn-mongodb-a4ce205e7739/](https://www.freecodecamp.org/news/learn-mongodb-a4ce205e7739/)
- Mongoose introduction [https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/](https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/)

## Setup

### Git

When developing this onboarding project, please make a new branch with your first name, and use that branch for development. For example, make a branch with `git branch rahul`, and check it out with `git checkout rahul`. As you make commits, you can push to the repo with `git push`.

**Important** Please do not push any commits on the main branch, only push commits on your specific branch!

### Overview

The code for this project is split up between the `client` and `server` folders (ie frontend and backend). Before reading below, please open up Terminal (on Mac) or Command Prompt (on Windows) and navigate to this folder. If you've never used the command line before, look at this quick [cheat sheet](https://enexdi.sciencesconf.org/data/pages/windows_vs_mac_commands_1.pdf).

**Important** In total, you will need 3 different terminal windows/tabs to run all the code. One to run the MongoDB database, one to run the backend, and one to run the frontend.

### Database - Getting Started

If you're on Windows, follow this step to start your MongoDB server.

1. In the terminal window, type `mongo` to start the MongoDB database. This creates a local database instance on your computer.

If you're on Mac, you can get it started with brew services.

1. Visit the docs [here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#installing-mongodb-5.0-edition-edition)

### Backend - Getting Started

Before getting started, make sure to get the environment variables from your tech director and place them in a file called `.env` in the `/server` folder. Otherwise, you won't be able to run your code!

In a different terminal window/tab, complete the following steps.

1. `cd server` (Navigate to server folder)
2. `yarn install` (Install dependencies from package manager)
3. `yarn dev` (Start backend dev server)

Navigate to [localhost:3000](localhost:3000) to see the backend server.

### Frontend - Getting Started

**Important** Please start your backend server before starting your frontend one, as the code uses a proxy to send your requests between the client and server.

1. `cd client` (Navigate to client folder)
2. `yarn install` (Install dependencies from package manager)
3. `yarn start` (Start frontend dev server)
4. When the prompt says `Something is already running on port 3000` etc, type y to continue

Navigate to [localhost:3001](localhost:3001) to see the frontend server.
