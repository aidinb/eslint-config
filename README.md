## Install

Node project:
```
npm install --save-dev eslint-config-woshapp @babel/core @babel/eslint-parser eslint eslint-plugin-promise eslint-plugin-unicorn
```

React project:
```
npm install --save-dev eslint-config-woshapp @babel/core @babel/eslint-parser eslint eslint-plugin-react eslint-plugin-import eslint-plugin-decorator-position eslint-plugin-promise eslint-plugin-unicorn
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
This package also exposes [`woshapp/react`](react.js) for React rules:

```javascript
{
    "extends": "woshapp/react"
}
```