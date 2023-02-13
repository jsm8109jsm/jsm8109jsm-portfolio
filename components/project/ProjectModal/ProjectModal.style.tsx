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
  width: 780px;
  height: 400px;  
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
    height: 100%;
    /* max-width: 300px; */
    /* max-height: 212.85px; */
    overflow: hidden;
  }
  .slick-arrow {
    color: black;
  }
`;

export const ProjectImg = styled(Image)`
  height: auto !important;
  position: relative !important;
`;

export const ImageSkeleton = styled(Skeleton)`
  width: 340px;
`;

export const Index = styled.span`
  text-align: center;
  display: block;
`;

export const ItemsContainer = styled.div`
  /* max-height: 212.85px; */
  display: flex;
  gap: 40px;
  width: 100%;
  margin-top: 20px;
`
export const SliderContainer = styled.div`
  max-height: 212.85px;
  width: 340px;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-height: 240px;
  overflow-y: scroll;
`;

export const Intro = styled.h3`
  font-size: 24px;
  margin: 0;
  margin-bottom: 10px;
  text-align: center;
`

export const ItemTitle = styled.h4`
  font-size: 20px;
  display: flex;
  gap: 10px;
  font-weight: normal;
  margin: 0;
  margin-bottom: 10px;
`
