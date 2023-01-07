import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import * as S from "./Skill.style";
import Image from "next/image";

function Skill() {
  return (
    <section>
      <S.Icon>
        {/* <GitHubIcon
          fontSize="large"
          sx={{
            "&:hover": {
              transform: "scale(1.1)",
              boxShadow: "5px 5px 10px",
            },
          }}
        /> */}
        <Image
          src="./images/React.svg"
          alt="리액트 아이콘"
          width={50}
          height={50}
        />
      </S.Icon>
    </section>
  );
}

export default Skill;
