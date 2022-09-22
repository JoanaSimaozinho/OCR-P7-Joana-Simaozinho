import * as React from "react";

export default function Profile() {
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