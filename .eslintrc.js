module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "cypress/globals": true
    },
    "extends": "eslint:recommended",
    "plugins": [
      "cypress"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
      "cypress/no-assigning-return-values": "error",
      "cypress/no-unnecessary-waiting": "error",
      "cypress/assertion-before-screenshot": "warn",
    }
};
