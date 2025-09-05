#!/bin/bash

# Set Playwright browser path to node_modules
export PLAYWRIGHT_BROWSERS_PATH="$PWD/node_modules/.pnpm/playwright-core@1.55.0/node_modules/playwright-core/.local-browsers"

# Run Playwright tests
pnpm test:e2e "$@"
