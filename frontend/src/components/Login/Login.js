import * as React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        body: JSON.stringify({email:email, password:password}),
          headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
          }
    }).then((res)=> {
      console.log(res.status);
      if (res.status === 200) {
        return res.json();
      } else {
          setMessage("Some error occured");
      }
      })
      .then((resJson)=>{
          setEmail("");
          setPassword("");
          setMessage("User login successfully");
          console.log("redirect");
          setCookie("token", resJson.token, 1)
          
          window.location = "/post";
       })
       .catch((e)=>console.log(e))
      } catch (err) {
        console.log(err);
      }
  }
    return (
      <>
        <div className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img src="../img/icon-left-font.png" alt="logo" />
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900">Connectez-vous</h2>
            <div className="mt-2 text-sm text-center text-gray-600">
              Ou{' '}
              <nav>
                <Link className="font-medium text-[#FD2D01] hover:text-red-500" to="/signup">Inscrivez-vous</Link>
              </nav>              
            </div>
          </div>
  
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Adresse E-mail
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
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
                      autoComplete="current-password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
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
                <div className="message">{message ? <p>{message}</p> : null}</div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
  