import { useState } from "react";
import { useNavigate, type NavigateFunction } from "react-router";
import { SIGNUP_STEP } from "../constants/signupStepInstant";
import postUser from "../apis/postUser";
import type { Dispatch, SetStateAction } from "react";

interface useSignupReturn {
  id: string;
  setId: Dispatch<SetStateAction<string>>;
  pw: string;
  setPw: Dispatch<SetStateAction<string>>;
  checkPw: string;
  setCheckPw: Dispatch<SetStateAction<string>>;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  age: string;
  setAge: Dispatch<SetStateAction<string>>;
  signupStep: number;
  setSignUpStep: Dispatch<SetStateAction<number>>;
  handleSignUp: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  navigate: NavigateFunction;
}

function useSignup(): useSignupReturn {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [checkPw, setCheckPw] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [signupStep, setSignUpStep] = useState(SIGNUP_STEP.ID);

  const navigate = useNavigate();
  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      await postUser({
        username: id,
        password: pw,
        name,
        email,
        age: Number(age),
      });
      alert(`${name}님 회원가입이 완료되었습니다!`);
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return {
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
  };
}

export default useSignup;
