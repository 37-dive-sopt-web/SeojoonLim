const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
import axios from "axios";

interface PostUserProps {
  username: string;
  password: string;
  name: string;
  email: string;
  age: number;
}

async function postUser({
  username,
  password,
  name,
  email,
  age,
}: PostUserProps): Promise<void> {
  await axios.post(`${BASE_URL}/api/v1/users`, {
    username: username,
    password: password,
    name: name,
    email: email,
    age: age,
  });
}
export default postUser;
