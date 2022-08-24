import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter";

const theme = extendTheme({
  styles: {
    global: {
      footer: {
        color: "black",
        fontWeight: "600",
      },
    },
  },

  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Inter', sans-serif",
  },

  components: {
    Heading: {
      variants: {
        title: {
          color: "#d9d7d2",
          textShadow: "2px 2px 2px #000000",
        },
      },
      baseStyle: {
        fontWeight: "800",
      },
      defaultProps: {
        size: "3xl",
      },
    },
  },
});

export default theme;
