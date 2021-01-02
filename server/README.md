# Backend

Welcome to the backend setup! Here we'll talk about the different technologies we use on the backend, and what their role is. Feel free to skip over some parts if you know them, as we'll start pretty basic. However, please follow the section at the end titled **Installation** to get everything downloaded before the workshop.

## HTTP
The web today runs on a protocol called HTTP (Hypertext Transfer Protocol). This protocol governs how data is transported across the web, and includes many standard that help explain the meaning of its data.

Most of the internet today is governed by the **client-server model**.

![Image](https://study-ccna.com/wp-content/images/http_process_explained.jpg)

- **Clients** send requests using HTTP to the backend server
- **Servers** perform services based on the clients needs and respond with HTTP

### HTTP Request

![Image](https://www.lifewire.com/thmb/nmUWZwQj44TqI0AR0bnlhDnQfOs=/950x320/filters:no_upscale():max_bytes(150000):strip_icc()/HTTP_RequestMessageExample-5c82b349c9e77c0001a67620.png)

Each HTTP request has these parts:

- **Method** - Specifies the type of request
    - **GET** retrieve information
    - **POST** submit data to server
    - **PUT** save data at a location
    - **DELETE** delete object at a location
- **Path** - Specifies the domain of the request
- **Version** - Tells the server which version of HTTP is being used
- **Headers** - List many different types of metadata as needed
- **Body** - Sends the actual information of the request

### HTTP Response

HTTP responses are similar except that they also contain status codes.
- **Status Code** - A number designating the status of the request
    - **200 OK** - Success
    - **400 Bad Request** - The client sent an invalid request
    - **403 Forbidden** - The client is forbidden from making this request
    - **404 Not Found** - The server couldn't find what the client was looking for
    - **500 Internal Server Error** - Something went wrong with the server

## Node.js

Node.js is a backend JavaScript runtime environment. JavaScript was originally written to run in the browser, but with Node.js, you can run servers, connect with databases, etc. On the browser, you just use a `<script>` tag to execute JavaScript code, but on the server, you must create a JavaScript file to execute Node.

### npm

Before we jump into installing Node, let's cover what npm is. npm stands for **Node Package Manager** and is probably the tool you will most interact with.

> npm is essentially two things:
> - First and foremost, it is an online repository for the publishing of open-source Node.js projects
> - Second, it is a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management.

For example, say you working on a project that is using Google Cloud Storage. In order to work with these tools, you would type in `npm install @google-cloud/storage` on the command line, and your computer would download the Google Cloud Storage library into your project. Now, you can have access to all the tools you need.

### Yarn

Yarn is another Node package manager. It performs pretty much the same functionality as npm, like installing and managing packages, but in our experience, it's more efficient and simpler to use. Most of the newer projects at HackGT use Yarn, but some older ones still use npm, so it's good to have both installed.

## Installation

npm is automatically distributed with Node.js.

You can download Node.js [here](https://nodejs.org/en/). Select the button saying "Recommended For Most Users".
 
To check that you have Node and npm installed, run these commands in your terminal.
- `node -v`
- `npm -v`

If these commands return a number like `v12.18.1` you're good to go.

To install Yarn, go [here](https://classic.yarnpkg.com/en/docs/install). After installing, test that it's installed by running `yarn --version`.

After you have read over this document and have everything installed, you're good to go for the backend workshop!
