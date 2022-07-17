## Node rules

### Install
```
npm install --save-dev eslint-config-woshapp eslint eslint-plugin-n eslint-plugin-promise eslint-plugin-unicorn typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
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
npm install --save-dev eslint-config-woshapp eslint eslint-plugin-react eslint-plugin-import eslint-plugin-promise eslint-plugin-unicorn eslint-plugin-decorator-position typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### Usage
Add the following to `.eslintrc.js`:
```javascript
{
    "extends": "woshapp/react"
}
```