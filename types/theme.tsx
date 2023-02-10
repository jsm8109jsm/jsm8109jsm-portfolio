import { Keyframes } from "styled-components";

export interface Theme {
  color: {
    black: string;
    teal: string;
    beige: string;
    lightBeige: string;
  };
  size: {
    mobile: string;
    tablet: string;
    laptop: string;
    desktop: string;
  };
  animation: {
    tada: Keyframes;
  };
}
