import Image from "next/image";
import styled from "styled-components";

export const ProjectItem = styled.div`
  border-radius: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.black};
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 25px;
  cursor: pointer;
  max-width: 400px;
  /* max-height: 400px; */
`;

export const ProjectImage = styled(Image)`
  /* height: auto !important; */
  /* position: relative !important; */
`;    

export const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  margin: 0;
  color: white;
  font-weight: 900;
`;

export const Date = styled.h6`
  color: #808080;
  text-align: center;
  margin: 0;
  font-size: 18px;
`;

export const Intro = styled.span`
  display: block;
  color: white;
  font-size: 24px;
  text-align: center;
`;
