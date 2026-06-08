import {api} from "../lib/api";


export const getme = async (token: string) => {
    const res = await api.get("/user/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  
}