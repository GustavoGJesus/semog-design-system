// ../tokens/dist/index.mjs
var colors = {
  white: "#FFFFFF",
  gray200: "#E0E0E0",
  black: "#000000",
  green: "#00D69D",
  blue: "#133A6E"
};
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};
var fonts = {
  default: "Manrope, sans-serif",
  code: "monospace"
};
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};

// src/styles/index.ts
import { createStitches, defaultThemeMap } from "@stitches/react";
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space"
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space
  }
});

// src/components/Box.tsx
var Box = styled("div", {
  padding: "$4",
  borderRadius: "$md",
  background: "$green",
  color: "$white"
});
Box.displayName = "Box";

// src/components/Text.tsx
var Text = styled("p", {
  fontFamily: "$default",
  lineHeight: "$base",
  margin: 0,
  color: "$blue",
  variants: {
    size: {
      xxs: { fontSize: "$xxs" },
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "4xl": { fontSize: "$4xl" },
      "5xl": { fontSize: "$5xl" },
      "6xl": { fontSize: "$6xl" },
      "7xl": { fontSize: "$7xl" },
      "8xl": { fontSize: "$8xl" },
      "9xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Text.displayName = "Text";

// src/components/Heading.tsx
var Heading = styled("h2", {
  fontFamily: "$default",
  lineHeight: "$shorter",
  margin: 0,
  color: "$blue",
  variants: {
    size: {
      sm: { fontSize: "$xl" },
      md: { fontSize: "$2xl" },
      lg: { fontSize: "$4xl" },
      "2xl": { fontSize: "$5xl" },
      "3xl": { fontSize: "$6xl" },
      "4xl": { fontSize: "$7xl" },
      "5xl": { fontSize: "$8xl" },
      "6xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Heading.displayName = "Heading";

// src/components/Avatar/index.tsx
import React from "react";
import { User } from "phosphor-react";

// src/components/Avatar/styles.ts
import * as Avatar from "@radix-ui/react-avatar";
var AvatarContainer = styled(Avatar.Root, {
  borderRadius: "$full",
  display: "inline-block",
  width: "$12",
  height: "$12",
  overflow: "hidden"
});
var AvatarImage = styled(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit"
});
var AvatarFallBack = styled(Avatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "$black",
  color: "$green",
  svg: {
    width: "$6",
    height: "$6"
  }
});

// src/components/Avatar/index.tsx
function Avatar2(props) {
  return /* @__PURE__ */ React.createElement(AvatarContainer, null, /* @__PURE__ */ React.createElement(AvatarImage, { ...props }), /* @__PURE__ */ React.createElement(AvatarFallBack, { delayMs: 600 }, /* @__PURE__ */ React.createElement(User, null)));
}
Avatar2.displayName = "Avatar";

// src/components/Button.tsx
var Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  padding: "0 $4",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  cursor: "pointer",
  svg: {
    width: "$4",
    height: "$4"
  },
  variants: {
    variant: {
      primary: {
        color: "$white",
        backgroundColor: "$green",
        "&:not(:disabled):hover": {
          transition: "backgroundColor 0.1s"
        },
        "&:disabled": {
          backgroundColor: "#C4C4C4",
          cursor: "not-allowed"
        }
      },
      secondary: {
        color: "$green",
        backgroundColor: "transparent",
        border: "1px solid $green",
        "&:disabled": {
          backgroundColor: "#C4C4C4",
          cursor: "not-allowed"
        }
      },
      tertiary: {
        color: "$blue",
        "&:disabled": {
          backgroundColor: "#C4C4C4",
          cursor: "not-allowed"
        }
      }
    },
    size: {
      sm: {
        height: 38
      },
      md: {
        height: 46
      }
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
Button.displayName = "Button";

// src/components/text-input/index.tsx
import React2 from "react";

// src/components/text-input/styles.ts
var TextInputContainer = styled("div", {
  backgroundColor: "$green",
  padding: "$3 $4",
  borderRadius: "$small",
  boxSizing: "border-box",
  border: "2px solid #gray200",
  display: "flex",
  alignItems: "baseLine",
  "&:has(input:focus)": {
    borderColor: "$blue"
  },
  "&:has(input: disabled)": {
    opacity: 0.5,
    cursor: "not-allowed"
  }
});
var Prefix = styled("span", {
  fontFamily: "$default",
  fontSize: "$small",
  color: "$blue",
  fontWeight: "$regular"
});
var Input = styled("input", {
  fontFamily: "$default",
  fontSize: "$small",
  color: "$white",
  fontWeight: "$regular",
  background: "transparent",
  border: 0,
  width: "100%",
  "&:focus": {
    outline: 0
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  "&:placeholder": {
    color: "$blue"
  }
});

// src/components/text-input/index.tsx
function TextInput({ prefix, ...props }) {
  return /* @__PURE__ */ React2.createElement(TextInputContainer, null, !!prefix && /* @__PURE__ */ React2.createElement(Prefix, null, prefix), /* @__PURE__ */ React2.createElement(Input, { ...props }));
}
TextInput.displayName = "TextInput";

// src/components/TextArea.tsx
import { styled as styled2 } from "@stitches/react";
var TextArea = styled2("textarea", {
  backgroundColor: "$green",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid #gray200",
  fontFamily: "$default",
  fontWeight: "$regular",
  resize: "vertical",
  minHeight: 80,
  "&:focus": {
    borderColor: "$blue",
    outline: 0
  },
  "&:placeholder": {
    color: "$gray200"
  }
});
TextArea.displayName = "TextArea";

// src/components/Checkbox/index.tsx
import React3 from "react";
import { Check } from "phosphor-react";

// src/components/Checkbox/styles.ts
import * as Checkbox from "@radix-ui/react-checkbox";
var CheckboxContainer = styled(Checkbox.Root, {
  all: "unset",
  width: "$6",
  height: "$6",
  backgroundColor: "$gray200",
  borderRadius: "$xs",
  lineHeight: 0,
  cursor: "pointer",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid $green",
  '&[data-state="checked"]': {
    backgroundColor: "$gray200"
  },
  "&:focus": {
    border: "1px solid $gray200"
  }
});
var slideIn = keyframes({
  from: {
    transform: "translateY(-100%)"
  },
  to: {
    transform: "translateY(0)"
  }
});
var slideOut = keyframes({
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(100%)"
  }
});
var CheckboxIndicator = styled(Checkbox.Indicator, {
  color: "$blue",
  width: "$4",
  height: "$4",
  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`
  }
});

// src/components/Checkbox/index.tsx
function Checkbox2(props) {
  return /* @__PURE__ */ React3.createElement(CheckboxContainer, { ...props }, /* @__PURE__ */ React3.createElement(CheckboxIndicator, { asChild: true }, /* @__PURE__ */ React3.createElement(Check, { weight: "bold" })));
}
Checkbox2.displayName = "Checkbox";
export {
  Avatar2 as Avatar,
  Box,
  Button,
  Checkbox2 as Checkbox,
  Heading,
  Text,
  TextArea,
  TextInput
};
