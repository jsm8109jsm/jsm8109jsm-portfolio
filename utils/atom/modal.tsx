import { atom } from "recoil";

export const modalState = atom({
  key: "ModalState",
  default: {
    isOpen: false,
    data: {},
  },
});
