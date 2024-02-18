import axios from "axios";
import { server } from "@/constant";
import authStore from "../../store/authStore";

export const API = {
  login: async (email: string, password: string) => {
    const data = new FormData();
    data.append("username", email); //TODO: Change 'username' key to 'email' in Backend
    data.append("password", password);
    try {
      await axios.post(`${server}/login`, data).then((token) => {
        authStore.logIn(token.data.access_token);
      });
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
