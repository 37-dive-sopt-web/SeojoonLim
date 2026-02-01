import { createPortal } from "react-dom";
import deleteUser from "../../apis/deleteUser";
import { clearLocalStorage, getLocalStorage } from "../../utils/LocalStorage";
import type { Dispatch, SetStateAction } from "react";
import {
  modalBackGroundStyle,
  modalStyle,
  modalButtonContainer,
  cancelButtonStyle,
  deleteButtonStyle,
} from "./ModalStyle";
import { useNavigate } from "react-router";
interface modalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

function Modal({ showModal, setShowModal }: modalProps) {
  const navigate = useNavigate();
  if (!showModal) return;
  const handleClose = () => {
    setShowModal(false);
  };
  const handleDelete = async () => {
    try {
      const id = getLocalStorage();
      await deleteUser(id);
      clearLocalStorage();
      alert("회원 탈퇴 성공")
      navigate("/login");
    } catch {
      alert("회원 탈퇴 오류");
    }
  };
  return createPortal(
    <div css={modalBackGroundStyle} onClick={handleClose}>
      <div css={modalStyle} onClick={(e) => e.stopPropagation()}>
        <p>정말 탈퇴하시겠어요?</p>
        <p>탈퇴 후에는 모든 정보가 삭제돼요</p>
        <div css={modalButtonContainer}>
          <button css={cancelButtonStyle} onClick={handleClose} type="button">
            취소
          </button>
          <button css={deleteButtonStyle} onClick={handleDelete} type="button">
            회원탈퇴
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
