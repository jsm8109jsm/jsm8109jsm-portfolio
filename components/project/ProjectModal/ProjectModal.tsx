import { getDownloadURL, listAll, ref } from "firebase/storage";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../../utils/atom/modal";
import { storage } from "../../../utils/Firebase";
import * as S from "./ProjectModal.style";
function ProjectModal() {
  const [modal, setModal] = useRecoilState(modalState);
  const [imageList, setImageList] = useState<string[]>([]);

  const { data, isOpen, value } = modal;
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
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

  console.log(imageList);

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
          <S.StyledSlider {...settings}>
            {imageList.map((image, index) => (
              <S.ProjectImg
                key={index}
                src={image}
                alt={String(data.name)}
                fill
              />
            ))}
          </S.StyledSlider>
        ) : (
          <S.ImageSkeleton variant="rectangular" />
        )}
      </S.StyledBox>
    </S.StyledModal>
  );
}

export default ProjectModal;
