# Node.js Unhandled Exception Bug

This repository demonstrates a common error in Node.js applications: unhandled exceptions. The `bug.js` file contains a simple HTTP server that crashes when a specific URL is accessed due to a missing `try...catch` block. The `bugSolution.js` file provides a corrected version with proper error handling.

## Bug Description

The server throws an unhandled exception when the `/error` route is requested. This causes the server to crash without any graceful handling, impacting users and making debugging more difficult.

## Solution

The solution involves using a `try...catch` block to handle the unexpected error. This ensures that the server doesn't crash and can continue operating, or at least provide a more informative error response to the client.