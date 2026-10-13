import foundationPreset from "@laptopclub/foundation-config/tailwind/preset";
import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./node_modules/@laptopclub/foundation-ui/dist/**/*.{js,mjs}"
  ],
  presets: [foundationPreset],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-atkinson-hyperlegible-mono)", "ui-monospace", "monospace"]
      }
    }
  }
} satisfies Config;

export default config;
