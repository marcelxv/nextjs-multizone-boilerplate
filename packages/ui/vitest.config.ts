import { uiConfig } from "@workspace/vitest-config/ui";

export default {
  ...uiConfig,
  test: {
    ...uiConfig.test,
    setupFiles: ["./vitest.setup.ts"],
    globals: true,
  },
};
