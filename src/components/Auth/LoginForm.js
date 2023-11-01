import React, { useRef, useState } from "react";
import Card from "../Container/Card";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const [isLogging, setIsLogging] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  const { logIn, signUp, forgotPassword } = useAuth();

  const toggleMode = () => {
    setIsLogging(!isLogging);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
  
    if (isLogging) {
      setError("");
      try {
        await logIn(email, password);
        navigate('/');
      } catch (err) {
        setError(err.message);
      }
    } else {
      const confirm = confirmRef.current.value;
      if (password === confirm) {
        setError("");
        try {
          await signUp(email, password);
          navigate('/auth');
        } catch (err) {
          setError(err.message);
        }
      } else {
        alert("Password does not match");
      }
    }
  };
  
  const forgotPasswordHandler = () =>{
    const userEmail = prompt("Enter your email:")
    if(userEmail){
      forgotPassword(userEmail)
    }
  }

  return (
    <Card>
      <h2 className="text-2xl text-gray-700 text-center font-semibold">
        {isLogging ? "Log In" : "Sign Up"}
      </h2>
      <div className="my-4">
        <form onSubmit={submitHandler}>
          {error && <h2 className="text-red-600">{error}</h2>}
          <div className="mb-3 ">
            <input
              type="email"
              required
              ref={emailRef}
              className="w-full border bg-gray-50 rounded text-gray-700 h-9 p-3 "
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              required
              name="password"
              ref={passwordRef}
              minLength={8}
              className="w-full border bg-gray-50 rounded text-gray-700 h-9 p-3 "
              placeholder="Password"
            />
          </div>
          {!isLogging && (
            <div className="mb-3">
              <input
                type="password"
                required
                name="confirm"
                ref={confirmRef}
                minLength={8}
                className="w-full border bg-gray-50 rounded text-gray-700 h-9 p-3 "
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
            <button className="p-1.5" onClick={forgotPasswordHandler}>Forgot Password?</button>
          </div>
        )}
      </div>
      <button
        type="submit"
        className="bg-gray-700 w-full border rounded p-1.5 hover:bg-gray-600 font-semibold text-gray-100 "
        onClick={toggleMode}
      >
        {isLogging
          ? "Don't have an account? Sign Up"
          : "Have an account? Log In"}
      </button>
    </Card>
  );
};

export default LoginForm;
