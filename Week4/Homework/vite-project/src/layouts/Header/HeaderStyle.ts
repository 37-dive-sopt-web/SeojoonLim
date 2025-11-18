/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
/* Header 전체 */
export const headerStyle = css`
  background-color: rgba(144, 232, 147, 1);
  color: rgb(255, 255, 255);
  padding: 1.6rem 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/* h1 */
export const h1Style = css`
  margin: 0;
  font-size: 1.5rem;
`;

/* h2 */
export const h2Style = css`
  margin: 4px 0 0 0;
  font-size: 1rem;
  font-weight: 400;
`;

/* nav */
export const navStyle = css`
  display: flex;
`;

/* 헤더 버튼 */
export const headerButtonStyle = css`
  background-color: rgba(144, 232, 147, 1);
  color: rgb(255, 255, 255);
  flex-basis: 0;
  flex-grow: 1;
  border: none;
  padding: 0.8rem 1rem;
  font-size: 0.8rem;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
  white-space: nowrap;

  &:hover {
    filter: brightness(1.05);
  }
`;
