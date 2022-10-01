import * as React from "react";
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


export default function Post() {
    const [selected, setSelected] = useState(moods[4])

    const [email, setEmail] = useState("");
    const [post, setPost] = useState("");
    const [message, setMessage] = useState("");
    const [comment, setComment] = useState("")

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(email);
      console.log(post);
      console.log(comment);
      try {
        fetch("http://localhost:4000/api/auth/post", {
          method: "POST",
          body: JSON.stringify({email:email, post:post}),
            headers: {'Accept':'application/json','Content-Type':'application/json'}
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
            setPost("");
            setComment("");
            setMessage("Posted successfully");
            console.log("redirect");
            window.location = "/post";
        })
        .catch((e)=>console.log(e))
        } catch (err) {
          console.log(err);
        }
    }
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
          <form action="#" onChange={handleSubmit}>
            <div className="border-b border-gray-200 focus-within:border-red-600">
              <label htmlFor="comment" className="sr-only">
                Quoi de neuf ?
              </label>
              <textarea
                rows={3}
                name="comment"
                id="comment"
                onChange={(e) => setComment(e.target.value)}
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
                  type="submit" onChange={(e) => setPost(e.target.value)}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#FD2D01] border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Poster
                </button>
              </div>
              <div className="message">{message ? <p>{message}</p> : null}</div>
            </div>
          </form>
        </div>
      </div>
      </>
    )
  }