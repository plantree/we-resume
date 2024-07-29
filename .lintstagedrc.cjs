module.exports = {
    '*.{js,jsx,ts,tsx,json,md}': [
        'eslint --report-unused-disable-directives --max-warnings 0',
        'prettier --write \"src/**/*.{js,jsx,ts,tsx,json,md}\"',
    ],
    '*.{css,scss}': [
        'stylelint --fix'
    ]
};