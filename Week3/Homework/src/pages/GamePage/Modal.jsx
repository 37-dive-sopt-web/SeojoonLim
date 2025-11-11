import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {modalFrameStyle, modalContainerStyle, modalRestartStyle} from "./GamePageStyles"


const Modal = ({ showModal, setShowModal, message, record }) => {
  const [modalCount, setModalCount] = useState(3);
  useEffect(() => {
    if (!showModal) return;
    const counter = setInterval(() => {
      setModalCount((prev) => {
        if (prev <= 0) {
          clearInterval(counter);
          return 0;
        } else {
          return prev - 1;
        }
      });
    }, 1000);

    const delay = setTimeout(() => {
      setShowModal(false);
    }, 3000);

    return () => {
      setModalCount(3);
      clearInterval(counter);
      clearTimeout(delay);
    };
  }, [showModal]);

  return (
    <>
      {showModal &&
        createPortal(
          <div css={modalFrameStyle}>
            <div css={modalContainerStyle}>
              <div>{message === "성공" ? "축하해요!" : "아쉬워요!"}</div>
              <div>
                {message === "성공"
                  ? `Level ${record?.level}을 ${record?.time}초 만에 클리어했어요.`
                  : `Level ${record?.level}을 클리어 하지 못했어요`}
              </div>
              <span css={modalRestartStyle}>{modalCount}초 후 자동으로 새 게임을 시작해요</span>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Modal;
