import { useState } from "react";
import { useNavigate, type NavigateFunction } from "react-router";
import postLogin from "../apis/postLogin";
import { setLocalStorage } from "../utils/LocalStorage";
import type { Dispatch, SetStateAction } from "react";

interface useLoginPageReturn {
  id: string,
  setId: Dispatch<SetStateAction<string>>,
  pw: string,
  setPw: Dispatch<SetStateAction<string>>,
  disabled: boolean,
  isRightLogin: boolean,
  handlePage: (e: React.FormEvent<HTMLFormElement>) => Promise<void>,
  navigate: NavigateFunction,
}

function useLoginPage(): useLoginPageReturn {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [isRightLogin, setIsRightLogin] = useState(false);
  const disabled = id.length === 0 || pw.length === 0;
  const navigate = useNavigate();

  const handlePage = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const userId = await postLogin(id, pw);
      setLocalStorage(userId);
      navigate("/mypage");
    } catch {
      setIsRightLogin(true);
    }
  };

  return {
    id,
    setId,
    pw,
    setPw,
    disabled,
    isRightLogin,
    handlePage,
    navigate,
  };
}

export default useLoginPage;
