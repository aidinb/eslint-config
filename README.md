## Install

```
$ npm install --save-dev eslint-config-woshapp
```


## Usage

### Base
Add an ESLint config to your `.eslintrc.js`:

```javascript
{
    "extends": "woshapp"
}
```

The base rules use the following dependencies:
```json
{
    "peerDependencies": {
        "babel-eslint": "^10.0.1",
        "eslint": "^5.16.0"
    },
}
```

### React
This package also exposes [`woshapp/react`](react.js) if you want React rules:

```javascript
{
    "extends": "woshapp/react"
}
```

The React rules extend the base rules and require the following dependencies:

```json
{
    "peerDependencies": {
        "eslint-plugin-react": "^7.12.4"
    },
}
```
