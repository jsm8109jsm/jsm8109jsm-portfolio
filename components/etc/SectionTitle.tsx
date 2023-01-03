import React from "react";
import { Title } from "./SectionTitle.style";

function SectionTitle({ children }: { children: string }) {
  return <Title>{children}</Title>;
}

export default SectionTitle;
