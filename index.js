'use strict';

/**
 * index.js — Server entry point.
 *
 * A minimal Express.js application that exposes two plaintext HTTP GET
 * endpoints:
 *
 *   GET /              -> "Hello world"   (baseline tutorial endpoint)
 *   GET /good-evening  -> "Good evening"  (newly added endpoint)
 *
 * Design notes:
 * - Module system is CommonJS (`require`), matching `"type": "commonjs"` in
 *   package.json.
 * - Express provides the HTTP routing layer. Each route is registered with the
 *   conventional `app.METHOD(path, handler)` pattern and replies with a
 *   plaintext body via `res.send(...)`.
 * - The listening port is resolved from `process.env.PORT`, defaulting to 3000
 *   so the server is runnable out of the box while remaining configurable.
 * - Any path that is not explicitly registered falls through to Express's
 *   built-in 404 handler ("Cannot GET …"), which is the intended behavior.
 */

// Import the Express web framework (the sole runtime dependency).
const express = require('express');

// Instantiate the Express application that owns the route table and listener.
const app = express();

/*
 * Enforce an exact-path routing contract.
 *
 * By default Express matches routes case-insensitively and ignores a trailing
 * slash, which would let "/good-evening/", "/Good-evening", and "/GOOD-EVENING"
 * all resolve to the "/good-evening" handler. This service's HTTP contract,
 * however, exposes only the exact paths "/" and "/good-evening"; every other
 * path — including case and trailing-slash variants — must fall through to
 * Express's built-in 404 ("Cannot GET …"). These settings must be applied
 * before any route is registered, because the router reads them at route
 * registration time:
 *   - 'case sensitive routing': "/Good-evening" no longer matches "/good-evening".
 *   - 'strict routing':         "/good-evening/" no longer matches "/good-evening".
 * The root route "/" is unaffected, because a request to the server root always
 * carries the pathname "/".
 */
app.set('case sensitive routing', true);
app.set('strict routing', true);

// Resolve the listening port from the environment, defaulting to 3000.
const PORT = process.env.PORT || 3000;

/**
 * Baseline endpoint (preserved from the original tutorial).
 * Responds to `GET /` with the plaintext body "Hello world".
 */
app.get('/', (req, res) => res.send('Hello world'));

/**
 * New endpoint.
 * Responds to `GET /good-evening` with the plaintext body "Good evening".
 */
app.get('/good-evening', (req, res) => res.send('Good evening'));

// Start the HTTP listener and log a confirmation once the server is ready.
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
