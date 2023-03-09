import styled from "styled-components";
import { Tabs, Tab } from "@mui/material";

export const StyledTabs = styled(Tabs)`
  width: 231px;
  float: right;
`;

export const StyledTab = styled(Tab)`
  background-color: white;
`;

export const TabContainer = styled.div`
  display: flex;
  margin-top: -30px;
  justify-content: end;
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media screen and (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 510px) {
    grid-template-columns: 1fr;
  }
`;
