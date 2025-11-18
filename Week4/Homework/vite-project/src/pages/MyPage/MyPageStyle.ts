/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

/* 컨테이너 전체 */
export const containerStyle = css`
  padding: 2rem;
  background-color: #f7f7f7;
  border-radius: 12px;
  max-width: 500px;
  margin: 0 auto;
`;

/* 제목 h3 */
export const titleStyle = css`
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

/* 폼 */
export const formStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

/* label 내부 */
export const labelStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
  }

  input {
    width: 100%;
    padding: 0.6rem 0.8rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 1rem;
    box-sizing: border-box;
  }
`;

/* 아이디 텍스트 */
export const infoTextStyle = css`
  font-size: 1rem;
  font-weight: 400;
`;
