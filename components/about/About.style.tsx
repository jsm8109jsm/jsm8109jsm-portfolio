import styled from "styled-components";

export const Info = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const InfoItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-between;
`;

export const InfoItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Strengths = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 60px;
`;

export const Careers = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const Stress = styled.span`
  font-weight: 400;
  background-color: rgba(103, 137, 131, 0.5);
`;
