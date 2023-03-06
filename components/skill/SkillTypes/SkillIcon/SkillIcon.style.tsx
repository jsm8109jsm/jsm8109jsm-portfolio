import styled from "styled-components";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Image from "next/image";

export const Icon = styled(Image)<{ isFull?: true }>`
  &:hover {
    transform: scale(1.1);
  }
  transition: 0.3s;
  width: ${({ isFull }) => isFull && "100%"};
`;

export const IconTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.color.black,
    color: "white",
    padding: "15px",
    minWidth: "270px",
    borderRadius: "10px",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.color.black,
  },
}));

export const SkillLevels = styled.div`
  width: 100%;
  background-color: white;
  height: 20px;
`;

export const SkillComments = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 15px 0;
  padding: 0;
  padding-left: 10px;
  list-style-type: "✔";
  width: 270px;
`;

export const SkillComment = styled.li`
  padding-left: 5px;
`;

export const SkillLevel = styled.div<{ index: number }>`
  display: inline-block;
  opacity: ${({ index }) => (index + 1) * 20 + "%"};
  background-color: ${({ theme }) => theme.color.orange};
  width: 20%;
  height: 100%;
`;

export const LevelTitle = styled.span`
  color: ${({ theme }) => theme.color.orange};
`;

// export const IconTooltip = styled(Tooltip)`
//   background-color: #f5f5f9;
//   color: rgba(0, 0, 0, 0.87);
//   max-width: 220px;
//   border: 1px solid #dadde9;
// `;
