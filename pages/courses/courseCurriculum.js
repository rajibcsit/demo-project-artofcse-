import Image from "next/image";
import blogImage from "../../public/banner.png";
import Link from "next/link";

function courseCurriculum() {
  return (
    <div>
      <>
        <section id="intro" class="bg-gradient-to-r from-cyan-500 to-green-200">
          <div class="container">
            <div class="grid place-items-center pt-10 pb-6 ">
              <div class="grid place-items-center">
                <div class="flex ">
                  <Image src={blogImage} alt="image" />
                  <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-white	 text-2xl font-bold mb-2">
                      PHP OOP Design Patterns And Principles
                    </h5>
                    <p class="text-white text-sm  mb-4">
                      এই কোর্সে আমি object-oriented PHP এবং কিছু Common Design Patterns, SOLID,
                      KISS, DRY Principles নিয়ে আলোচনা করব
                    </p>
                    <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="courses_curriculum pb-80">
          <div class="grid place-items-center pt-7">
            <h1 class="text-xl font-semibold">Course Curriculum</h1>
            <div class="couresTitle pt-5">
              <div class="bg-gray-400 ">
                <Link href="#">
                  <h3 class="mx-4 text-sm font-semibold">Object Oriented PHP</h3>
                </Link>
              </div>
              <div class="course-subTitle pt-3">
                <Link href="/courses/video">
                  <p class="text-xs hover:bg-cyan-500 duration-500">
                    1 PHP OOP Design Patterns and Principles Course Introduction
                  </p>
                </Link>
              </div>
              <div class="course-subTitle pt-3">
                <Link href="#">
                  <p class="text-xs hover:bg-cyan-500 duration-500">
                    2 PHP OOP Design Patterns and Principles Course Introduction
                  </p>
                </Link>
              </div>
              <div class="course-subTitle pt-3">
                <Link href="#">
                  <p class="text-xs hover:bg-cyan-500 duration-500">
                    3 PHP OOP Design Patterns and Principles Course Introduction
                  </p>
                </Link>
              </div>
              <div class="course-subTitle pt-3">
                <Link href="#">
                  <p class="text-xs hover:bg-cyan-500 duration-500">
                    4 PHP OOP Design Patterns and Principles Course Introduction
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default courseCurriculum;
