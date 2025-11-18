import axios from "axios";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
interface user {
  username: string;
  name: string;
  email: string;
  age: number;
}

async function getUser(id: string): Promise<user> {
  const response = await axios.get(`${BASE_URL}/api/v1/users/${id}`);
  const data:user = response.data.data;
  return data;
}
export default getUser;
