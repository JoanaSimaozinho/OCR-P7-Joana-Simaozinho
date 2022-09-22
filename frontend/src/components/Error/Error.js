import * as React from "react";
import "./App.css";
import { Link } from "react-router-dom";


export default function Error() {
    return (
      <>
        <main
          className="min-h-full bg-top bg-cover sm:bg-top"
          style={{
            backgroundImage:
              'url("../img/oops.jpg")',
          }}
        >
          <div className="px-4 py-16 mx-auto text-center max-w-7xl sm:px-6 sm:py-24 lg:px-8 lg:py-48">
            <p className="text-4xl font-bold text-[#FD2D01] text-opacity-100">404</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Oh oh ! Je pense que tu es perdu.</h1>
            <p className="mt-2 text-lg font-bold text-white text-opacity-100">
              Il semble que la page que vous recherchez n'existe pas.          
            </p>
            <div className="mt-6">
              <nav>
                <Link className="inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm shadow-sm hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 font-bold bg-slate-50 text-[#FD2D01]" to="/post">Retour à l'accueil</Link>
              </nav>
            </div>
          </div>
        </main>
      </>
    )
  }