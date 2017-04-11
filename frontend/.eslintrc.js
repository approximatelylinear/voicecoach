var path = require('path');

module.exports = {
  "extends": "eslint-config-airbnb",
  "parser": "babel-eslint",
  "ecmaFeatures": {
    "classes": true,
    "jsx": true
  },
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "webpack.config.dev.js"
      }
    }
  },
  "rules": {
    "camelcase": [0, "never"],
    "semi": [2, "never"],
    "comma-dangle": ["warn", "never"],
    "import/prefer-default-export": [0, "never"],
    "func-names": 0,
    "eol-last": 0,
    "react/forbid-prop-types": [0, "never"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-no-bind": [ 2, {
      "ignoreRefs": false,
      "allowArrowFunctions": true,
      "allowBind": true
    }],
  },
  "plugins": [
    "react",
    "jsx-a11y"
  ]
}
