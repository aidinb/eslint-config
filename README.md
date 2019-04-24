## Install

```
$ npm install --save-dev git+ssh://git@bitbucket.org/MIDP1/eslint-config-woshapp-linter.git
```


## Usage

### Base
Add an ESLint config to your `.eslintrc.js`:

```javascript
{
	"extends": "woshapp-linter"
}
```

The base rules uses the following dependencies:
```json
{
	"peerDependencies": {
        "babel-eslint": "^10.0.1",
        "eslint": "^5.16.0"
    },
}
```

### React
This package also exposes [`woshapp-linter/react`](react.js) if you want React rules:

```javascript
{
	"extends": "woshapp-linter/react"
}
```

The React rules extends the base rules and requires the following dependencies:

```json
{
	"peerDependencies": {
        "eslint-plugin-react": "^7.12.4"
    },
}
```
