import { useEffect, useState } from "react";
import getUser from "../apis/getUser";
import { getLocalStorage } from "../utils/LocalStorage";
import type { Dispatch, SetStateAction } from "react";
interface useGetNameReturn {
  name: string;
}

function useGetName(): useGetNameReturn {
  const [name, setName] = useState("");
  const userId = getLocalStorage();
  useEffect(() => {
    const getName = async () => {
      const data = await getUser(userId);
      setName(data.name);
    };
    getName();
  }, [userId]);

  return { name };
}

export default useGetName;
