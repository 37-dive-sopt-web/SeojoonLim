import axios from "axios";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;


async function deleteUser(id: string): Promise<void> {
  await axios.delete(`${BASE_URL}/api/v1/users/${id}`);
}
export default deleteUser;