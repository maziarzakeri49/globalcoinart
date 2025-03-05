"use client";

import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState("");

    return (

        <div className="bg-gray-50 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Send Us a Message
            </h2>
            <form className="space-y-6"
                action="https://formsubmit.co/1a72d6e0148e554effa6ca87d5efc73a" // Replace with your FormSubmit URL
                method="POST"

                onSubmit={() => setStatus("Sending...")}>
                <div>
                    <label htmlFor="name" className=" block text-gray-700 font-medium mb-2 text-left">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Gill Roy"
                        className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2 text-left">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="gill.roy@example.com"
                        className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2 text-left">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2 text-left">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Write your message here..."
                        className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    ></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Send Message
                    </button>
                </div>
            </form>
            {status && <p className="mt-2 text-sm">{status}</p>}
        </div>


    )
}
