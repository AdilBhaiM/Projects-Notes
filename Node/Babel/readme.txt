This script is for production and the existing one is for development.

"scripts": {
    "build": "babel index.js --out-dir prd",
    "start": "npm run build && nodemon index.js",
    "serve": "node prd/index.js"
  },


For development:

"scripts": {
  "start": "babel index.js -w -out-dir prd",
  "dev-serve": "nodemon prd/index.js"
},