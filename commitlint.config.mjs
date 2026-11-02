// Conventional Commits, en français, portée et numéro d'issue obligatoires
// Format : <type>(<portée>): <description> (#<issue>)
export default {
  extends: ['@commitlint/config-conventional'],
  plugins: [
    {
      rules: {
        'issue-reference': ({ header }) => [
          /\(#\d+\)$/.test(header ?? ''),
          'le message doit se terminer par le numéro d\'issue, ex. (#12)',
        ],
      },
    },
  ],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'refactor', 'test', 'docs', 'style', 'chore', 'ci', 'build']],
    'scope-empty': [2, 'never'],
    'scope-case': [2, 'always', 'kebab-case'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 100],
    'issue-reference': [2, 'always'],
  },
};
