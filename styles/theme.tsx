import { DefaultTheme, keyframes } from "styled-components";

const size = {
  mobile: "600px",
  tablet: "900px",
  laptop: "1200px",
  desktop: "1800px",
};

const tada = keyframes`
   0% {transform: scale(1);} 
   10%, 20% {transform: scale(0.9) rotate(-3deg);} 
   30%, 50%, 70%, 90% {transform: scale(1.1) rotate(3deg);} 
   40%, 60%, 80% {transform: scale(1.1) rotate(-3deg);} 
   100% {transform: scale(1) rotate(0);} 
`;

export const theme: DefaultTheme = {
  color: {
    black: "#181D31",
    teal: "#678983",
    beige: "#E6DDC4",
    lightBeige: "#F0E9D2",
    orange: "#FC6B3F",
  },
  size: {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
  },
  animation: {
    tada: tada,
  },
};
