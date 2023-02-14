import React, { useEffect, useState } from "react";
import * as S from "./Project.style";
import * as A from "../../styles/All";
import SectionTitle from "../etc/SectionTitle";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import { fireStore, storage } from "../../utils/Firebase";
import ProjectItem from "./ProjectItem/ProjectItem";
import { getDownloadURL, listAll, ref } from "firebase/storage";
// import

export interface Personal_Projects {
  [key: string]: any;
}

function Project() {
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState<Personal_Projects[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const bucket = collection(
          fireStore,
          `${value === 0 ? "personal" : "team"}_projects`
        );
        const response = await getDocs(bucket);
        let newData: Personal_Projects[] = [];
        response.docs.map((doc) => {
          newData.push(doc.data());
        });

        const imageListRef = ref(
          storage,
          `images/${value === 0 ? "personal" : "team"}`
        );
        listAll(imageListRef).then((response) => {
          response.items.map((item) => {
            getDownloadURL(item).then((url) => {
              newData = newData.map((data) => {
                return data.imageName === item.name.slice(0, -4)
                  ? { ...data, url: url }
                  : data;
              });
              setProjects(newData);
            });
          });
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [value]);

  console.log(projects);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <A.Section id="project">
      <SectionTitle isBlack>PROJECTS</SectionTitle>
      <S.TabContainer>
        <S.StyledTabs value={value} onChange={handleChange}>
          <S.StyledTab label="개인 프로젝트" />
          <S.StyledTab label="팀 프로젝트" />
        </S.StyledTabs>
      </S.TabContainer>
      <S.ProjectsContainer>
        {projects.map((item, index) => {
          return <ProjectItem key={index} data={item}></ProjectItem>;
        })}
      </S.ProjectsContainer>
    </A.Section>
  );
}

export default Project;
