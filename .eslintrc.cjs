/**
 * @type {import("eslint").ESLint.ConfigData}
 */
const config = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier"
  ]
};

// eslint-disable-next-line no-undef
module.exports = config;
