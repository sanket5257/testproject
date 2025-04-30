"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Signin = () => {
  const router = useRouter();

  const handleClose = () => {
    router.push("/");
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="max-w-md bg-white w-full rounded-xl shadow-lg p-8 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 font-bold text-black text-lg"
          aria-label="Close modal"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sign In</h2>

        <div className="flex py-10 items-center justify-center">
          <button className="px-6 py-2.5 border flex gap-2 border-slate-200 rounded-lg text-black">
            <Image src="/google.svg" alt="Google Logo" width={24} height={24} />
            Login with Google
          </button>
        </div>

        <div className="flex items-center justify-between mt-4 mb-4">
          <span className="w-2/5 border-b border-gray-400"></span>
          <span className="text-xs text-gray-500 uppercase">or</span>
          <span className="w-2/5 border-b border-gray-400"></span>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-indigo-600" />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-gray-600 hover:text-indigo-500">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#007BFF] hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <a href="/Signup" className="text-[#007BFF] hover:text-indigo-500 font-medium">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signin;
