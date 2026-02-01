import { css } from "@emotion/react";

// 모달 백드롭
export const modalBackGroundStyle = css`
  position: fixed;
  inset: 0; /* top, right, bottom, left 0 */
  background-color: rgba(0, 0, 0, 0.5); /* 반투명 검은색 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// 모달 박스
export const modalStyle = css`
  background-color: #ffffff;
  padding: 24px;
  border-radius: 12px;
  min-width: 320px;
  max-width: 90%;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// 버튼 컨테이너 (취소 / 회원탈퇴)
export const modalButtonContainer = css`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

// 취소 버튼
export const cancelButtonStyle = css`
  padding: 8px 16px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f5f5f5;
  }
`;

// 회원탈퇴 버튼
export const deleteButtonStyle = css`
  padding: 8px 16px;
  border: none;
  background-color: #ff4d4f;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #ff7875;
  }
`;
