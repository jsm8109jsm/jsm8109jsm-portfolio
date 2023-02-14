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
  width: 800px;
  /* height: 400px;   */
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
`;
export const SliderContainer = styled.div`
  max-height: 212.85px;
  width: 360px;
`;

export const Stacks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`;

export const Stack = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid black;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const Intro = styled.h3`
  font-size: 24px;
  margin: 0;
  margin-bottom: 10px;
  text-align: center;
`;

export const ItemTitle = styled.h4`
  font-size: 20px;
  display: flex;
  gap: 10px;
  font-weight: normal;
  margin: 0;
  margin-bottom: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-height: 240px;
  overflow-y: scroll;
`;

export const Detail = styled.button`
  &:hover {
    background-color: rgba(0, 0, 0, 0.85);
  }
  background-color: black;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 10px;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 127.02px;
`;

export const Link = styled.a`
  &:link {
    color: white;
  }
  &:visited {
    color: white;
  }
  text-decoration-line: none;
`;
