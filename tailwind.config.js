module.exports = {
   content: ["./src/**/*.tsx"],
   theme: {
      extend: {
         gridAutoColumns: {
            "40%": "40%",
            "80%": "80%",
         },
         colors: {
            graymain: "rgba(28, 48, 74, 0.5)",
            gray: {
               100: "rgba(245, 245, 245, 1)",
               150: "rgba(234, 234, 234, 1)",
               200: "rgba(224, 224, 224, 1)",
               300: "#5B5B5B",
               350: "rgba(140, 140, 140, 1)",
               400: "rgba(166, 166, 166, 1)",
               500: "rgba(179, 179, 179, 1)",
               700: "rgba(91, 91, 91, 1)",
               750: "rgba(77, 77, 77, 1)",
               800: "rgba(58, 58, 58, 1)",
            },
            sidebarBorder: "rgba(28, 55, 90, 0.16)",
            blue: {
               100: "rgba(238, 243, 248, 1)",
               300: "rgba(83, 177, 220, 1)",
               400: "rgba(64, 123, 255, 1)",
               600: "rgba(32, 82, 192, 1)",
            },
            green: {
               200: "rgba(223, 255, 244, 1)",
               400: "rgba(52, 187, 139, 1)",
               500: "rgba(34, 149, 129, 1)",
            },
            footer: "rgba(41, 51, 61, 1)",
         },
         boxShadow: {
            full: "0px 0px 0px 5000px rgba(0,0,0,0.2)",
            "xl-left": "0 -25px -50px -12px rgb(0 0 0 / 0.25)",
         },
         spacing: {
            1.5: "0.375rem",
            4.25: "1.0625rem",
            4.5: "1.125rem",
            2.125: "0.5625rem",
            32.5: "8.5rem",
            15: "3.75rem",
            5.5: "1.375rem",
            6.5: "1.625rem",
            18: "4.5rem",
            105: "26.25rem",
            full: "100%",
         },
         fontSize: {
            "1.5xl": ["1.375rem", { lineHeight: "1.8rem" }],
            xssm: ["0.8125rem", { lineHeight: "1.2rem" }],
            xxs: ["0.625rem", { lineHeight: "1rem" }],
            28: ["1.75rem", { lineHeight: "2.2rem" }],
            64: ["4rem", { lineHeight: "4rem" }],
            26: ["1.625rem", { lineHeight: "2rem" }],
            22: ["1.375rem", { lineHeight: "1.5rem" }],
         },
         fontFamily: {
            serif: ['"Comfortaa"'],
            sans: ['"DM Sans"'],
         },
      },
   },
   plugins: [
      ({ addComponents }) => {
         addComponents({ ".btn": {}, ".btn-dark": {}, ".btn-white": {}, ".abs-center": {}, "btn-outlined": {} });
      },
   ],
};
