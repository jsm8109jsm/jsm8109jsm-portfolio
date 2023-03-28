import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../../utils/atom/modal";
import { storage } from "../../../utils/Firebase";
import * as S from "./ProjectModal.style";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Layers, Mood, MoodBad, PeopleAlt } from "@mui/icons-material";
import { VscGithub } from "react-icons/vsc";
import useMediaQuery from "@mui/material/useMediaQuery";

function ProjectModal() {
  const [modal, setModal] = useRecoilState(modalState);
  const [imageIndex, setImageIndex] = useState(1);
  const matches = useMediaQuery("(min-width:800px)");

  const [imageList, setImageList] = useState<string[]>([]);

  const { data, isOpen, value } = modal;
  const beforeChange = (oldIndex: number, newIndex: number) => {
    setImageIndex(newIndex + 1);
  };

  const settings = {
    beforeChange: beforeChange,
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    prevArrow: <ChevronLeft />,
    nextArrow: <ChevronRight />,
  };

  // console.log(imageList);
  useEffect(() => {
    (async () => {
      try {
        setImageList([]);
        const imageListRef = ref(
          storage,
          `images/${value === 0 ? "personal" : "team"}/projects/${
            data.imageName
          }`
        );
        listAll(imageListRef).then((response) => {
          response.items.map((item) => {
            getDownloadURL(item).then((url) => {
              setImageList((prev) => [...prev, url]);
            });
          });
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [data.imageName, value]);

  return (
    <S.StyledModal
      open={isOpen}
      onClose={() => setModal((prev) => ({ ...prev, isOpen: false }))}
    >
      <S.StyledBox>
        <S.Title>
          <>{data.name}</>
        </S.Title>
        <S.Date>
          <>{`(${data.start_month} ~ ${data.finish_month})`}</>
        </S.Date>
        {!matches && (
          <S.Intro>
            <>{data.intro}</>
          </S.Intro>
        )}
        <S.ItemsContainer>
          {imageList.length > 0 ? (
            <S.SliderContainer>
              <S.StyledSlider {...settings}>
                {imageList.map((image, index) => {
                  return (
                    <S.ProjectImg
                      src={image}
                      alt={String(data.name)}
                      width={360}
                      height={225.3}
                      priority
                      key={index}
                    />
                  );
                })}
              </S.StyledSlider>
              <S.Index>{`${imageIndex} / ${imageList.length}`}</S.Index>
            </S.SliderContainer>
          ) : (
            <S.ImageSkeleton variant="rectangular" />
          )}
          <S.Item>
            <S.Content>
              {matches && (
                <S.Intro>
                  <>{data.intro}</>
                </S.Intro>
              )}
              <div>
                <S.ItemTitle>
                  <Layers />
                  사용한 기술 스택
                </S.ItemTitle>
                <S.Stacks>
                  {data.stacks &&
                    data.stacks.map((stack: string, index: number) => {
                      return (
                        <S.Stack key={index}>
                          <>{stack}</>
                        </S.Stack>
                      );
                    })}
                </S.Stacks>
              </div>
              {value === 1 && (
                <div>
                  <S.ItemTitle>
                    <PeopleAlt />
                    맡은 역할
                  </S.ItemTitle>
                  <>{data.role}</>
                </div>
              )}
              <div>
                <S.ItemTitle>
                  <Mood />
                  느낀 점
                </S.ItemTitle>
                <>{data.feel}</>
              </div>
              <div>
                <S.ItemTitle>
                  <MoodBad />
                  힘들었던 점
                </S.ItemTitle>
                <>{data.hard}</>
              </div>
            </S.Content>
            <S.Link href={data.github_link} target="_blank">
              <S.Detail>
                <span>자세히 보기</span>
                <VscGithub size={20} />
              </S.Detail>
            </S.Link>
          </S.Item>
        </S.ItemsContainer>
      </S.StyledBox>
    </S.StyledModal>
  );
}

export default ProjectModal;
