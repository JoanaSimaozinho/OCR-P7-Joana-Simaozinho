import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Disclosure, Menu } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment, useState } from 'react'
import { FaceSmileIcon as FaceSmileIconOutline, PaperClipIcon } from '@heroicons/react/24/outline'
import { Listbox, Transition } from '@headlessui/react'
import {
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HeartIcon,
} from '@heroicons/react/20/solid'


const moods = [
  { name: 'Exité(e)', value: 'Exité(e)', icon: FireIcon, iconColor: 'text-white', bgColor: 'bg-red-500' },
  { name: 'Amoureux(se)', value: 'Amoureux(se)', icon: HeartIcon, iconColor: 'text-white', bgColor: 'bg-pink-400' },
  { name: 'Heureux(se)', value: 'Heureux(se)', icon: FaceSmileIcon, iconColor: 'text-white', bgColor: 'bg-green-400' },
  { name: 'Triste', value: 'Triste', icon: FaceFrownIcon, iconColor: 'text-white', bgColor: 'bg-yellow-400' },
  { name: 'Rien', value: null, icon: XMarkIcon, iconColor: 'text-gray-400', bgColor: 'bg-transparent' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Profil', href: 'profile' }, 
  { name: 'Réglages', href: 'error' },
  { name: 'Déconnexion', href: '/' },
]

function handleSubmit(event) {
  console.log("handleSubmit");
  event.preventDefault()
  // Todo
  // Appeler server pour creer nouvel user
  // Avec token loger user
}

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Route login */}
        <Route path="/" element={<Login />} />
        {/* route signup */}
        <Route path="signup" element={<Signup />} /> 
        {/* Route Post */}
        <Route path="post" element={<Post />} /> 
        {/* route Profile */}
        <Route path="profile" element={<Profile />} />
         {/*Route Error page */}
        <Route path="error" element={<Error />} /> 
      </Routes>
      
    </div>
  );
}


