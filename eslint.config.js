module.exports = {
  extends: ["expo", "plugin:import/typescript"],
  settings: {
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
      },
    },
  },
};
