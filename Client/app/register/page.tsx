"use client";

import { useForm } from "react-hook-form";
import type { RegisterSchemaType } from "../../schemas/register.schema";
import { registerUser } from "@/services/register.service";
import Link from "next/link";



export default function RegisterPage() {

  const { register, handleSubmit } = useForm<RegisterSchemaType>();

  const onSubmit = async (data: RegisterSchemaType) => {
    console.log ("sending:", data)
    const result = await registerUser(data);
    console.log(result);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold">
        Create Account
      </h1>

      <p className="text-gray-500 mt-2">
        Join us and start shopping today
      </p>
    </div>

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <div>
        <label className="block text-sm font-medium mb-2">
          Name
        </label>

        <input
          {...register("name")}
          type="text"
          placeholder="Enter your name"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Email
        </label>

        <input
          {...register("email")}
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Password
        </label>

        <input
          {...register("password")}
          type="password"
          placeholder="Create a password"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Create Account
      </button>
    </form>

    <div className="mt-6 text-center">
      <p className="text-gray-600">
        Already have an account?
      </p>

      <Link
        href="/login"
        className="inline-block mt-3 text-blue-600 font-semibold hover:underline"
      >
        Login
      </Link>
    </div>

  </div>
</div>
  );
}