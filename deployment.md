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

    removing admin commands

    npm start command edited

    npm run build &&

    env


DATABASE_TYPE=postgres
MEDUSA_ADMIN_ONBOARDING_TYPE=default
DATABASE_URL=postgres://default:KoSBl0T1AYUu@ep-still-field-51970156.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require
ADMIN_CORS=https://medusa-ecommerce-admin-two.vercel.app
COOKIE_SECRET=fdv
NODE_ENV=production
JWT_SECRET=sdvjsdjh
NPM_CONFIG_PRODUCTION=false
