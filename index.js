module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-scss",
  ],
  "rules": {
    "at-rule-no-vendor-prefix": true,
    "color-named": "never",
    "declaration-block-no-duplicate-properties": true,
    "declaration-no-important": true,
    "function-parentheses-space-inside": "never",
    "function-url-quotes": "always",
    "max-nesting-depth": 4,
    "media-feature-name-no-vendor-prefix": true,
    "number-leading-zero": "never",
    "number-zero-length-no-unit": true,
    "property-no-vendor-prefix": true,
    "selector-no-id": true,
    "selector-no-qualifying-type": true,
    "selector-no-vendor-prefix": true,
    "string-quotes": "double",
    "value-no-vendor-prefix": true,
  },
}
