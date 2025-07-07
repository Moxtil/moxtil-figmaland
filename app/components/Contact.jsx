"use client";

import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaUser,
  FaTag,
  FaCommentDots,
} from "react-icons/fa";

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
    <div className="min-h-screen bg-blue-50 flex flex-col md:flex-row items-stretch justify-center px-4 py-12 gap-6">
      <div
        className="md:w-1/2 w-full bg-white rounded-lg shadow-md p-8"
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
            <div className="flex items-center gap-2">
              <FaUser className="text-purple-600" />
              Name
            </div>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 ${
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
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-purple-600" />
              Email
            </div>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 ${
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
            <div className="flex items-center gap-2">
              <FaTag className="text-purple-600" />
              Subject
            </div>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={form.subject}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 ${
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
            <div className="flex items-center gap-2">
              <FaCommentDots className="text-purple-600" />
              Message
            </div>
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded border resize-none focus:outline-none focus:ring-2 ${
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

      <div className="md:w-1/2 w-full bg-white rounded-lg shadow-md p-8 flex flex-col gap-4 md:order-1 -order-1">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Location
        </h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12043.786665891382!2d28.9783596!3d41.0082376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9b3bb40ab3b%3A0xb1c95c3b51fd7f61!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2str!4v1720366000000"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded"
        ></iframe>

        <div className="mt-6 space-y-4 text-gray-700 text-base">
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-purple-600" />
            <span>
              <strong>Address:</strong> Istanbul, Turkey
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-purple-600" />
            <span>
              <strong>Email:</strong> support@example.com
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-purple-600" />
            <span>
              <strong>Phone:</strong> +90 555 555 5555
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FaClock className="text-purple-600" />
            <span>
              <strong>Working Hours:</strong> Mon - Fri: 9am - 6pm
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
