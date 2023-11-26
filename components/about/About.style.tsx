import styled from "styled-components";

export const Info = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
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
  @media screen and (max-width: 830px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Careers = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  @media screen and (max-width: 830px) {
    flex-direction: column;
  }
`;

export const Stress = styled.span`
  font-weight: 400;
  background-color: rgba(103, 137, 131, 0.4);
`;
