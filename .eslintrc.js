module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "airbnb-base",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "linebreak-style": ["error", (process.platform === "win32" ? "windows" : "unix")],
        "no-console":"off",
        "import/extensions":"off",
        "no-underscore-dangle":"off",
        "no-param-reassign": ["error", { "props": false }],
        "no-restricted-syntax": "off",
        "no-continue": "off",
    }
}
