module.exports = {
	"env": {
		"es6": true,
		"node": true,
	},
	"extends": [
		"eslint:recommended"
	],
	"rules": {
		"indent": [
			"error",
			"tab", {
				SwitchCase: 1
			}
		],
		"quotes": [
			"warn",
			"single", {
				"allowTemplateLiterals": true
			}
		],
		"no-console": [
			"error", {
				allow: ["warn", "error", "log"]
			}
		],
		"semi": [
			"warn",
			"always"
		],
		"keyword-spacing": [
			"warn"
		],
		"strict": [
			"error",
			"global"
		],
		"radix": "error",
		"prefer-template": "error",
		"no-unused-vars": "warn",
		"prefer-const": "warn",
		"no-const-assign": "error",
		"no-var": "warn",
		"no-new-object": "warn",
		"prefer-arrow-callback": [
			"warn", {
				"allowNamedFunctions": true,
				"allowUnboundThis": true
			}
		],
		"object-shorthand": [
			"warn",
			"always", {
				"avoidQuotes": true
			}
		],
		"no-array-constructor": "warn",
		"no-new-func": "warn",
		"space-before-blocks": "warn",
		"arrow-parens": ["error", "as-needed"],
		"arrow-body-style": ["error", "as-needed"],
		"no-confusing-arrow": "error",
		"no-useless-constructor": "error",
		"no-iterator": "error",
		"no-restricted-syntax": [
			"error",
			"WithStatement",
			"BinaryExpression[operator='in']"
		],
		"array-callback-return": "warn",
		"dot-notation": "warn"
	}
};