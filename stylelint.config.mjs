/** @type {import("stylelint").Config} */
const config = {
  rules: {
    "at-rule-no-unknown": [true, { ignoreAtRules: ["theme", "custom-variant"] }],
  },
};

export default config;
