"use client";

import { useState } from "react";

export default function SubmitEmail() {
  const [status, setStatus] = useState("");

  return (
    <div className=" ">
      
      <form
        action="https://formsubmit.co/70b3701a677977a7618e88d9bff98374" // Replace with your FormSubmit URL
        method="POST"
        className="flex flex-col space-y-3"
        onSubmit={() => setStatus("Sending...")}
      >
        
        <input
                type="name"
                name='name'
                placeholder="Your name"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
        <input
                type="email"
                name='email'
                placeholder="Your email address"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
        
        <input type="hidden" name="_captcha" value="false" />
        <button
                type="submit"
                className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Subscribe
              </button>
      </form>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </div>
  );
}
