"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email.trim())
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4 py-12">
      <div
        className="max-w-md w-full bg-white rounded-lg shadow-md p-8"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          Contact Us
        </h2>
        {submitted && (
          <p className="mb-4 text-green-600 font-medium text-center">
            Thank you for your message! We will get back to you soon.
          </p>
        )}
        <form onSubmit={handleSubmit} noValidate>
          <label
            className="block mb-2 font-medium text-gray-900"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 outline-none ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}

          <label
            className="block mt-4 mb-2 font-medium text-gray-900"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 outline-none ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}

          <label
            className="block mt-4 mb-2 font-medium text-gray-900"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={form.subject}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 outline-none ${
              errors.subject ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Subject of your message"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
          )}

          <label
            className="block mt-4 mb-2 font-medium text-gray-900"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded border resize-none focus:outline-none focus:ring-2 outline-none ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Write your message here..."
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}

          <button
            type="submit"
            className="cursor-pointer mt-6 w-full bg-purple-600 hover:bg-purple-800 transition-colors text-white font-semibold py-3 rounded shadow"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
