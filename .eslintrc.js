 module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"

    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "react-hooks",
        "prettier",
        "import",
    ],
    "rules": {
        "prettier/prettier": "error",
        "react/require-default-props": 0,
        "react/jsx-one-expression-per-line": 0,
        "arrow-body-style": 0,
        "import/no-unresolved":  "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
        "import/prefer-default-export": "off",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
            "ts": "never",
            "tsx": "never"
            }
        ]
        
    },
    "settings": {
        "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
          "typescript": {
            "directory": "./tsconfig.json",
          },
          "node": {
            "extensions": [".js", ".jsx", ".ts", ".tsx"]
          }
        }
      }
}
