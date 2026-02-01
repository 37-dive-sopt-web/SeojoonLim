/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

/* 컨테이너 */
export const containerStyle = css`
  padding: 2rem;
  max-width: 500px;
  margin: 0 auto;
  background-color: #f7f7f7;
  border-radius: 12px;
`;

/* 제목 p */
export const titleStyle = css`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
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

/* 로그인으로 돌아가기 링크 */
export const backToLoginStyle = css`
  color: #3498db;
  cursor: pointer;
  margin-left: 0.3rem;
  text-decoration: underline;

  &:hover {
    color: #21618c;
  }
`;

/* span 문구 */
export const footerTextStyle = css`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #555;
`;
