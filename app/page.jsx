import Image from "next/image";
import Button from "./components/Button";
import TextHeader from "./components/TextHeader";
import FeaturesCard from "./components/FeaturesCard";
import mac from "./assets/mac.svg";
import content from "./assets/content.svg";
import InfiniteMenu from "./components/InfiniteGallery";
import Partners from "./components/Partners";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import TypeAnimationComp from "./components/TypeAnimationComp";
import { FaGlobeAmericas, FaStar, FaUsers } from "react-icons/fa";
const items = [
  {
    image: "https://picsum.photos/300/300?grayscale",
    link: "https://google.com/",
    // title: "Item 1",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/400/400?grayscale",
    link: "https://google.com/",
    // title: "Item 2",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/500/500?grayscale",
    link: "https://google.com/",
    // title: "Item 3",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/600/600?grayscale",
    link: "https://google.com/",
    // title: "Item 4",
    description: "This is pretty cool, right?",
  },
];
export default function Home() {
  return (
    <main>
      <section className="lg:grid lg:h-screen lg:place-content-center py-5 main">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-prose text-center min-h-[425px] sm:h-auto">
            {/* <h1
              className="text-5xl font-semibold break-words text-center text-[#2091F9]"
              data-aos="fade-up"
            >
              The Best Designs , Based Only in Figma
            </h1> */}
            <TypeAnimationComp />
            <p
              className="mt-4 text-base text-pretty text-white sm:text-lg/relaxed"
              data-aos="fade-up"
            >
              Most calendars are designed for teams. Slate is designed for
              freelancers
            </p>

            <Button title={"Try for free"} />
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
      <section className="flex justify-center items-center" data-aos="fade-up">
        <iframe
          className="w-[90%] aspect-video shadow-md"
          src="https://www.youtube.com/embed/Cx2dkpBxst8?si=Bu9Nr5zcxdbrOFU7"
          title="YouTube video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </section>
      <section className="p-6 py-10 overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24" data-aos="fade-up">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Fastest way to organize
            </h2>

            <p className="text-[#777] md:mt-4 block ">
              Most calendars are designed for teams. Slate is designed for
              freelancers
            </p>

            <div className="mt-4 md:mt-8">
              <Button title={"Try For Free"} />
            </div>
          </div>
        </div>

        <Image
          alt="mac"
          src={mac}
          className="h-56 w-full object-contain sm:h-full drop-shadow-xl drop-shadow-[#444]"
          data-aos="fade-up"
        />
      </section>
      <section className="relative overflow-hidden gap-8 bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center p-4">
        <Image
          alt="service"
          src={content}
          className="h-full w-full object-contain sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px] drop-shadow-lg drop-shadow-purple-600"
          data-aos="fade-up"
        />
        <div
          className="flex flex-col items-center justify-center gap-3 p-2 m-5"
          data-aos="fade-up"
        >
          <p className="font-bold">At your fingertips</p>
          <h2 className="font-semibold text-4xl text-center">
            Lightning fast prototyping{" "}
          </h2>
          <div className="text-center">
            <p className="font-bold">Subscribe to our Newsletter</p>
            <span className="text-[#777]">
              Available exclusivery on Figmaland
            </span>
          </div>
          <form className="flex gap-2" data-aos="fade-up">
            <input
              type="text"
              placeholder="Your Email"
              className="bg-[#eee] py-2 px-4 rounded-md text-black outline-0"
            />
            <input
              type="button"
              value={"Subscribe"}
              className="bg-purple-600 py-2 px-4 rounded-md text-white shadow-sm cursor-pointer hover:bg-purple-700 transition-all outline-0"
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
      <section>
        <Partners />
      </section>
      <section
        style={{ height: "600px", position: "relative" }}
        data-aos="fade-up"
      >
        <InfiniteMenu items={items} />
      </section>
      <Pricing />
      <section className="py-14 bg-gray-50">
        <TextHeader
          title="Our Impact"
          subtitle="Trusted and growing rapidly around the world"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 mx-auto px-4">
          {/* Card 1 */}
          <div
            data-aos={"fade-up"}
            className="col-span-1 bg-white shadow-md rounded-xl p-6 w-full flex items-start gap-4 hover:shadow-xl transition-all duration-300"
          >
            <FaUsers className="text-purple-600 text-5xl" />
            <div>
              <h3 className="text-4xl font-bold text-purple-600">10K+</h3>
              <p className="text-gray-700 font-semibold mt-1">Active Users</p>
              <p className="text-sm text-gray-500 mt-2 max-w-prose">
                Thousands of professionals rely on our platform every day to
                simplify their workflow and increase productivity.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            data-aos={"fade-up"}
            className="col-span-1 bg-white shadow-md rounded-xl p-6 w-full flex items-start gap-4 hover:shadow-xl transition-all duration-300"
          >
            <FaStar className="text-purple-600 text-5xl" />
            <div>
              <h3 className="text-4xl font-bold text-purple-600">4.9/5</h3>
              <p className="text-gray-700 font-semibold mt-1">Average Rating</p>
              <p className="text-sm text-gray-500 mt-2 max-w-prose">
                Rated highly for usability, flexibility, and outstanding
                customer support across various industries.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            data-aos={"fade-up"}
            className="col-span-1 bg-white shadow-md rounded-xl p-6 w-full flex items-start gap-4 hover:shadow-xl transition-all duration-300"
          >
            <FaGlobeAmericas className="text-purple-600 text-5xl" />
            <div>
              <h3 className="text-4xl font-bold text-purple-600">100+</h3>
              <p className="text-gray-700 font-semibold mt-1">
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

      <section className="py-16 mx-auto px-4" data-aos="fade-up">
        <TextHeader title={"Frequently Asked Questions"} />
        <div className="space-y-4">
          <details className="bg-gray-100 rounded-lg p-4 shadow cursor-pointer">
            <summary className="font-semibold text-lg text-purple-600">
              How do I sign up?
            </summary>
            <p className="mt-2 text-gray-700">
              Just click the 'Try for free' button and fill the form.
            </p>
          </details>
          <details className="bg-gray-100 rounded-lg p-4 shadow cursor-pointer">
            <summary className="font-semibold text-lg text-purple-600">
              Can I cancel anytime?
            </summary>
            <p className="mt-2 text-gray-700">
              Yes, you can cancel your subscription whenever you want.
            </p>
          </details>
          <details className="bg-gray-100 rounded-lg p-4 shadow cursor-pointer">
            <summary className="font-semibold text-lg text-purple-600">
              Do you offer support?
            </summary>
            <p className="mt-2 text-gray-700">
              Absolutely, 24/7 support via chat and email.
            </p>
          </details>
        </div>
      </section>

      <section className="bg-white py-4" data-aos="fade-up">
        <TextHeader
          title="What Our Users Say"
          subtitle="Trusted by creatives and freelancers worldwide"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-8xl mx-auto p-4">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="bg-gray-100 p-6 rounded-xl shadow-sm text-center"
            >
              <p className="text-gray-700 mb-4">
                “This app transformed the way I manage my projects.”
              </p>
              <div className="flex justify-center text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-sm text-gray-600">— Alex Johnson</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#ffffff] text-[#222] py-14 text-center">
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
