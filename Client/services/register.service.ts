import {api} from "../lib/axios";
import type { RegisterSchemaType } from "../schemas/register.schema";

export const registerUser = async (data : RegisterSchemaType ) => {
    const res = await api.post("api/v1/user/register", data);
    return res.data;
}