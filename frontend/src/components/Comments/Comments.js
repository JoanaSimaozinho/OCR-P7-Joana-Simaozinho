import * as React from "react";
import { useState } from "react";
import { PaperClipIcon } from "@heroicons/react/24/outline";


export default function Comments() {

    const [post, setPost] = useState("");
    const [message, setMessage] = useState("");
    const [comment, setComment] = useState("")

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(post);
      console.log(comment);
      try {
        fetch("http://localhost:4000/api/auth/post", {
          method: "POST",
          body: JSON.stringify({comment:comment, post:post}),
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
        <div className="flex-1 min-w-0">
          <form action="#" onChange={handleSubmit}>
            <div className="border-b border-gray-200 focus-within:border-red-600">
              <label htmlFor="comment" className="sr-only">
                Commentaire ?
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
              </div>
              <div className="flex-shrink-0">
                <button
                  type="submit" onChange={(e) => setPost(e.target.value)}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#FD2D01] border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Commenter
                </button>
              </div>
              <div className="message">{message ? <p>{message}</p> : null}</div>
            </div>
          </form>
        </div>
      </>
    )
  }