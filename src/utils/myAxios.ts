import axios from "axios";

const myAxios = axios.create({
  baseURL: String(process.env.NEXT_PUBLIC_BASE_URL),
});

export default myAxios;
