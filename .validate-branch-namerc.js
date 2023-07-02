module.exports = {
  'validate-branch-name': {
    pattern: '^(master|main|develop){1}$|^(feature|release|hotfix)/(JIRA-d+)',
    errorMsg: 'your own error message',
  },
}
