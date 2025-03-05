"use client";

import { useState } from "react";

export default function ConfirmationForm() {
    const [status, setStatus] = useState("");
    const [imagePreview, setImagePreview] = useState(null);

    // Handle image preview
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="bg-gray-50 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Send Us your mailing receipt
            </h2>
            <form
                className="space-y-6"
                action="https://formsubmit.co/1a72d6e0148e554effa6ca87d5efc73a" // Replace with your FormSubmit URL
                method="POST"
                encType="multipart/form-data" // Required for file uploads
                onSubmit={() => setStatus("Sending...")}
            >
                {/* Name Field */}
                <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2 text-left">
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

                {/* Email Field */}
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

                

                {/* Message Field */}
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

                {/* Image Upload Field */}
                <div>
                    <label htmlFor="image" className="block text-gray-700 font-medium mb-2 text-left">
                        Upload Your Receipt
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleImageChange}
                    />
                    {imagePreview && (
                        <div className="mt-4">
                            <p className="text-sm text-gray-600 mb-2">Image Preview:</p>
                            <img
                                src={imagePreview}
                                alt="Preview"
                                className="w-32 h-32 object-cover rounded-lg"
                            />
                        </div>
                    )}
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Submit Message
                    </button>
                </div>
            </form>
            {status && <p className="mt-2 text-sm">{status}</p>}
        </div>
    );
}