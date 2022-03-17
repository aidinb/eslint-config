## Node rules

### Install
```
npm install --save-dev eslint-config-woshapp eslint@7.32.0 eslint-plugin-n eslint-plugin-promise eslint-plugin-unicorn@40.1.0
```

### Usage
Add the following to `.eslintrc.js`:

```javascript
{
    "extends": "woshapp/node"
}
```

## React rules

### Install
```
npm install --save-dev eslint-config-woshapp @babel/core @babel/eslint-parser eslint@7.32.0 eslint-plugin-react eslint-plugin-import eslint-plugin-decorator-position eslint-plugin-promise eslint-plugin-unicorn@40.1.0
```

### Usage
Add the following to `.eslintrc.js`:
```javascript
{
    "extends": "woshapp/react"
}
```