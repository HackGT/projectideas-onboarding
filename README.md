# 2021 HackGT Onboardnig

Welcome to the HackGT 2021 onboarding project. This will serve as an introduction to TypeScript/JavaScript, Node.js, MongoDB, and React. You'll be making a Project Ideas dashboard!

Please follow the installation instructions in order, since later tools may depend on installing previous tools first.

## Installation

### Node.js and npm

You can download Node.js [here](https://nodejs.org/en/). Select the button saying "Recommended For Most Users".

npm stands for Node Package Manager, though it's name is confusing since it can also be used on the frontend. npm is automatically distributed with Node.js.
 
To check that you have Node and npm installed, run these commands in your terminal.
- `node -v`
- `npm -v`

If these commands return a number like `v12.18.1` you're good to go.

### yarn

To install Yarn, go [here](https://classic.yarnpkg.com/en/docs/install). After installing, test that it's installed by running `yarn --version`.

### Homebrew

If you're on macOS or Linux, you should also install Homebrew. It's essentially a package manager for your computer (you'll need it to install tools like MongoDB).

[Here](https://brew.sh/) are the installation instructions. Test that its installed by typing in `brew --version`

### MongoDB

[Here](https://docs.mongodb.com/manual/administration/install-community/) are the installation instructions for MongoDB Community Edition. Check that it's installed by running `mongo --version`.

### VSCode

The easiest code editor to get started with is VSCode. Please don't use Sublime :). You can download it [here](https://code.visualstudio.com/download).

## Setup

The code for this project is split up between the `client` and `server` folders (ie frontend and backend). Before reading below, please open up Terminal (on Mac) or Command Prompt (on Windows) and navigate to this folder. If you've never used the command line before, look at this quick [cheat sheet](https://enexdi.sciencesconf.org/data/pages/windows_vs_mac_commands_1.pdf).

**Important** In total, you will need 3 different terminal windows/tabs to run all the code. One to run the MongoDB database, one to run the backend, and one to run the frontend.

### Backend - Getting Started
1. In the terminal window, type `mongo` to start the MongoDB database. This creates a local database instance on your computer.

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
