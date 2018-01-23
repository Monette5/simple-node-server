# Simple Node HTTP server

## About
This is a simple Node HTTP server which processes GET requests for some fictional data. The database is mocked in JSON file `users.json` and this is the only database used by the server. The data stored in `users.json` file is fully fictional. The entry file for the project is `server.js`.

## Installation
```bash
npm install
```

## Running
We recommend running the server using the **latest LTS version** of Node (8.9.4) as the source code contains syntax structures specific for ECMAScript 6 which are incompatible with early Node versions.

```bash
npm start
```

The server runs on port `4080` by default. You can specify different port by setting `PORT` environment variable:

```bash
PORT=8000 npm start
```
