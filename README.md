## Configuration
Some type-aware lint rules in @typescript-eslint require a TSConfig to exist. The project itself does not need to use typescript.

Add the following to `.eslintrc.js`:
```javascript
{
    "parserOptions": {
        "project": "./tsconfig.json",
    },
}
```
Add e.g. the following to `tsconfig.json`:
```json
{
    "compilerOptions": {
        "target": "es6",
        "allowJs": true,
        "noEmit": true,
        "experimentalDecorators": true,
        "useDefineForClassFields": true,
    },
    "exclude": ["node_modules"]
}
```

## Node rules

### Install
```
npm install --save-dev eslint-config-woshapp eslint eslint-plugin-n eslint-plugin-promise eslint-plugin-unicorn typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### Usage
Add the following to `.eslintrc.js`:

```javascript
{
    "extends": ["woshapp/node"]
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
    "extends": ["woshapp/react"]
}
```