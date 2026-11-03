import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextVitals,
  ...nextTypescript,
  {
    ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts"],
    rules: {
      // Static exports use full-page links so route changes don't request RSC endpoints.
      "@next/next/no-html-link-for-pages": "off",
    },
  },
];

export default eslintConfig;
