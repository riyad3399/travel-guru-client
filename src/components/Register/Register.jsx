import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const firstname = form.firstname.value;
    const lastname = form.lastname.value;
    const username = form.username.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(firstname, lastname, username, password, confirm);

    if (password !== confirm) {
      setError("Your password not match");
      return;
    }

    createUser(username, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleRegister}
        className=" sm:w-3/6 mx-auto mt-20 shadow-2xl p-8"
      >
        <p className="text-center text-red-500">{error}</p>
        <p className="text-5xl font-semibold my-6 text-center">
          Please Register
        </p>
        <div className="mb-4 ml-16 w-full">
          <label htmlFor="name" className="block text-lg">
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            className="input input-bordered input-secondary w-3/4"
            required
          />
        </div>
        <div className="ml-16 w-full">
          <label htmlFor="name " className="block text-lg ">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            className="input input-bordered input-secondary w-3/4 "
            required
          />
        </div>
        <div className="ml-16 my-4 w-full">
          <label htmlFor="username  " className="block text-lg">
            UserName and Email
          </label>
          <input
            type="email"
            name="username"
            className="input input-bordered input-secondary w-3/4 "
            required
          />
        </div>
        <div className="ml-16 w-full">
          <label htmlFor="password" className="block text-lg">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="input input-bordered input-secondary w-3/4 "
            required
          />
        </div>
        <div className="ml-16 my-4 w-full">
          <label htmlFor="password " className="block text-lg mb-2">
            consfirm Password
          </label>
          <input
            type="password"
            name="confirm"
            className="input input-bordered input-secondary w-3/4 "
            required
          />
        </div>
        <p className="ml-16">
          You Have Already Account?{" "}
          <Link className="text-blue-500" to="/login">
            Login
          </Link>
        </p>
        <input
          className="btn btn-success w-3/4 mt-4 ml-16"
          type="submit"
          value="Register"
        />
        <div className="ml-16"></div>
      </form>
    </div>
  );
};

export default Register;
