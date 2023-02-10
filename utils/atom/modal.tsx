import { atom } from "recoil";
import { Personal_Projects } from "../../components/project/Project";

export const modalState = atom<{ isOpen: boolean; data: Personal_Projects }>({
  key: "ModalState",
  default: {
    isOpen: false,
    data: {},
  },
});
