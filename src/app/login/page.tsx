"use client";

import React from "react";
import { Formik } from "formik";
import { emailRegex } from "@/helpers";
import { EmailException } from "@/constant";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-10 w-auto"
          src="https://www.svgrepo.com/show/301692/login.svg"
          alt="login"
        />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-blue-500 max-w">
          <span className="text-black">Or</span>{" "}
          <a
            href="#"
            className="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            Create a new acccount
          </a>
        </p>
      </div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors: { email: string; password: string } = {
            email: "",
            password: "",
          };
          if (!values.email) {
            errors.email = EmailException.RequiredEmailException;
          } else if (!emailRegex.test(values.email)) {
            errors.email = EmailException.InvalidEmailException;
          }
          //TODO: Add validation case for Password as well
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, errors, handleSubmit, handleChange }) => {
          return (
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium leading-5  text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        name="email"
                        placeholder="user@example.com"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                      {errors.email ===
                        EmailException.InvalidEmailException && (
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <svg
                            className="h-5 w-5 text-red-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm font-medium leading-5 text-gray-700">
                      Password
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <input //TODO: Work on backend for Remember_me & for Google login
                        id="remember_me"
                        name="remember"
                        type="checkbox"
                        value="1"
                        className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                      />
                      <label className="ml-2 block text-sm leading-5 text-gray-900">
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm leading-5">
                      <a //TODO: Work on backend for Forgot password
                        href="#"
                        className="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                        onClick={() => handleSubmit}
                      >
                        Sign in
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginPage;
