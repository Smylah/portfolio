const colors = require("./colors")
const typography = require("./typography")
const { getEntries } = require("./utils")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  screens: {
    sm: "375px",
    md: "768px",
    lg: "1110px",
    xl: "1320px",
  },

  extend: {
    boxShadow: {},
    ...typography,
    borderRadius: {
      none: "0px",
      sm: "2px",
      md: "6px",
      lg: "8px",
      xl: "20px",
      full: "9999px",
    },
    fontFamily: {
      sans: ["Inter var", ...defaultTheme.fontFamily.sans],
    },
  },
  spacing: {
    //   generate spacings from (-500 to 500)px
    ...getEntries(501, (index) => [index, `${index}px`]),
    ...getEntries(500, (index) => [`-${index + 1}`, `-${index + 1}px`]),
  },
  zIndex: {
    ...getEntries(50, (index) => [index, `${index}`]),
  },
  maxWidth: {
    app: "1080px",
  },
  minWidth: {
    "full-app": "min(100%,1080px)",
  },
}
