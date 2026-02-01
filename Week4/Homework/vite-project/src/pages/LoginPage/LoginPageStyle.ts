/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

/* 로그인 폼 컨테이너 */
export const loginPageStyle = css`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f7f7f7;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    margin: 0 0 1rem 0;
    font-size: 1.8rem;
    font-weight: 600;
  }
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

export const errorText = css`
  font-size: 0.6rem;
  color: rgba(209, 36, 36, 1);
`
