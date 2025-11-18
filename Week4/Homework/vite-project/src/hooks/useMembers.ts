import { useState } from "react";
import getUser from "../apis/getUser";
import type { Dispatch, SetStateAction } from "react";
interface useMembersReturn {
  userId: string,
  name: string,
  userName:string,
  email:string,
  age:string,
  disabled:boolean,
  setUserId:Dispatch<SetStateAction<string>>,
  handleSearchUser: (e: React.FormEvent<HTMLFormElement>) => Promise<void>,
}

function useMembers(): useMembersReturn {
  const [userId, setUserId] = useState("");
  const disabled = userId.length === 0;
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSearchUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await getUser(userId);
      setUserName(data.username);
      setName(data.name);
      setEmail(data.email);
      setAge(String(data.age));
    } catch {
      alert("조회 실패");
    }
  };

  return {
    userId,
    name,
    userName,
    email,
    age,
    disabled,
    setUserId,
    handleSearchUser,
  };
}
export default useMembers;
