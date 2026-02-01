import Button from "../../components/Button/Button";
import InputData from "../../components/InputData/InputData";
import { INPUT_PlACEHOLDER, INPUT_TYPE } from "../../constants/InputInstant";
import { BUTTON_TEXT, BUTTON_TYPE } from "../../constants/ButtonInstant";
import { loginPageStyle, labelStyle, errorText } from "./LoginPageStyle";
import useLoginPage from "../../hooks/useLoginPage";

function LoginPage() {
  const { id, setId, pw, setPw, disabled, isRightLogin, handlePage, navigate } =
    useLoginPage();

  return (
    <>
      <form css={loginPageStyle} onSubmit={handlePage}>
        <h1>로그인</h1>

        <label css={labelStyle}>
          <p>아이디</p>
          <InputData
            value={id}
            setValue={setId}
            placeholderContent={INPUT_PlACEHOLDER.ID}
            inputType={INPUT_TYPE.TEXT}
          />
        </label>

        <label css={labelStyle}>
          <p>비밀번호</p>
          <InputData
            value={pw}
            setValue={setPw}
            placeholderContent={INPUT_PlACEHOLDER.PASSWORD}
            inputType={INPUT_TYPE.PASSWORD}
          />
        </label>
        {isRightLogin && (
          <p css={errorText}>아이디 혹은 비밀번호가 올바르지 않습니다.</p>
        )}
        <Button
          text={BUTTON_TEXT.LOGIN}
          isColoredButton={true}
          isDisabled={disabled}
          buttonType={BUTTON_TYPE.SUBMIT}
        />
        <Button
          text={BUTTON_TEXT.SIGNUP}
          isColoredButton={false}
          isDisabled={false}
          buttonType={BUTTON_TYPE.BUTTON}
          onClick={() => navigate("/signup")}
        />
      </form>
    </>
  );
}

export default LoginPage;
