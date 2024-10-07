// noinspection JSCheckFunctionSignatures

import globals from "globals";
import stylistic from "@stylistic/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import eslint from "@eslint/js";
import preferArrow from "eslint-plugin-prefer-arrow";

export default tseslint.config(
    eslint.configs.recommended,
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat["jsx-runtime"],
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        ignores: ["**/dist/**"],
    },
    {
        files: ["**/*.js"],
        ...tseslint.configs.disableTypeChecked
    },
    {
        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.browser,
                ...globals.serviceworker,
            },
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            "@stylistic": stylistic,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            "prefer-arrow": preferArrow
        },
        settings: {
            "react": {
                "version": "detect"
            }
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
            "@stylistic/quotes": ["error", "double"],
            "@stylistic/semi": ["error", "always"],
            "@stylistic/no-extra-semi": ["error"],
            "@stylistic/indent": ["error", 4],
            "@stylistic/no-trailing-spaces": ["error"],
            "@stylistic/eol-last": ["error", "always"],
            "@stylistic/max-len": ["error", 120],
            "eqeqeq": ["error", "smart"],
            "@typescript-eslint/no-misused-promises": [
                "error",
                {
                    checksVoidReturn: false,
                },
            ],
            "arrow-body-style": ["error", "as-needed"],
            "func-style": ["error", "expression"],
            "prefer-arrow/prefer-arrow-functions": [
                "error",
                {
                    "disallowPrototype": true,
                    "singleReturnOnly": true,
                    "classPropertiesAllowed": false,
                    "allowStandaloneDeclarations": false
                }
            ]
        },
    },
);
