import Image from "next/image";
import styled from "styled-components";

export const SkillTypes = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 20px;
  padding: 30px;
`;

export const IconWrapper = styled.div`
  margin: 20px auto;
  position: relative;
  width: 100%;
  /* height: 100%; */
  &:last-child {
    margin-bottom: 0;
  }
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SmallIconsWrapper = styled(IconWrapper)`
  /* display: flex;
  justify-content: center;
  gap: 20px; */
`;
