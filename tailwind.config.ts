import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "tablet-min": "769px",
        "mobile-min": "500px",
      },
      fontSize: {
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        26: "26px",
        28: "28px",
        30: "30px",
        32: "32px",
      },
      fontFamily: {
        barlowcondensed: "Barlow Condensed",
        barlowsemi: "Barlow Semi Condensed",
        mono: "Mono-Rgo Modular",
        sora: "Sora",
        figtree: "Figtree",
      },
      letterSpacing: {
        text: "-0.384px",
      },
      colors: {
        white: {
          DEFAULT: "#ffffff",
        },
        black: {
          DEFAULT: "#000000",
        },
        blue: {
          DEFAULT: "#0344DC",
        },
      },
      spacing: {
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        24: "24px",
        32: "32px",
        40: "40px",
        48: "48px",
        56: "56px",
        64: "64px",
        72: "72px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "header-bar": "0px 1px 0px 0px #262A31",
        "gamelist-tab": "0px 1px 0px 0px #262A31",
        "collapsed-content-payment":
          "0px 4px 4px 0px rgba(0, 0, 0, 0.16) inset",
        "check-order-form": "0px 4px 12px rgba(0, 0, 0, 0.12)",
        "flash-sale": "0px 4px 4px 0px rgba(0, 0, 0, 0.08)",
        "copy-clipboard-notif": "0px -4px 12px 0px rgba(0, 0, 0, 0.16)",
        "payment-code": "0px 4px 12px rgba(0, 0, 0, 0.12)",
      },
      dropShadow: {
        "scroll-icon": "0px -1px 4px 0px #F6AC375C",
      },
      textShadow: {
        "flashsale-thumb": "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      animation: {
        fold: "fold 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1 normal forwards",
        unfold:
          "unfold 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1 normal forwards",
      },
      keyframes: {
        fold: {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(-180deg)" },
        },
        unfold: {
          "0%": { transform: "rotateX(180deg)" },
          "100%": { transform: "rotateX(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
