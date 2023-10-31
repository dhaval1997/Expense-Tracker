import React, { useState } from "react";
import Card from "../Container/Card";

const LoginForm = () => {
  const [isLogging, setIsLogging] = useState(true);

  const toggleMode = () => {
    return setIsLogging(!isLogging);
  };
  return (
    <Card>
      <h2 className="text-2xl text-gray-700 text-center font-semibold">
        {isLogging ? "Log In" : "Sign Up"}
      </h2>
      <div className="my-4">
        <form>
          <div className="mb-3 ">
            <input
              type="email"
              required
              className="w-full border bg-gray-50 rounded text-gray-700 h-9 p-3 "
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              required
              min={8}
              className="w-full border bg-gray-50 rounded text-gray-700 focus:border-0 h-9 p-3 "
              placeholder="Password"
            />
          </div>
          {!isLogging && (
            <div className="mb-3">
              <input
                type="password"
                required
                min={8}
                className="w-full border bg-gray-50 rounded text-gray-500 h-9 p-3 "
                placeholder="Confirm Password"
              />
            </div>
          )}
          <div>
            <button
              type="submit"
              className="bg-gray-700 w-full border rounded p-1.5 hover:bg-gray-600 font-semibold text-gray-100 "
            >
              {isLogging ? "Log In" : "Sign Up"}
            </button>
          </div>
        </form>
        {isLogging && (
            <div className="text-center text-gray-700 hover:text-gray-900 font-medium">
                <button className="p-1.5">Forgot Password?</button>
            </div>
        )}
      </div>
      <button
              type="submit"
              className="bg-gray-700 w-full border rounded p-1.5 hover:bg-gray-600 font-semibold text-gray-100 " onClick={toggleMode}
            >
              {isLogging ? "Don't have an account? Sign Up" : "Have an account? Log In"}
            </button>
    </Card>
  );
};

export default LoginForm;
