import React from 'react'

export default function PostList() {

  return (
    <div className="flex items-start px-4 py-4 space-x-4">
      
      <div className="flex-1 min-w-0">
        <form action="#" className="relative">
          <div className="overflow-hidden border border-gray-300 rounded-lg shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
            <label htmlFor="comment" className="sr-only">
              {/* Post deja posté */}
            </label>
            

            {/* Spacer element to match the height of the toolbar */}
            <div className="py-2" aria-hidden="true">
              {/* Matches height of button in toolbar (1px border + 36px content height) */}
              <div className="py-px">
                <div className="h-9" />
              </div>
            </div>

            <div className='flex'>
            <div className="flex-shrink-0 w-1/2">
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full px-4 py-2 font-medium text-center text-white bg-red-600 border rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >

                J'aime
              </button>
            </div>
            <div className="flex-shrink-0 w-1/2">
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full px-4 py-2 font-medium text-center text-white bg-red-600 border rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >

                Commentaire
              </button>
            </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
