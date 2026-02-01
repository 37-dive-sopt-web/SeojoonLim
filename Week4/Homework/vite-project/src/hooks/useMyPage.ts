import { useState, useEffect } from "react";
import { getLocalStorage } from "../utils/LocalStorage";
import patchUser from "../apis/patchUser";
import getUser from "../apis/getUser";
import type { Dispatch, SetStateAction } from "react";
interface useMyPageReturn {
  userName: string;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  age: string;
  setAge: Dispatch<SetStateAction<string>>;
  handleSave: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

function useMyPage(): useMyPageReturn {
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const userId = getLocalStorage();

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userId = getLocalStorage();
    try {
      await patchUser({ id: userId, name, email, age: Number(age) });
      alert("저장 성공");
    } catch {
      alert("저장 오류");
    }
  };

  useEffect(() => {
    const showUserName = async () => {
      try {
        const data = await getUser(userId);
        setUserName(data.username);
        setName(data.name);
        setEmail(data.email);
        setAge(String(data.age));
      } catch {
        alert("error");
      }
    };
    showUserName();
  }, [userId]);

  return {
    userName,
    name,
    setName,
    email,
    setEmail,
    age,
    setAge,
    handleSave,
  };
}

export default useMyPage;
