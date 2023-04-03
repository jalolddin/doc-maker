# admin-panel

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

        // "eslint": "^7.32.0",
        // "eslint-config-prettier": "^8.3.0",
        // "eslint-plugin-prettier": "^4.0.0",
        // "eslint-plugin-vue": "^8.0.3",
        // "prettier": "^2.4.1",
               <!-- "plugin:prettier/recommended"
                   "browserslist": [
        "> 1%",
        "last 2 versions",
        "not dead",
        "not ie 11"
    ], -->


      "@typescript-eslint/eslint-plugin": "^5.4.0",
        "@typescript-eslint/parser": "^5.4.0",
        "@vue/eslint-config-typescript": "^9.1.0",
        "@vue/cli-plugin-eslint": "~5.0.8",
        

            "eslintConfig": {
        "root": true,
        "env": {
            "node": true
        },
        "extends": [
            "plugin:vue/vue3-essential",
            "eslint:recommended",
            "@vue/typescript/recommended"
        ],
        "parserOptions": {
            "ecmaVersion": 2020
        },
        "rules": {}
    },