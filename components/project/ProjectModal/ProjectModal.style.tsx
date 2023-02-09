import styled from "styled-components";
import { Modal, Box } from "@mui/material";

export const StyledModal = styled(Modal)``;

export const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px,
    rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
  padding: 30px;
  border-radius: 30px;
  &:focus-visible {
    outline: none;
  }
`;
