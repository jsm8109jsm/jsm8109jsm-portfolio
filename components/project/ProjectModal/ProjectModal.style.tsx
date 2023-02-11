import styled from "styled-components";
import { Modal } from "@mui/material";
import Slider from "react-slick";
import Image from "next/image";
import { Skeleton } from "@mui/material";

export const StyledModal = styled(Modal)``;

export const StyledBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px,
    rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
  padding: 30px;
  border-radius: 30px;
  &:focus-visible {
    outline: none;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  text-align: center;
  margin: 0;
  font-weight: 900;
`;

export const Date = styled.h6`
  color: #808080;
  text-align: center;
  margin: 0;
  font-size: 24px;
`;
export const StyledSlider = styled(Slider)`
  .slick-list {
    max-width: calc(100vw - 200px);
    overflow: hidden;
  }
`;

export const ProjectImg = styled(Image)`
  height: auto !important;
  position: relative !important;
`;

export const ImageSkeleton = styled(Skeleton)`
  /* width: 100%;
  height: auto !important; */
  height: 212.85px;
`