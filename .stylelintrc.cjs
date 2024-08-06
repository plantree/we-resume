module.exports = {
    "extends": "stylelint-config-standard",
    "rules": {
        "at-rule-no-unknown": [
            true,
            {
                "ignoreAtRules": [
                    "tailwind",
                    "tailwindcss",
                    "apply",
                    "variants",
                    "responsive",
                    "screen"
                ]
            }
        ]
    }
}