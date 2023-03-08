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
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
