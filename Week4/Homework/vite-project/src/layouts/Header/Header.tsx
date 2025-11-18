import { useNavigate } from "react-router";
import HeaderButton from "./HeaderButton";
import { headerNav } from "../../constants/HeaderNavInstant";
import { clearLocalStorage } from "../../utils/LocalStorage";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { headerStyle, h1Style, h2Style, navStyle, headerButtonStyle} from "./HeaderStyle";

function Header() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const handleLogout = () => {
    clearLocalStorage();
    navigate("/login");
  };

  return (
    <header css={headerStyle}>
  <div>
    <h1 css={h1Style}>마이페이지</h1>
    <h2 css={h2Style}>안녕하세요</h2>
  </div>
  <nav css={navStyle}>
    <HeaderButton
      text={headerNav.INFO}
      handleClick={() => navigate("/mypage")}
      styleCss={headerButtonStyle}
    />
    <HeaderButton
      text={headerNav.MEMBER}
      handleClick={() => navigate("/mypage/member")}
      styleCss={headerButtonStyle}
    />
    <HeaderButton
      text={headerNav.LOGOUT}
      handleClick={handleLogout}
      styleCss={headerButtonStyle}
    />
    <HeaderButton
      text={headerNav.DELETE}
      handleClick={() => setShowModal(true)}
      styleCss={headerButtonStyle}
    />
  </nav>
  <Modal showModal={showModal} setShowModal={setShowModal} />
</header>

  );
}

export default Header;
