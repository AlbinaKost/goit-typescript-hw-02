import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { ImageSrc } from "../App";
import { FC } from "react";

interface ImageModalProps {
  isOpen: boolean;
  photo: { src: string };
  onChange: (arg0: boolean, arg1: ImageSrc) => void;
}
const ImageModal: FC<ImageModalProps> = ({
  isOpen = false,
  photo,
  onChange,
}) => {
  Modal.setAppElement(document.getElementById("root") as HTMLElement);
  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={() => onChange(false, { src: "", description: "" })}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
    >
      <img className={css.modalImg} src={photo.src} />
    </Modal>
  );
};

export default ImageModal;
