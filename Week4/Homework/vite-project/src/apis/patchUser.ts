import axios from "axios";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
interface PatchUserProps {
  id: string;
  name: string;
  email: string;
  age: number;
}

async function patchUser({
  id,
  name,
  email,
  age,
}: PatchUserProps): Promise<void> {
  await axios.patch(`${BASE_URL}/api/v1/users/${id}`, {
    name,
    email,
    age,
  });
}
export default patchUser;
