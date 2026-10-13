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
      colors: {
        accent: {
          DEFAULT: "var(--accent)",
          contrast: "var(--accent-contrast)"
        },
        ink: {
          DEFAULT: "var(--text)",
          muted: "var(--text-muted)"
        },
        surface: {
          base: "var(--base)",
          raised: "var(--base-2)"
        },
        ui: {
          DEFAULT: "var(--ui)",
          strong: "var(--ui-3)"
        }
      },
      fontFamily: {
        mono: ["var(--font-atkinson-hyperlegible-mono)", "ui-monospace", "monospace"]
      }
    }
  }
} satisfies Config;

export default config;
