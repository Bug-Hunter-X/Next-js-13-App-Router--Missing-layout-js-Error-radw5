# Next.js 13 App Router: Missing layout.js

This repository demonstrates a common error encountered when migrating to the Next.js 13 App Router: forgetting to include a `layout.js` file in your `pages` directory when using a nested routing structure.

## The Problem

In Next.js 13's App Router, the `layout.js` file is required to properly render pages within a nested structure.  Without it, Next.js will throw an error.

The `about.js` file attempts to render without a layout file, causing the error.

## The Solution

Adding a `layout.js` file (in the `pages` directory) to the folder that contains the `about.js` file solves the issue.

This provides the necessary structure for Next.js to correctly render the page.