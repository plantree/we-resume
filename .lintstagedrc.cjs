module.exports = {
    '*.{js,jsx,ts,tsx}': [
        'eslint --report-unused-disable-directives --max-warnings 0',
        'prettier --write'
    ]
};