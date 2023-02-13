import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../../utils/atom/modal";
import { storage } from "../../../utils/Firebase";
import * as S from "./ProjectModal.style";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

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
        {imageList.length > 0 ? (
          <>
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
          </>
        ) : (
          <S.ImageSkeleton variant="rectangular" />
        )}
      </S.StyledBox>
    </S.StyledModal>
  );
}

export default ProjectModal;