function Login() {
  return (
    <>
      <div className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img src="../img/icon-left-font.png" alt="logo" />
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

function Signup() {
  return (
       <>
        <div className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img src="../img/icon-left-font.png" alt="logo" />
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900">Inscrivez-vous</h2>
            <p className="mt-2 text-sm text-center text-gray-600">
              Ou{' '}
              <nav>
                <Link className="font-medium text-[#FD2D01] hover:text-red-500" to="/">Connectez-vous</Link>
              </nav>
            </p>
          </div>
  
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" action="#" method="POST">
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

function Post() {
  const [selected, setSelected] = useState(moods[4])
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white border-b border-gray-200">
          {({ open }) => (
            <>
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  <div className="flex">
                    <div className="flex items-center flex-shrink-0">
                      <img className='w-36' src="../img/icon-left-font.png" alt='logo' />
                    </div>
                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'border-transparent hover:border-[#FD2D01] text-gray-500 hover:text-[#FD2D01]'
                              : 'border-transparent text-gray-500 hover:border-[#FD2D01] hover:text-[#FD2D01]',
                            'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}>
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <button
                      type="button"
                      className="rounded-full bg-white p-1 text-[#FD2D01] hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-[#FD2D01] focus:ring-offset-2">
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="w-6 h-6" aria-hidden="true" />
                    </button>
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FD2D01] focus:ring-offset-2">
                          <span className="sr-only">Open user menu</span>
                          <img className="w-8 h-8 rounded-full" src={user.imageUrl} alt="logo" />
                        </Menu.Button>
                      </div>
                    </Menu>
                  </div>
                  <div className="flex items-center -mr-2 sm:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-[#FD2D01] hover:bg-gray-100 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-[#FD2D01] focus:ring-offset-2">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-[#FD2D01] border-[#FD2D01] text-[#FD2D01]'
                          : 'border-transparent text-gray-600 hover:bg-red-50 hover:border-[#FD2D01] hover:text-[#FD2D01]',
                        'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}>
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <img className="w-10 h-10 rounded-full" src={user.imageUrl} alt="logo" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">{user.name}</div>
                      <div className="text-sm font-medium text-gray-500">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FD2D01] focus:ring-offset-2">
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="w-6 h-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <img
          className="inline-block w-10 h-10 rounded-full"
          src="img/errorpage.jpg"
          alt=""
        />
      </div>
      <div className="flex-1 min-w-0">
        <form action="#">
          <div className="border-b border-gray-200 focus-within:border-red-600">
            <label htmlFor="comment" className="sr-only">
              Quoi de neuf ?
            </label>
            <textarea
              rows={3}
              name="comment"
              id="comment"
              className="block w-full p-0 pb-2 border-0 border-b border-transparent resize-none focus:border-indigo-600 focus:ring-0 sm:text-sm"
              placeholder="Quoi de neuf ?"
              defaultValue={''}
            />
          </div>
          <div className="flex justify-between pt-2">
            <div className="flex items-center space-x-5">
              <div className="flow-root">
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-10 h-10 -m-2 text-gray-400 rounded-full hover:text-gray-500"
                >
                  <PaperClipIcon className="w-5 h-5" aria-hidden="true" />
                  <span className="sr-only">Ajouter un fichier</span>
                </button>
              </div>
              <div className="flow-root">
                <Listbox value={selected} onChange={setSelected}>
                  {({ open }) => (
                    <>
                      <Listbox.Label className="sr-only"> Ton mood </Listbox.Label>
                      <div className="relative">
                        <Listbox.Button className="relative inline-flex items-center justify-center w-10 h-10 -m-2 text-gray-400 rounded-full hover:text-gray-500">
                          <span className="flex items-center justify-center">
                            {selected.value === null ? (
                              <span>
                                <FaceSmileIconOutline className="flex-shrink-0 w-6 h-6" aria-hidden="true" />
                                <span className="sr-only"> Ajoute ton mood </span>
                              </span>
                            ) : (
                              <span>
                                <span
                                  className={classNames(
                                    selected.bgColor,
                                    'flex h-8 w-8 items-center justify-center rounded-full'
                                  )}
                                >
                                  <selected.icon className="flex-shrink-0 w-5 h-5 text-white" aria-hidden="true" />
                                </span>
                                <span className="sr-only">{selected.name}</span>
                              </span>
                            )}
                          </span>
                        </Listbox.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-10 py-3 -ml-6 text-base bg-white rounded-lg shadow w-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm">
                            {moods.map((mood) => (
                              <Listbox.Option
                                key={mood.value}
                                className={({ active }) =>
                                  classNames(
                                    active ? 'bg-gray-100' : 'bg-white',
                                    'relative cursor-default select-none py-2 px-3'
                                  )
                                }
                                value={mood}
                              >
                                <div className="flex items-center">
                                  <div
                                    className={classNames(
                                      mood.bgColor,
                                      'w-8 h-8 rounded-full flex items-center justify-center'
                                    )}
                                  >
                                    <mood.icon
                                      className={classNames(mood.iconColor, 'flex-shrink-0 h-5 w-5')}
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <span className="block ml-3 font-medium truncate">{mood.name}</span>
                                </div>
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </>
                  )}
                </Listbox>
              </div>
            </div>
            <div className="flex-shrink-0">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#FD2D01] border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Poster
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

function Profile() {
  return (
    <form className="space-y-6" action="#" method="POST">
    <div className="px-4 py-5 bg-white shadow sm:rounded-lg sm:p-6">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Profil</h3>
          <p className="mt-1 text-sm text-gray-500">
          Ces informations seront affichées publiquement, alors faites attention à ce que vous partagez.          </p>
        </div>
        <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">
          <div>
            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
              A propos
            </label>
            <div className="mt-1">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="you@example.com"
                defaultValue={''}
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">Brève description de votre profil.</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Photo</label>
            <div className="flex items-center mt-1 space-x-5">
              <span className="inline-block w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
                <svg className="w-full h-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <button
                type="button"
                className="px-3 py-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Changer
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Photo de couverture</label>
            <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="w-12 h-12 mx-auto text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative font-medium text-[#FD2D01] bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-[#FD2D01] focus-within:ring-offset-2 hover:text-red-500"
                  >
                    <span>Télécharger un fichier</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">ou glisser déposer</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF jusqu'à 10MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="px-4 py-5 bg-white shadow sm:rounded-lg sm:p-6">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Informations personnelles</h3>
          <p className="mt-1 text-sm text-gray-500">Utilisez une adresse permanente où vous pouvez recevoir du courrier.</p>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                Prénom
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Nom
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                Adresse E-mail
              </label>
              <input
                type="text"
                name="email-address"
                id="email-address"
                autoComplete="email"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Pays
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option>France</option>
                <option>Canada</option>
                <option>United States</option>
              </select>
            </div>

            <div className="col-span-6">
              <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                Adresse
              </label>
              <input
                type="text"
                name="street-address"
                id="street-address"
                autoComplete="street-address"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                Ville
              </label>
              <input
                type="text"
                name="city"
                id="city"
                autoComplete="address-level2"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                Code postal
              </label>
              <input
                type="text"
                name="postal-code"
                id="postal-code"
                autoComplete="postal-code"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="px-4 py-5 bg-white shadow sm:rounded-lg sm:p-6">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
          <p className="mt-1 text-sm text-gray-500">Décidez quelles communications vous souhaitez recevoir et comment.</p>
        </div>
        <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">
          <fieldset>
            <legend className="sr-only">Par Email</legend>
            <div className="text-base font-medium text-gray-900" aria-hidden="true">
              Par Email
            </div>
            <div className="mt-4 space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="comments" className="font-medium text-gray-700">
                    Commentaires
                  </label>
                  <p className="text-gray-500">Soyez averti lorsque quelqu'un publie un commentaire sur une publication.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="candidates"
                    name="candidates"
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="offers"
                    name="offers"
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend className="text-base font-medium text-gray-900 contents">Notifications push</legend>
            <p className="text-sm text-gray-500">Ceux-ci sont livrés par SMS sur votre téléphone mobile.</p>
            <div className="mt-4 space-y-4">
              <div className="flex items-center">
                <input
                  id="push-everything"
                  name="push-notifications"
                  type="radio"
                  className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label htmlFor="push-everything" className="block ml-3 text-sm font-medium text-gray-700">
                  Tout
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="push-email"
                  name="push-notifications"
                  type="radio"
                  className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label htmlFor="push-email" className="block ml-3 text-sm font-medium text-gray-700">
                Identique à l'e-mail
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="push-nothing"
                  name="push-notifications"
                  type="radio"
                  className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label htmlFor="push-nothing" className="block ml-3 text-sm font-medium text-gray-700">
                  Pas de notifications push
                </label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>

    <div className="flex justify-end">
      <button
        type="button"
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Anuler
      </button>
      <button
        type="submit"
        className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-[#FD2D01] border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-[#FD2D01] focus:ring-offset-2"
      >
        Sauvegarder
      </button>
    </div>
  </form>
  )
}

function Error() {
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


export default App
