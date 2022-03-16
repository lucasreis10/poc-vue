module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js', // No need to cover bootstrap file
  ],
  coverageThreshold: {
    global: {
      lines: 30,
    },
  },
  setupFiles: ['./tests/unit/setup.js'],
};
