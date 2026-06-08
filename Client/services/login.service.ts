import {api} from "../lib/api";

export const loginUser = async (data : {email : string, password : string}) => {
    const res = await api.post("/api/v1/user/login", data);
    return res.data;
}
