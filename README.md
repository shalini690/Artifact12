# Artifact12

A minimal Node.js + Express.js tutorial server that exposes two plaintext HTTP
endpoints: a `Hello world` root endpoint and a `Good evening` endpoint.

## Prerequisites

- **Node.js >= 18** (required by Express 5).
- **npm** as the package manager (bundled with Node.js).

> Prefer a currently supported Node.js LTS release.

## Installation

Install the project dependencies:

```bash
npm install
```

This installs Express and creates the `node_modules/` directory, which is
git-ignored.

## Running

Start the server:

```bash
npm start
```

This runs `node index.js`. The server listens on port `3000` by default; set the
`PORT` environment variable to override it (for example, `PORT=8080 npm start`).
Once it is running, visit <http://localhost:3000/> to see the root endpoint.

## Endpoints

| Method | Path | Response |
|--------|------|----------|
| GET | `/` | `Hello world` |
| GET | `/good-evening` | `Good evening` |

Requests to any other path return Express's built-in 404 response
(`Cannot GET …`).
