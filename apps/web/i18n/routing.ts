import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "de", "mr"],
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: true,
  pathnames: {
    "/": "/",
    "/pathnames": {
      de: "/pfadnamen",
    },
  },
});
