import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders/AuthProviders";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (!password === confirmPassword) {
      return setError("Password doesnt match");
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const user = result.user
          e.target.reset()
      })
      .catch((error) => {
        console.log(error.message);
      });
  };


  return (
    <div className="registerContainer pt-10 pb-10 pl-24 h-fit px-5 bg-[#0f0317] ">
      <h1 className="text-6xl text-white  mb-10">Sign Up</h1>

      <div className=" w-full bg-[#070824] max-w-[40%]  rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleRegister} className="space-y-5 ">
          <div>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-[#131237]  pl-4 p-4 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full "
              placeholder="Name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-[#131237]  pl-4 p-4 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full "
              placeholder="Email"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="bg-[#131237]   pl-4 p-4  text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              id="Confirm password"
              placeholder="Confirm password"
              className="bg-[#131237]   pl-4 p-4  text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border bg-[#131237] rounded  pl-4 p-4 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                className="ml-2 text-sm font-medium text-white dark:text-gray-300"
              >
                I agree to <span>terms and condition</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-[#070824] border border-blue-500 hover:bg-blue-800 hover:transition hover:duration-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
          </button>
          <div className="text-sm text-center font-medium text-gray-500 dark:text-gray-300">
            Already have an account?
            <Link to='/login'>
              <a
                href="#"
                className="text-blue-700 pl-3 hover:underline dark:text-blue-500"
              >
                Login Here
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
