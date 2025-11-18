import { buttonStyle } from "./ButtonStyle";
// 입력이 안됐을 때 초록 버튼 흐린색임
// 입력 되면, 초록 버튼 제색깔 나옴
// 로그인 버튼만 hover 시 색깔 변경
// 회원가입 중 특정 버튼 하나만 흰색임
interface ButtonProps {
  text: string;
  isColoredButton: boolean;
  isDisabled: boolean;
  buttonType: "button" | "submit";
  onClick?: () => void;
}

function Button({ text, isColoredButton, isDisabled = false, buttonType, onClick }: ButtonProps) {
  return (
    <button type={buttonType} css={buttonStyle(isColoredButton, isDisabled)} disabled={isDisabled} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
