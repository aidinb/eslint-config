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
        "module": "esnext",
        "moduleResolution": "node",
        "jsx": "react-jsx",
        "allowJs": true,
        "checkJs": true,
        "noEmit": true,
        "experimentalDecorators": true,
        "useDefineForClassFields": true,
        "allowSyntheticDefaultImports": true,
        "esModuleInterop": true,
        "sourceMap": true,
        "skipLibCheck": true
    },
    "exclude": ["node_modules"]
}
```

## Node rules

### Install
```
npm install --save-dev eslint-config-woshapp eslint eslint-plugin-n eslint-plugin-promise eslint-plugin-unicorn typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-communist-spelling
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
npm install --save-dev eslint-config-woshapp eslint eslint-plugin-n eslint-plugin-promise eslint-plugin-unicorn typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-communist-spelling eslint-plugin-react eslint-plugin-decorator-position eslint-plugin-mobx eslint-plugin-react-hooks
```

### Usage
Add the following to `.eslintrc.js`:

```javascript
{
    "extends": ["woshapp/react"]
}
```


## React Native rules

### Install
```
npm install --save-dev typescript typescript-eslint eslint-plugin-import@latest eslint-plugin-unicorn@latest @typescript-eslint/eslint-plugin@latest eslint-config-woshapp @typescript-eslint/parser eslint eslint-plugin-communist-spelling eslint-plugin-decorator-position eslint-plugin-import eslint-plugin-mobx eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-native eslint-plugin-unused-imports eslint-plugin-n
```

### Usage
Add the following to `.eslintrc.js`:

```javascript
{
    "extends": ["woshapp/react-native"]
}
```
