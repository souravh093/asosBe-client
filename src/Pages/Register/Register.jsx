import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register an Account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="Name"
                name="firstName"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                  {showPassword ? (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      onClick={toggleShowPassword}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.07 4.93a15.9 15.9 0 00-2.34-2.33M1.88 12a15.9 15.9 0 002.34 2.33m16.34 2.34a15.9 15.9 0 002.33-2.34M4.93 19.07a15.9 15.9 0 01-2.33-2.34M12 21.88a15.9 15.9 0 01-2.34-2.33m2.34-16.34a15.9 15.9 0 01-2.33 2.34M9.12 9.12a8 8 0 1011.31 0 8 8 0 00-11.31 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      onClick={toggleShowPassword}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.07 4.93a15.9 15.9 0 00-2.34-2.33M1.88 12a15.9 15.9 0 002.34 2.33m16.34 2.34a15.9 15.9 0 002.33-2.34M4.93 19.07a15.9 15.9 0 01-2.33-2.34M12 21.88a15.9 15.9 0 01-2.34-2.33m2.34-16.34a15.9 15.9 0 01-2.33 2.34M9.12 9.12a8 8 0 1011.31 0 8 8 0 00-11.31 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 16l-4-4m0 0l4-4m
                    4 4l4-4"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>


            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Terms and condition
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-2">
            <p>Already have an account please <Link className="text-blue-500" to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
