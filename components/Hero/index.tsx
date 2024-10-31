"use client";

import LayoutGrid from "@/components/layoutgird";


interface HeroProps {}

const cards = [
  {
    id: 1,
    src: "/image1-min.jpg",
    content: "Innovative Learning Solutions",
    className: "col-span-1"
  },
  {
    id: 2,
    src: "/image2.jpg",
    content: "Interactive Workshops",
    className: "col-span-1"
  },
  {
    id: 3,
    src: "/image3.jpg",
    content: "Expert Mentorship",
    className: "col-span-1"
  },
  {
    id: 4,
    src: "/image4.jpg",
    content: "Hands-on Projects",
    className: "col-span-1"
  }
];

const Hero: React.FC<HeroProps> = () => {

  return (
    <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
          <div className="lg:w-1/2">
            <h2 className="mb-4.5 text-lg font-medium text-black dark:text-white">
              🔥 Brolf Tech
            </h2>
            <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
              Empowering Young Minds Through  {" "}
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                Innovation
              </span>
            </h1>
            <p className="mb-8">
              {/*TODO: REPLACE TEXT WITH MAIN TEXT FROM WEBSITE*/}
              Brolf Tech revolutionizes tech education for children 👪,
              fostering a culture of innovation and learning🏫.
              Our mission is to empower young minds with the skills and knowledge needed to thrive🚀 in the digital age.
            </p>


          </div>

          <div className="animate_right hidden lg:block lg:w-1/2">
            <div className="relative">
              <LayoutGrid cards={cards} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;