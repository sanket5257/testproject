import React from "react";
import Image from "next/image";

const Signin = () => {
  return (
    <div>
      <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="max-w-md bg-white w-full rounded-xl shadow-lg p-8">
          <button className=" font-bold text-black float-right text-lg">
            ✖
          </button>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Sign In
          </h2>

          <div className="flex py-10  items-center justify-center ">
            <button className="px-24  py-2.5 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg  text-black">
              <Image className="size-6" src="./google.svg" alt="" 
              width={0}
              height={0}
              fill // Automatically adjusts to parent width and height
              style={{ objectFit: "contain" }} // Adjusts how the image scales
              />
              Login with Google
            </button>
          </div>

          <div className="flex items-center justify-between mt-4 mb-4">
            <span className="w-2/5 border-b dark:border-gray-600 "></span>

            <a
              href="#"
              className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or
            </a>

            <span className="w-2/5 border-b dark:border-gray-400 "></span>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 placeholder-gray-600 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full placeholder-gray-600 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>

            <button className="w-full bg-[#007BFF] hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Dont have an account?{" "}
            <a
              href="/signup"
              className="text-[#007BFF] hover:text-indigo-500 font-medium"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
