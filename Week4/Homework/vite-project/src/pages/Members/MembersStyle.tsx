/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

/* 컨테이너 */
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
  gap: 1rem;
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

/* 검색 결과 항목 */
export const resultItemStyle = css`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;

  p {
    margin: 0;
    font-size: 1rem;
  }
`;

/* 결과 컨테이너 */
export const resultContainerStyle = css`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
