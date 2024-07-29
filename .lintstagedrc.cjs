module.exports = {
    '*.{s,jsx,ts,tsx,json,css,scss,md}': [
        'eslint --report-unused-disable-directives --max-warnings 0',
        'prettier --write \"src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\ && stylelint './**/*.{css,scss,less}' --fix"'
    ]
};