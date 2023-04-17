import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProviders/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const { loginUser,user } = useContext(AuthContext);
  const [error, setError] = useState("");

  const location = useLocation()
  console.log(location.state?.pathname);
  const from = location.state?.pathname || '/modules'

  const navigate = useNavigate()

  const handleLogin= (e) => {
    e.preventDefault();
  
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset()
        navigate(from)
         
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

    return (
        <div className="registerContainer pt-10 pb-10 lg:pl-24 px-4 lg:h-[100vh] lg:px-5 bg-[#0f0317] ">
      <h1 className="text-6xl text-white  mb-10">Login</h1>

      <div className=" w-full bg-[#070824] lg:max-w-[40%]  rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleLogin} className="space-y-5 ">
          
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
          
         
        <div class="flex items-start">
            <div class="flex items-start">
                <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                </div>
                <label for="remember" class="ml-2 text-sm font-medium text-white dark:text-gray-300">Remember me</label>
            </div>
            <a href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot Password?</a>
        </div>
          
          <button
            type="submit"
            className="w-full text-white bg-[#070824] border border-blue-500 hover:bg-blue-800 hover:transition hover:duration-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
          <div className="text-sm text-center font-medium text-gray-500 dark:text-gray-300">
            Dont have an account?
            <Link to='/register'>
            <a
                href="#"
                className="text-blue-700 pl-3 hover:underline dark:text-blue-500"
              >
                Create Account
              </a></Link>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Login;