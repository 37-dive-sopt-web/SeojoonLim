import Button from "../../components/Button/Button";
import InputData from "../../components/InputData/InputData";
import { INPUT_PlACEHOLDER, INPUT_TYPE } from "../../constants/InputInstant";
import { BUTTON_TEXT, BUTTON_TYPE } from "../../constants/ButtonInstant";
import {
  containerStyle,
  titleStyle,
  formStyle,
  labelStyle,
  resultItemStyle,
  resultContainerStyle,
} from "./MembersStyle";
import useMembers from "../../hooks/useMembers";

function Members() {
  const {
    userId,
    name,
    userName,
    email,
    age,
    disabled,
    setUserId,
    handleSearchUser,
  } = useMembers();

  return (
    <div css={containerStyle}>
      <h3 css={titleStyle}>회원 조회</h3>
      <form css={formStyle} onSubmit={handleSearchUser}>
        <label css={labelStyle}>
          <p>회원 ID</p>
          <InputData
            value={userId}
            setValue={setUserId}
            placeholderContent={INPUT_PlACEHOLDER.USER_ID}
            inputType={INPUT_TYPE.NUMBER}
          />
        </label>
        <Button
          text={BUTTON_TEXT.CHECK}
          isColoredButton={true}
          isDisabled={disabled}
          buttonType={BUTTON_TYPE.SUBMIT}
        />
      </form>

      <div css={resultContainerStyle}>
        <div css={resultItemStyle}>
          <p>이름</p>
          <p>{name}</p>
        </div>
        <div css={resultItemStyle}>
          <p>아이디</p>
          <p>{userName}</p>
        </div>
        <div css={resultItemStyle}>
          <p>이메일</p>
          <p>{email}</p>
        </div>
        <div css={resultItemStyle}>
          <p>나이</p>
          <p>{age}</p>
        </div>
      </div>
    </div>
  );
}

export default Members;
