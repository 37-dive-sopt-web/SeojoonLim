import axios from "axios";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;


async function postLogin(username: string, password: string): Promise<number> {
  const response = await axios.post(`${BASE_URL}/api/v1/auth/login`, {
    username,
    password,
  });
  return response.data.data.userId;
}
export default postLogin;
