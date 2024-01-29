# Backend

old things

    "start": "cross-env npm run build && medusa start",

medusa-config.js

    inside projectConfig line 80

Hosting Backend and admin seperately , else requires 2gb ram. cyclic have 1, render have 512 mb


cross env not found 
soln added npx keyword in package.json


changing clean scripts

 "clean": "npx cross-env ./node_modules/.bin/rimraf dist",
    "build": "npx cross-env npm run clean && npm run build:server && npm run build:admin",
    "build:server": "npx cross-env npm run clean && tsc -p tsconfig.server.json",
    "build:admin": "npx cross-env medusa-admin build",

    old scripts above

    