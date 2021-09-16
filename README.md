## Install

```
npm install --save-dev eslint-config-woshapp @babel/core @babel/eslint-parser eslint eslint-plugin-react
```


## Usage

### Base
Add an ESLint config to your `.eslintrc.js`:

```javascript
{
    "extends": "woshapp"
}
```

### React
This package also exposes [`woshapp/react`](react.js) if you want React rules:

```javascript
{
    "extends": "woshapp/react"
}
```