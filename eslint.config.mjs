import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import pluginCypress from 'eslint-plugin-cypress';

const eslintConfig = [
  { ignores: ['.next/**', 'out/**', 'node_modules/**'] },
  ...nextCoreWebVitals,
  {
    // This app drives Tone.js — an external, mutable audio engine — and uses a
    // couple of intentional "adjust state while rendering" patterns. The newer
    // React-compiler lint rules flag those legitimate cases, so relax them here.
    rules: {
      'react-hooks/immutability': 'off',
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
  {
    ...pluginCypress.configs.recommended,
    files: ['cypress/**/*.{js,jsx}', '**/*.cy.{js,jsx}'],
    rules: {
      ...pluginCypress.configs.recommended.rules,
      // The existing e2e specs lean on Cypress command chaining intentionally.
      'cypress/unsafe-to-chain-command': 'off',
    },
  },
  { linterOptions: { reportUnusedDisableDirectives: 'off' } },
];

export default eslintConfig;
