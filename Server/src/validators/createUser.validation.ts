import {z} from "zod";

export const UserCreateValidationSchema = z.object ({
    name : z.string().min(3 , "name must be at least 3 characters long"),
    email : z.email("invalid email format"),
    password : z.string().min(6 , "password must be at least 6 characters long"),
    role: z.enum(["user","seller"])

})
export const UserLoginValidationSchema = z.object ({
    email : z.email("invalid email format"),
    password : z.string().min(6 , "password must be at least 6 characters long"),
    role: z.enum(["user","seller"])
})

export const adminCreateValidationSchema = z.object ({
    name : z.string().min(3 , "name must be at least 3 characters long"),
    email : z.email("invalid email format"),
    password : z.string().min(6 , "password must be at least 6 characters long")

})
export const AdminLoginValidationSchema = z.object ({
    name : z.string().min(3 , "name must be at least 3 characters long"),
    email : z.email("invalid email format"),
    password : z.string().min(6 , "password must be at least 6 characters long")

})
