import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog Details Page - Solid SaaS Boilerplate",
  description: "This is Blog details page for Solid Pro",
  // other metadata
};

const SingleBlogPage = async () => {
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <form
                  action="https://formbold.com/s/unique_form_id"
                  method="POST"
                >
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search Here..."
                      className="w-full rounded-lg border border-stroke px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />

                    <button
                      className="absolute right-0 top-0 p-5"
                      aria-label="search-icon"
                    >
                      <svg
                        className="fill-black transition-all duration-300 hover:fill-primary dark:fill-white dark:hover:fill-primary"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                  Categories
                </h4>

                <ul>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Blog</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Events</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Grids</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">News</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Rounded</a>
                  </li>
                </ul>
              </div>

              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/blog/blog-01.png"}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Nurturing Future Coders
                </h2>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">Author: </span>{" "}
                    Fatuma Abera and Hayat Tahir
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Published On: November 1, 2024
                    </span>{" "}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Category:
                    </span>
                    Boot Camp Experience
                  </li>
                </ul>

                <div className="blog-details">
                  <p>
                    As the sun shone brightly, I welcomed a new cohort of eager
                    students to our summer coding boot camp at Aweliya Secondary
                    School. With excitement in the air, I knew that this would
                    be a transformative experience not just for the students,
                    but for me as an instructor as well. Over the weeks, I
                    witnessed incredible growth, creativity, and resilience, and
                    I am excited to share some of the highlights of this
                    journey.
                  </p>

                  <p>
                    <h3 className="pt-8">
                      <b>The First Week </b>
                    </h3>
                    Setting the Foundation The first week of boot camp is always
                    a mix of anticipation and anxiety. Students arrived with
                    varying levels of experience and age from 7 to 14. All I
                    could see was the determination in their eyes. We dove into
                    the basics of Scratch, HTML and CSS, and I made it a
                    priority to create an inclusive environment where questions
                    were encouraged. Watching their initial struggles turn into
                    small victories as they built their first webpages was
                    incredibly rewarding.
                    <h3 className="pt-8">
                      <b>Project-Based Learning: A Hands-On Approach </b>
                    </h3>
                    As we moved into project-based learning, the energy in the
                    classroom shifted. Collaboration became the heartbeat of our
                    boot camp. Students formed groups to tackle real-world
                    projects, and I facilitated their brainstorming sessions. I
                    loved watching them share ideas, solve problems, and learn
                    from one another. Throughout the boot camp, students
                    demonstrated their commitment through a variety of exciting
                    projects. They utilized Scratch to create engaging games,
                    developed animations, and even built a real-world shopping
                    tracker app. As they continued to level up their skills,
                    they designed websites that not only reflected their
                    personalities but also addressed real-world problems.
                    <h3 className="pt-8">
                      <b>Navigating Challenges Together </b>
                    </h3>
                    Challenges are an inevitable part of learning to code, and I
                    encouraged my students to embrace these moments. There were
                    times when they felt stuck, frustrated by bugs or complex
                    concepts. I recall a specific instance when the students
                    were tasked with creating a website using advanced CSS
                    concepts. The styling presented some challenges, but what
                    truly impressed me was their determination to research and
                    tackle the issues overnight. When they returned the next
                    day, they had found solutions and improved their designs
                    significantly. Their resilience as they persevered through
                    challenges and eventually triumphed was one of the most
                    fulfilling aspects of my role.
                    <h3 className="pt-8">
                      <b>Codeathons: A Fun and Engaging Challenge </b>
                    </h3>
                    It was an incredible experience where students had the
                    opportunity to showcase their skills while competing against
                    their friends. The strong bonds they formed made the event
                    enjoyable, regardless of who emerged as the winner. This
                    setting not only allowed them to display their talents but
                    also provided valuable lessons as they learned from their
                    mistakes."

                    <div className="flex flex-wrap gap-5">
                      <Image
                        src={"/images/blog/blog-01.png"}
                        width={350}
                        height={200}
                        alt="image"
                        className="mt-10"
                      />
                      <Image
                        src={"/images/blog/blog-02.png"}
                        width={350}
                        height={200}
                        alt="image"
                        className="mt-10"
                      />
                    </div>

                    <h3 className="pt-8">
                      {" "}
                      <b> Conclusion: The Impact of Teaching </b>{" "}
                    </h3>
                    As the summer boot camp came to a close, they left with not
                    only newfound coding skills but also confidence and a sense
                    of belonging in the tech community. I believe they have
                    gained valuable insights and clarity about their future
                    aspirations. Teaching this boot camp reaffirmed my belief in
                    the potential of each student. I am excited to see where
                    their journeys take them and grateful for the opportunity to
                    play a part in their development as future coders.
                  </p>


                </div>

                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
