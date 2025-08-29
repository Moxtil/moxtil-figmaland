import React from "react";
import Link from "next/link";

export default function Pricing() {
  return (
    <main>
      <section className="p-4">
        <div className="grid grid-cols-1 gap-4 my-2 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
          <div
            className="divide-y divide-purple-600 rounded-2xl border border-purple-600 shadow-xs"
            data-aos="fade-right"
          >
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-medium text-[#fff]">
                Starter
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 text-[#777]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-[#fff] sm:text-4xl">
                  {" "}
                  20${" "}
                </strong>

                <span className="text-sm font-medium text-[#777]">/month</span>
              </p>

              <Link
                className="transition-all mt-4 block rounded-sm border border-purple-600 bg-purple-600 px-12 py-3 text-center text-sm  text-[#ffffff] hover:bg-transparent hover:text-purple-600 focus:ring-3 focus:outline-hidden sm:mt-6"
                href="#"
              >
                Get Started
              </Link>
            </div>

            <div className="p-6 sm:px-8">
              <p className="text-lg font-medium text-[#fff] sm:text-xl">
                What's included:
              </p>

              <ul className="mt-2 space-y-2 sm:mt-4">
                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-[#777]"> 10 users </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-[#777]"> 2GB of storage </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-[#777]"> Email support </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700 shadow-sm"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>

                  <span className="text-[#777]"> Help center access </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700 shadow-sm"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>

                  <span className="text-[#777]"> Phone support </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700 shadow-sm"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>

                  <span className="text-[#777]"> Community access </span>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="divide-y divide-purple-600 rounded-2xl border border-purple-600 shadow-xs"
            data-aos="fade-up"
          >
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-medium text-[#fff]">
                Pro
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 text-[#777]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-[#fff] sm:text-4xl">
                  {" "}
                  30${" "}
                </strong>

                <span className="text-sm font-medium text-[#777]">/month</span>
              </p>

              <Link
                className="transition-all mt-4 block rounded-sm border border-purple-600 bg-purple-600 px-12 py-3 text-center text-sm  text-[#ffffff] hover:bg-transparent hover:text-purple-600 focus:ring-3 focus:outline-hidden sm:mt-6"
                href="#"
              >
                Get Started
              </Link>
            </div>

            <div className="p-6 sm:px-8">
              <p className="text-lg font-medium text-[#fff] sm:text-xl">
                What's included:
              </p>

              <ul className="mt-2 space-y-2 sm:mt-4">
                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-[#777]"> 20 users </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-[#777]"> 5GB of storage </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-[#777]"> Email support </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-[#777]"> Help center access </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700 shadow-sm"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>

                  <span className="text-[#777]"> Phone support </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700 shadow-sm"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>

                  <span className="text-[#777]"> Community access </span>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="divide-y divide-purple-600 rounded-2xl border border-purple-600 shadow-xs"
            data-aos="fade-left"
          >
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-medium text-[#fff]">
                Enterprise
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 text-[#777]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-[#fff] sm:text-4xl">
                  {" "}
                  100${" "}
                </strong>

                <span className="text-sm font-medium text-[#777]">/month</span>
              </p>

              <Link
                className="transition-all mt-4 block rounded-sm border border-purple-600 bg-purple-600 px-12 py-3 text-center text-sm  text-[#ffffff] hover:bg-transparent hover:text-purple-600 focus:ring-3 focus:outline-hidden sm:mt-6"
                href="#"
              >
                Get Started
              </Link>
            </div>

            <div className="p-6 sm:px-8">
              <p className="text-lg font-medium text-[#fff] sm:text-xl">
                What's included:
              </p>

              <ul className="mt-2 space-y-2 sm:mt-4">
                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-[#777]"> 50 users </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-[#777]"> 20GB of storage </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-[#777]"> Email support </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-[#777]"> Help center access </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-[#777]"> Phone support </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-[#777]"> Community access </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
