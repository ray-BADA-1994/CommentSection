/* eslint-disable react/prop-types */

import { useContext, useRef, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ toggle, setToggle }) => {
  const navigate = useNavigate();

  const handleNavigate = () => navigate("/comment");

  const [isProcessing, setIsProcessing] = useState(false);

  const { handleSetToken, token, setToken } = useContext(GlobalContext);

  const emailRef = useRef();

  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsProcessing(true);

    try {
      axios
        .post("http://localhost:4000/api/v1/users/login", {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
        .then((res) => {
          const { token } = res.data;
          setToken(token);
          handleNavigate();
        });

      //   console.log(response);

      //   if (response.status === 200) {
      //     const { token } = response.data;

      //     handleSetToken(token);

      //     // setIsProcessing(false);

      //     navigate("/comment", { state: [token] });

      //     console.log(token);
      //   }
    } catch (error) {
      console.log("Login failed:", error);
    }
  };

  console.log(token);

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={`py-10 px-5 flex flex-col gap-5 min-w-[300px] w-[500px] min-h-[300px] bg-[#f1f2f3] ${
        toggle ? "scale-0 hidden" : "animate-enter scale-100"
      }`}
    >
      <h1 className="text-2xl font-bold">Log In</h1>
      <p className="text-sm font-normal italic capitalize mt-[-5px]">
        fill in the form to log into your account
      </p>
      <input
        type="email"
        className="border border-slate-300 placeholder:text-slate-300 rounded-md py-2 px-2 text-sm"
        placeholder="Email Address"
        required
        title="Enter your email address"
        autoFocus
        ref={emailRef}
      />
      <input
        type="password"
        className="border border-slate-300 placeholder:text-slate-300 rounded-md py-2 px-2 text-sm"
        placeholder="Password"
        required
        title="Enter your password"
        ref={passwordRef}
      />
      <button
        type="submit"
        className="px-5 py-2 bg-[#849493] w-fit rounded-md hover:text-white transition-all"
      >
        {isProcessing ? <div className="loader"></div> : <div>Log In</div>}
      </button>

      <button type="button" className="btn" onClick={() => setToggle(!toggle)}>
        Do not have an account?{" "}
        <span className="font-semibold no-underline hover:underliney transition-ally w-0y hover:w-fity pr-2 py-1 hover:bg-[#849493]y btn-animate">
          Sign Up
        </span>
      </button>
    </form>
  );
};

export default LoginForm;
