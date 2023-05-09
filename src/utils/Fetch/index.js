import { instance as axios } from "../../config";

export async function getData(url) {
  const apiVersion = "/v2";
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  return await axios.get(`${apiVersion}/${url}&apiKey=${apiKey}`);
}
