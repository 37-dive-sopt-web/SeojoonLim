
import {headerStyle, titleStyle, buttonStyle} from "./HeaderStyles"


function Header({ setGameOrRank }) {
  return (
    <header css={headerStyle}>
      <h1 css={titleStyle}>숫자 카드 짝 맞추기</h1>
      <div>
        <button
          type="button"
          css={buttonStyle}
          onClick={() => setGameOrRank("game")}
        >
          게임
        </button>
        <button
          type="button"
          css={buttonStyle}
          onClick={() => setGameOrRank("rank")}
        >
          랭킹
        </button>
      </div>
    </header>
  );
}

export default Header;
