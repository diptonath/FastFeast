import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended";
import { fixupConfigRules } from "@eslint/compat";

export default {
  globals: globals.browser,
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      rules: pluginJs.configs.recommended.rules,
    },
    {
      files: ["*.jsx"],
      rules: fixupConfigRules(pluginReactConfig.rules),
    },
  ],
};
