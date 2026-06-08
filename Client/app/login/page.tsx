"use client";

import { useForm } from "react-hook-form";
import type { LoginSchemaType } from "../../schemas/login.schema";
import { loginUser } from "../../services/login.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/redux/features/authSlice";


export default function LoginPage() {
  const { register, handleSubmit } = useForm<LoginSchemaType>();
  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = async (data: LoginSchemaType) => {
    try {
      const result = await loginUser(data);

      if (result.success) {
        localStorage.setItem("accessToken", result.data.accessToken);

        dispatch(login({
          user : result.data.userName,
          role : result.data.role
        }));

        router.replace("/");
        console.log("successful login")
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-gray-500 mt-2">
            Login to your account
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <div>
            <label className="block text-sm font-medium mb-2">
              Email
            </label>

            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Password
            </label>

            <input
              {...register("password")}
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/register">
            <button
              className="mt-3 w-full border border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Sign Up
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}