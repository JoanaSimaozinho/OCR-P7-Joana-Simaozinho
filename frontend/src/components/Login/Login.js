import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.erros.password;
        } else {
          window.location = "/";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
    return (
      <>
        <div className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img src="../icon-left-font.png" alt="logo" />
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900">Connectez-vous</h2>
            <p className="mt-2 text-sm text-center text-gray-600">
              Ou{' '}
              <nav>
                <Link className="font-medium text-[#FD2D01] hover:text-red-500" to="/signup">Inscrivez-vous</Link>
              </nav>              
            </p>
          </div>
  
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" action="" onSubmit={handleLogin} id="sign-up-form">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Adresse E-mail
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={(event) => setEmail(event.target.value)}
                      value={email}
                      className="block w-full appearance-none rounded-md border border-[#FD2D01] px-3 py-2 placeholder-[#FD2D01] shadow-sm focus:border-[#FD2D01] focus:outline-none focus:ring-[#FD2D01] sm:text-sm"
                    />
                  </div>
                </div>
  
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Mot de passe
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      onChange={(event) => setPassword(event.target.value)}
                      value={password}
                      className="block w-full appearance-none rounded-md border border-[#FD2D01] px-3 py-2 placeholder-[#FD2D01] shadow-sm focus:border-[#FD2D01] focus:outline-none focus:ring-[#FD2D01] sm:text-sm"
                    />
                  </div>
                </div>
  
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-[#FD2D01] text-[#FD2D01] focus:ring-[#FD2D01]"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-[#FD2D01]">
                      Se souvenir de moi
                    </label>
                  </div>
                </div>
  
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-[#FD2D01] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Se connecter
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }

  
export default Login