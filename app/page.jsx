import Image from "next/image";
import Button from "./components/Button";
import TextHeader from "./components/TextHeader";
import FeaturesCard from "./components/FeaturesCard";
import mac from "./assets/mac.svg";
import content from "./assets/content.svg";
import InfiniteMenu from "./components/InfiniteGallery";
import SplitText from "./components/SplitText";
import Partners from "./components/Partners";
import Pricing from "./components/Pricing";

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
          <div className="mx-auto max-w-prose text-center">
            <SplitText
              text="The Best , Based in Figma"
              className="text-5xl font-semibold break-words text-center text-[#2091F9]"
              delay={100}
              duration={0.3}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <SplitText
              text="Most calendars are designed for teams. Slate is designed for
              freelancers"
              className="mt-4 text-base text-pretty text-white sm:text-lg/relaxed"
              delay={100}
              duration={0.3}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />

            <Button title={"Try for free"} />
          </div>
        </div>
      </section>
      <section>
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
      <section className="overflow-hidden gap-8 bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center p-4">
        <Image
          alt="service"
          src={content}
          className="h-full w-full object-contain sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px] drop-shadow-lg drop-shadow-blue-600"
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
              className="bg-[dodgerblue] py-2 px-4 rounded-md text-white shadow-sm cursor-pointer hover:bg-blue-500 transition-all outline-0"
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
      <section className="flow-root my-2 p-4">
        <div className="-my-4 flex flex-col divide-y divide-gray-200">
          <details
            className="group py-4 [&_summary::-webkit-details-marker]:hidden"
            data-aos="fade-up"
          >
            <summary className="flex items-center justify-between gap-1.5 text-gray-900">
              <h2 className="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="block size-5 shrink-0 group-open:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hidden size-5 shrink-0 group-open:block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </summary>

            <p className="pt-4 text-gray-900">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>

          <details
            className="group py-4 [&_summary::-webkit-details-marker]:hidden"
            data-aos="fade-up"
          >
            <summary className="flex items-center justify-between gap-1.5 text-gray-900">
              <h2 className="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="block size-5 shrink-0 group-open:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hidden size-5 shrink-0 group-open:block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </summary>

            <p className="pt-4 text-gray-900">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>

          <details
            className="group py-4 [&_summary::-webkit-details-marker]:hidden"
            data-aos="fade-up"
          >
            <summary className="flex items-center justify-between gap-1.5 text-gray-900">
              <h2 className="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="block size-5 shrink-0 group-open:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hidden size-5 shrink-0 group-open:block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </summary>

            <p className="pt-4 text-gray-900">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}
