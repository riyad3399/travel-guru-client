import React, { useContext, useState } from "react";
import { FaGoogle, FaGithub, FaEye } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [error, setError] = useState("");
  const [show, setShow] = useState(true);
  const auth = getAuth();

  const { signIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        toast.success('Login successful', {theme: 'dark', autoClose:2000})
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Login succerrful", {theme: 'dark', autoClose:2000});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggolPassword = () => {
    if (show) {
      setShow(!show);
    } else {
      setShow(!show);
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleLogin}
        className=" sm:w-3/6 mx-auto mt-20 shadow-2xl p-8 rounded-lg "
      >
        <p className="text-5xl font-semibold my-6 text-center">Please Login</p>
        <p className="text-center text-red-500 my-5">{error}</p>
        <div className="mb-4 ml-16 w-full">
          <label htmlFor="email" className="block text-lg">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="input input-bordered input-secondary w-3/4"
            required
          />
        </div>
        <div className="ml-16 w-full">
          <label htmlFor="password text-lg " className="block">
            Password
          </label>
          <div className="relative w-full">
            <input
              type={show ? "password" : "text"}
              name="password"
              className="input input-bordered input-secondary w-3/4 "
              required
            />
            <FaEye
              onClick={toggolPassword}
              className="absolute top-4 right-40"
            />
          </div>
        </div>
        <input
          className="btn btn-success w-3/4 mt-4 ml-16"
          type="submit"
          value="Login"
        />
        <p className="ml-16 my-2">
          Travel guru new? go{" "}
          <Link className="text-blue-500 " to="/register">
            Register
          </Link>
        </p>
        <div className="ml-16 w-full">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline btn-primary w-3/4 my-4"
          >
            <FaGoogle className="mr-2" /> Login With Google
          </button>
          <button className="btn btn-outline w-3/4">
            <FaGithub className="mr-2" /> Login With Github
          </button>
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
