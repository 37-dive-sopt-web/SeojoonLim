import InputData from "../../components/InputData/InputData";
import { INPUT_PlACEHOLDER, INPUT_TYPE } from "../../constants/InputInstant";
import { BUTTON_TEXT, BUTTON_TYPE } from "../../constants/ButtonInstant";
import Button from "../../components/Button/Button";
import {
  containerStyle,
  titleStyle,
  formStyle,
  labelStyle,
  infoTextStyle,
} from "./MyPageStyle";
import useMyPage from "../../hooks/useMyPage";

function MyPage() {
  const {
    userName,
    name,
    setName,
    email,
    setEmail,
    age,
    setAge,
    handleSave,
  } = useMyPage();

  
  return (
    <div css={containerStyle}>
      <h3 css={titleStyle}>내 정보</h3>
      <form css={formStyle} onSubmit={handleSave}>
        <p css={infoTextStyle}>아이디: {userName}</p>

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
          text={BUTTON_TEXT.SAVE}
          isColoredButton={true}
          isDisabled={false}
          buttonType={BUTTON_TYPE.SUBMIT}
        />
      </form>
    </div>
  );
}

export default MyPage;
