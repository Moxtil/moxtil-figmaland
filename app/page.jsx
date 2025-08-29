import Image from "next/image";
import Button from "./components/Button";
import TextHeader from "./components/TextHeader";
import FeaturesCard from "./components/FeaturesCard";
import mac from "./assets/mac.svg";
import content from "./assets/AAA.svg";
import { StatCard } from "./components/StatCard";
import Partners from "./components/Partners";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import TypeAnimationComp from "./components/TypeAnimationComp";
import { FaGlobeAmericas, FaStar, FaUsers } from "react-icons/fa";
import { FigmaFrame } from "./components/FigmaFrame";

export default function Home() {
  return (
    <main>
      <section className="lg:grid lg:h-screen lg:place-content-center py-5 main">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 ">
          <div className="mx-auto max-w-2xl text-center flex flex-col items-center justify-evenly min-h-[450px] sm:h-auto px-4 ">
            {/* Hero Title with reserved height */}
            <div className="h-[110px] flex items-center justify-center p-2">
              <TypeAnimationComp />
            </div>

            <div className="flex items-center justify-center gap-6 flex-col">
              {/* Subtitle */}
              <p
                className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-prose"
                data-aos="fade-up"
              >
                Most calendars are designed for teams.{" "}
                <br className="hidden sm:block" />
                Slate is designed for freelancers.
              </p>

              {/* Call to Action */}
              <div className="mt-8">
                <Button title={"Try for free"} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <TextHeader
          title={"Features"}
          subtitle={
            "Most calendars are designed for teams. Slate is designed for freelancers"
          }
        />
        <FeaturesCard />
      </section>
      <FigmaFrame />
      <section className="p-6 py-10 overflow-hidden sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div
            className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
            data-aos="fade-right"
          >
            <h2
              className="text-5xl font-bold text-white mb-4"
              data-aos="fade-right"
            >
              Fastest way to organize
            </h2>

            <p className="text-[#777] md:mt-4 block" data-aos="fade-right">
              Most calendars are designed for teams. Slate is designed for
              freelancers
            </p>

            <div className="mt-4 md:mt-8">
              <Button fade="fade-right" title={"Try For Free"} />
            </div>
          </div>
        </div>

        <Image
          alt="mac"
          src={mac}
          className="h-56 w-full object-contain sm:h-full drop-shadow-xl drop-shadow-[#444]"
          data-aos="fade-left"
        />
      </section>
      <section className="relative overflow-hidden gap-8 sm:grid sm:grid-cols-2 sm:items-center p-4">
        <Image
          width={300}
          height={200}
          alt="service"
          src={content}
          className="h-56 w-full object-contain sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px] drop-shadow-lg drop-shadow-purple-600"
          data-aos="fade-right"
        />
        <div className="flex flex-col items-center justify-center gap-3 p-2 m-5">
          <p className="font-bold" data-aos="fade-left">
            At your fingertips
          </p>
          <h2
            className="font-semibold text-4xl text-center"
            data-aos="fade-left"
          >
            Lightning fast prototyping{" "}
          </h2>
          <div className="text-center">
            <p className="font-bold" data-aos="fade-left">
              Subscribe to our Newsletter
            </p>
            <span className="text-[#777]" data-aos="fade-left">
              Available exclusivery on Figmaland
            </span>
          </div>
          <form className="flex gap-2" data-aos="fade-left">
            <input
              type="text"
              placeholder="Your Email"
              className="bg-[#eee] py-2 px-4 rounded-md text-black outline-0"
            />
            <input
              type="button"
              value={"Subscribe"}
              className="bg-purple-600 py-2 px-4 rounded-md text-white shadow-sm cursor-pointer hover:bg-purple-600 transition-all outline-0"
            />
          </form>
        </div>
      </section>
      <TextHeader
        title={"Partners"}
        subtitle={
          "Most calendars are designed for teams. Slate is designed for freelancers"
        }
      />
      <section className="p-4">
        <Partners />
      </section>
      <section className="mt-16 mb-8" data-aos="fade-up">
        {/* <InfiniteMenu items={items} /> */}
        <StatCard />
      </section>
      <Pricing />
      <section className="py-14" data-aos="fade-up">
        <TextHeader
          title="Our Impact"
          subtitle="Trusted and growing rapidly around the world"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 mx-auto px-4">
          {/* Card 1 */}
          <div
            data-aos={"fade-up"}
            className="col-span-1  border border-purple-600 shadow-sm rounded-xl p-6 w-full flex flex-col items-start gap-4 shadow-purple-600 transition-all duration-300"
          >
            <div>
              <div className="flex flex-row-reverse items-center justify-between gap-2">
                <FaUsers className="text-purple-600 text-5xl" />
                <h3 className="text-4xl font-bold bg-gradient-to-br from-pink-600 via-purple-600 to-purple-800 bg-clip-text text-transparent">
                  10K+
                </h3>
              </div>
              <p className="text-lg font-semibold mt-1 bg-gradient-to-br from-pink-600 via-purple-600 to-purple-800 bg-clip-text text-transparent">
                Active Users
              </p>
              <p className="text-sm text-gray-500 mt-2 max-w-prose">
                Thousands of professionals rely on our platform every day to
                simplify their workflow and increase productivity.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            data-aos={"fade-up"}
            className="col-span-1  border border-purple-600 shadow-sm rounded-xl p-6 w-full flex flex-col items-start gap-4 shadow-purple-600 transition-all duration-300"
          >
            <div>
              <div className="flex flex-row-reverse items-center justify-between gap-2">
                <FaStar className="text-purple-600 text-5xl" />
                <h3 className="text-4xl font-bold bg-gradient-to-br from-pink-600 via-purple-600 to-purple-800 bg-clip-text text-transparent">
                  4.9/5
                </h3>
              </div>
              <p className="text-lg font-semibold mt-1 bg-gradient-to-br from-pink-600 via-purple-600 to-purple-800 bg-clip-text text-transparent">
                Average Rating
              </p>
              <p className="text-sm text-gray-500 mt-2 max-w-prose">
                Rated highly for usability, flexibility, and outstanding
                customer support across various industries.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            data-aos={"fade-up"}
            className="col-span-1 border border-purple-600 shadow-sm rounded-xl p-6 w-full flex flex-col items-start gap-4 shadow-purple-600 transition-all duration-300"
          >
            <div>
              <div className="flex flex-row-reverse items-center justify-between gap-2">
                <FaGlobeAmericas className="text-purple-600 text-5xl" />

                <h3 className="text-4xl font-bold bg-gradient-to-br from-pink-600 via-purple-600 to-purple-800 bg-clip-text text-transparent">
                  100+
                </h3>
              </div>
              <p className="text-lg font-semibold mt-1 bg-gradient-to-br from-pink-600 via-purple-600 to-purple-800 bg-clip-text text-transparent">
                Countries Reached
              </p>
              <p className="text-sm text-gray-500 mt-2 max-w-prose">
                Our global reach extends to over 100 countries, helping teams
                collaborate and succeed worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 mx-auto px-4">
        <TextHeader title={"Frequently Asked Questions"} />
        <div className="space-y-4">
          <details
            className="border-2 border-purple-600 rounded-lg p-4 shadow cursor-pointer"
            data-aos="fade-down"
          >
            <summary className="font-semibold text-lg text-purple-600">
              How do I sign up?
            </summary>
            <p className="mt-2 text-gray-400">
              Just click the 'Try for free' button and fill the form.
            </p>
          </details>
          <details
            className="border-2 border-purple-600 rounded-lg p-4 shadow cursor-pointer"
            data-aos="fade-down"
          >
            <summary className="font-semibold text-lg text-purple-600">
              Can I cancel anytime?
            </summary>
            <p className="mt-2 text-gray-400">
              Yes, you can cancel your subscription whenever you want.
            </p>
          </details>
          <details
            className="border-2 border-purple-600 rounded-lg p-4 shadow cursor-pointer"
            data-aos="fade-down"
          >
            <summary className="font-semibold text-lg text-purple-600">
              Do you offer support?
            </summary>
            <p className="mt-2 text-gray-400">
              Absolutely, 24/7 support via chat and email.
            </p>
          </details>
        </div>
      </section>

      <section className="py-4">
        <TextHeader
          title="What Our Users Say"
          subtitle="Trusted by creatives and freelancers worldwide"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-8xl mx-auto p-4">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="border-2 border-purple-600 p-6 rounded-xl shadow-sm shadow-purple-600 text-center"
              data-aos="fade-up"
            >
              <p className="text-white mb-4">
                “This app transformed the way I manage my projects.”
              </p>
              <div className="flex justify-center text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-sm text-gray-400">— Alex Johnson</p>
            </div>
          ))}
        </div>
      </section>
      <section className=" py-14 text-center">
        <TextHeader
          title={"Ready to level up your workflow?"}
          subtitle={"Start free and discover the power of smart productivity."}
        />

        <Button title="Get Started Now" />
      </section>

      <section>
        <Contact />
      </section>
    </main>
  );
}
