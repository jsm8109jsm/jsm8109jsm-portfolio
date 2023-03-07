import styled from "styled-components";

export const Skills = styled.div`
  /* display: flex;
  gap: 20px; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media screen and (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 510px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
