module.exports = {
  bracketSpacing: false,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  overrides: [
    {
      files: ['*.json', '**/*.json'],
      options: {
        parser: 'json',
        trailingComma: 'none',
        singleQuote: false,
      },
    },
  ],
};
