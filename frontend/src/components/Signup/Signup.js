import * as React from "react";
import { Link } from "react-router-dom";

function handleSubmit(event) {
  event.preventDefault();
  fetch(`${process.env.REACT_APP_API_URL}signup`)
  .then(() => console.log('Connexion réussie !'))
  .catch(() => console.log('Connexion échouée !'))
  // Todo
  // Appeler server pour creer nouvel user
  // Avec token loger user
}

export default function Signup() {
    return (
         <>
          <div className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <img src="../icon-left-font.png" alt="logo" />
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900">Inscrivez-vous</h2>
              <div className="mt-2 text-sm text-center text-gray-600">
                Ou{' '}
                <nav>
                  <Link className="font-medium text-[#FD2D01] hover:text-red-500" to="/">Connectez-vous</Link>
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
                      S'inscrire
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
    );
  }