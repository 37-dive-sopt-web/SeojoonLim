import { css } from "@emotion/react";
import { theme } from "../../styles/theme";

export const buttonStyle = (isColored: boolean, isDisabled?: boolean) => css`
  width: 100%;
  height: 3rem;
  background-color: ${isColored ? theme.colors.primary : theme.colors.white};
  color: ${isColored ? theme.colors.white : theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  transition: background-color 0.3s ease;
  border: 0.2px solid rgb(221, 221, 221);
  cursor: pointer;

  &:hover {
    background-color: ${isColored ? "rgb(113, 251, 53)" : theme.colors.white};
  }

  ${isDisabled &&
  css`
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  `}
`;
