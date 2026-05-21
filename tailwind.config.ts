import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Azul petróleo — cor principal SRCA
        primary: {
          50: "#F0F7F9",
          100: "#DAEBEF",
          200: "#B7D7DF",
          300: "#88BCC8",
          400: "#3F8DA3",
          500: "#14657E",
          600: "#125770",
          700: "#0F4860",
          800: "#0B3D4E",
          900: "#08303E",
          950: "#051F28",
        },
        // Grafite — textos e fundos escuros
        gray: {
          50: "#F7F7F7",
          100: "#E8E8E8",
          200: "#CFCFCF",
          300: "#B0B0B0",
          400: "#8A8A8A",
          500: "#6B6B6B",
          600: "#4A4A4A",
          700: "#3A3A3A",
          800: "#2D2D2D",
          900: "#1F1F1F",
          950: "#121212",
        },
        // Dourado — acentos e CTAs
        accent: {
          50: "#FCF8EC",
          100: "#F8EFCE",
          200: "#F1DC99",
          300: "#E9C460",
          400: "#D5AB47",
          500: "#B8963E",
          600: "#9C7C32",
          700: "#7E612A",
          800: "#614A25",
          900: "#4F3D21",
          950: "#2D2010",
        },
        // Off-white / cream — backgrounds claros
        cream: {
          50: "#FDFCF8",
          100: "#FAF7F0",
          200: "#F2EBDB",
          300: "#E8DCC0",
          400: "#D9C89D",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-sm": ["clamp(2rem, 4vw, 2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2.5rem, 5vw, 3.75rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(3rem, 6vw, 4.75rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
      },
      maxWidth: {
        container: "1200px",
        prose: "72ch",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      typography: ({ theme }: { theme: (k: string) => string }) => ({
        srca: {
          css: {
            "--tw-prose-body": theme("colors.gray.700"),
            "--tw-prose-headings": theme("colors.primary.900"),
            "--tw-prose-lead": theme("colors.gray.700"),
            "--tw-prose-links": theme("colors.primary.700"),
            "--tw-prose-bold": theme("colors.gray.900"),
            "--tw-prose-counters": theme("colors.accent.600"),
            "--tw-prose-bullets": theme("colors.accent.500"),
            "--tw-prose-hr": theme("colors.gray.200"),
            "--tw-prose-quotes": theme("colors.primary.900"),
            "--tw-prose-quote-borders": theme("colors.accent.500"),
            "--tw-prose-captions": theme("colors.gray.500"),
            "--tw-prose-code": theme("colors.primary.900"),
            "--tw-prose-pre-code": theme("colors.cream.50"),
            "--tw-prose-pre-bg": theme("colors.primary.950"),
            "--tw-prose-th-borders": theme("colors.gray.300"),
            "--tw-prose-td-borders": theme("colors.gray.200"),
            maxWidth: "72ch",
            fontSize: "1.05rem",
            lineHeight: "1.8",
            "h2, h3, h4": { fontFamily: theme("fontFamily.serif").toString() },
            h2: {
              fontSize: "1.875rem",
              marginTop: "2.25em",
              marginBottom: "0.75em",
              lineHeight: "1.25",
              fontWeight: "600",
            },
            h3: {
              fontSize: "1.375rem",
              marginTop: "1.75em",
              marginBottom: "0.6em",
              fontWeight: "600",
            },
            "h2 a, h3 a, h4 a": {
              color: "inherit",
              textDecoration: "none",
              fontWeight: "inherit",
            },
            a: {
              textDecorationColor: theme("colors.accent.500"),
              textUnderlineOffset: "4px",
              fontWeight: "500",
            },
            "a:hover": {
              color: theme("colors.accent.600"),
            },
            blockquote: {
              fontStyle: "normal",
              fontFamily: theme("fontFamily.serif").toString(),
              fontSize: "1.25rem",
              lineHeight: "1.5",
              backgroundColor: theme("colors.cream.100"),
              borderLeftWidth: "4px",
              borderLeftColor: theme("colors.accent.500"),
              padding: "1.25rem 1.5rem",
              borderRadius: "0.5rem",
              color: theme("colors.primary.900"),
            },
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:last-of-type::after": { content: "none" },
            "ul > li::marker": { color: theme("colors.accent.500") },
            "ol > li::marker": { color: theme("colors.accent.600") },
            "li p": { marginTop: "0.25em", marginBottom: "0.25em" },
            strong: { color: theme("colors.gray.900"), fontWeight: "600" },
            code: {
              backgroundColor: theme("colors.cream.100"),
              padding: "0.15rem 0.4rem",
              borderRadius: "0.25rem",
              fontWeight: "500",
              fontSize: "0.92em",
            },
            "code::before": { content: "none" },
            "code::after": { content: "none" },
            table: { fontSize: "0.95rem" },
            "thead th": {
              backgroundColor: theme("colors.cream.100"),
              padding: "0.75rem 1rem",
              fontFamily: theme("fontFamily.serif").toString(),
              color: theme("colors.primary.900"),
            },
            "tbody td": { padding: "0.75rem 1rem" },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
