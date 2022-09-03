import React from 'react';
import { Disclosure, Menu } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Routes, Route, Link } from "react-router-dom";


const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Profil', href: '#' },
  { name: 'Réglages', href: '#' },
  { name: 'Déconnexion', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Header() {
  return (
    <>
    {/* Div de routes */}
    <div>
        <Routes>
        {/* Route Header */}
        <Route path="/" element={<Header />} />
        {/* route Profile */}
        <Route path="profile" element={<Profile />} />
         {/*Route Error page */}
        <Route path="error" element={<Error />} /> 
      </Routes>
    </div>

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
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <button
                      type="button"
                      className="rounded-full bg-white p-1 text-[#FD2D01] hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-[#FD2D01] focus:ring-offset-2"
                    >
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
                      aria-current={item.current ? 'page' : undefined}
                    >
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
                      className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FD2D01] focus:ring-offset-2"
                    >
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
    </>
  )
}

function Profile() {
  return (
    <div></div>
  )
}

function Error() {
  return (
    <>
      <main
        className="min-h-full bg-top bg-cover sm:bg-top"
        style={{
          backgroundImage:
            'url("../img/pageerror.jpg")',
        }}
      >
        <div className="px-4 py-16 mx-auto text-center max-w-7xl sm:px-6 sm:py-24 lg:px-8 lg:py-48">
          <p className="text-base font-semibold text-black text-opacity-50">404</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Uh oh! Je crois que vous êtes perdu.</h1>
          <p className="mt-2 text-lg font-medium text-black text-opacity-50">
          Il semble que la page que vous recherchez n'existe pas.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-black text-opacity-75 bg-white bg-opacity-75 border border-transparent rounded-md sm:bg-opacity-25 sm:hover:bg-opacity-50"
            >
              Retour à l'Accueil
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default Header
