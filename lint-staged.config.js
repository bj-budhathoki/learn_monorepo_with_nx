module.exports = {
  '{apps,libs,tools}/**/*.{ts,tsx}': (files) => {
    return `nx affected --target=typecheck --files=${files.join(',')}`
  },
  '{apps,libs,tools}/**/*.{js,ts,jsx,tsx,json,css}': [
    (files) => `nx affected:lint --uncommitted --files=${files.join(',')}`,
    (files) => `nx format:write  --uncommitted --files=${files.join(',')}`,
    (files) =>
      `nx validate-branch-name  --uncommitted --files=${files.join(',')}`,
  ],
}
