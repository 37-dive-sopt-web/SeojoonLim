import Button from "../../components/Button/Button";
import InputData from "../../components/InputData/InputData";
import { INPUT_PlACEHOLDER, INPUT_TYPE } from "../../constants/InputInstant";
import { BUTTON_TEXT, BUTTON_TYPE } from "../../constants/ButtonInstant";
import { SIGNUP_STEP } from "../../constants/signupStepInstant";
import {
  containerStyle,
  titleStyle,
  formStyle,
  labelStyle,
  backToLoginStyle,
  footerTextStyle,
} from "./SignUpPageStyle";
import useSignup from "../../hooks/useSignup";
function SignUpPage() {
  const {
    id,
    setId,
    pw,
    setPw,
    checkPw,
    setCheckPw,
    name,
    setName,
    email,
    setEmail,
    age,
    setAge,
    signupStep,
    setSignUpStep,
    handleSignUp,
    navigate,
  } = useSignup();

  const idDisabled = id.length === 0 || id.length > 50;
  const pwDisabled = pw.length === 0 || checkPw.length === 0 || pw !== checkPw;
  const etcDisabled =
    name.length === 0 || email.length === 0 || age.length === 0;

  return (
    <div css={containerStyle}>
      <form css={formStyle} onSubmit={handleSignUp}>
        <p css={titleStyle}>회원가입</p>

        {signupStep === SIGNUP_STEP.ID && (
          <div>
            <label css={labelStyle}>
              <p>아이디</p>
              <InputData
                value={id}
                setValue={setId}
                placeholderContent={INPUT_PlACEHOLDER.ID}
                inputType={INPUT_TYPE.TEXT}
              />
            </label>
            <Button
              text={BUTTON_TEXT.NEXT}
              isColoredButton={true}
              isDisabled={idDisabled}
              buttonType={BUTTON_TYPE.BUTTON}
              onClick={() => setSignUpStep(SIGNUP_STEP.PASSWORD)}
            />
          </div>
        )}

        {signupStep === SIGNUP_STEP.PASSWORD && (
          <div>
            <label css={labelStyle}>
              <p>비밀번호</p>
              <InputData
                value={pw}
                setValue={setPw}
                placeholderContent={INPUT_PlACEHOLDER.PASSWORD}
                inputType={INPUT_TYPE.PASSWORD}
              />
            </label>
            <label css={labelStyle}>
              <p>비밀번호 확인</p>
              <InputData
                value={checkPw}
                setValue={setCheckPw}
                placeholderContent={INPUT_PlACEHOLDER.PASSWORD}
                inputType={INPUT_TYPE.PASSWORD}
              />
            </label>
            <Button
              text={BUTTON_TEXT.NEXT}
              isColoredButton={true}
              isDisabled={pwDisabled}
              buttonType={BUTTON_TYPE.BUTTON}
              onClick={() => setSignUpStep(SIGNUP_STEP.ETC)}
            />
          </div>
        )}

        {signupStep === SIGNUP_STEP.ETC && (
          <div>
            <label css={labelStyle}>
              <p>이름</p>
              <InputData
                value={name}
                setValue={setName}
                placeholderContent={INPUT_PlACEHOLDER.NAME}
                inputType={INPUT_TYPE.TEXT}
              />
            </label>
            <label css={labelStyle}>
              <p>이메일</p>
              <InputData
                value={email}
                setValue={setEmail}
                placeholderContent={INPUT_PlACEHOLDER.EMAIL}
                inputType={INPUT_TYPE.EMAIL}
              />
            </label>
            <label css={labelStyle}>
              <p>나이</p>
              <InputData
                value={age}
                setValue={setAge}
                placeholderContent={INPUT_PlACEHOLDER.AGE}
                inputType={INPUT_TYPE.NUMBER}
              />
            </label>
            <Button
              text={BUTTON_TEXT.SIGNUP}
              isColoredButton={true}
              isDisabled={etcDisabled}
              buttonType={BUTTON_TYPE.SUBMIT}
            />
          </div>
        )}
      </form>

      <span css={footerTextStyle}>이미 계정이 있나요?</span>
      <span role="link" css={backToLoginStyle} onClick={() => navigate("/")}>
        로그인으로 돌아가기
      </span>
    </div>
  );
}

export default SignUpPage;
