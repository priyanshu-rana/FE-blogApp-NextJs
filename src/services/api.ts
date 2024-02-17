import axios from "axios";
import { server } from "@/constant";

export const API = {
  login: async (email: string, password: string) => {
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    try {
      await axios.post(`${server}/login`, data);
    } catch (error) {
      console.error(error);
    }
  },

  getAllBlogs: async () =>
    await axios
      .get(`${server}/blog/all`)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      }),
};
