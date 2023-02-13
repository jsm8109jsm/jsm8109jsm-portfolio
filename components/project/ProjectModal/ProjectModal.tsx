import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../../utils/atom/modal";
import { storage } from "../../../utils/Firebase";
import * as S from "./ProjectModal.style";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Layers, Mood, MoodBad } from "@mui/icons-material";
import Lorem from "../../etc/Lorem";

function ProjectModal() {
  const [modal, setModal] = useRecoilState(modalState);
  const [imageIndex, setImageIndex] = useState(1);

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
        <S.ItemsContainer>
          {imageList.length > 0 ? (
            <S.SliderContainer>
              <S.StyledSlider {...settings}>
                {imageList.map((image, index) => {
                  return (
                    <S.ProjectImg
                      src={image}
                      alt={String(data.name)}
                      fill
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
            <S.Intro>
              <>{data.intro}</>
            </S.Intro>
            <div>
              <S.ItemTitle>
                <Layers />
                사용한 기술 스택
              </S.ItemTitle>
              <Lorem/>
            </div>
            <S.ItemTitle>
              <Mood />
              느낀 점
            </S.ItemTitle>
            <S.ItemTitle>
              <MoodBad />
              힘들었던 점
            </S.ItemTitle>
          </S.Item>
        </S.ItemsContainer>
      </S.StyledBox>
    </S.StyledModal>
  );
}

export default ProjectModal;
