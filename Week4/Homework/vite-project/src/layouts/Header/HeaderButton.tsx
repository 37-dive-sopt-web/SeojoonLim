import type { SerializedStyles } from "@emotion/react";

interface headerButtonProps {
  text: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  styleCss?: SerializedStyles;
}

function HeaderButton({text, handleClick, styleCss}: headerButtonProps) {
  
  return <button css={styleCss} onClick={handleClick}>{text}</button>;
}

export default HeaderButton;