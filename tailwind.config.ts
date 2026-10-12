import foundationPreset from "@laptopclub/foundation-config/tailwind/preset";
import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./node_modules/@laptopclub/foundation-ui/dist/**/*.{js,mjs}"
  ],
  presets: [foundationPreset]
} satisfies Config;

export default config;
