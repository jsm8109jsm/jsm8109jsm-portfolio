import styled from "styled-components";

export const Skills = styled.div`
  /* display: flex;
  gap: 20px; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const SkillLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
