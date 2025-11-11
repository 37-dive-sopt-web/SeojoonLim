import { css } from "@emotion/react";
import { Children } from "react";

const redButtonStyle = () =>
  css({
    backgroundColor: "rgb(223, 86, 86)",
    color: "white",
    borderRadius: "1rem",
    padding: "0.5rem",
    border: "0.2px solid rgb(93, 93, 93)",
    cursor: "pointer",
  });

function RedButton({ children, onClick, extraCss }) {
  return (
    <button type="button" css={[redButtonStyle, extraCss]} onClick={onClick}>
      {children}
    </button>
  );
}

export default RedButton;
