import { Inter } from "@next/font/google";
import Link from "next/link";
import Image from "next/image";
import blogImage from "../../public/banner.png";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <section id="intro">
        <div class="grid place-items-center pt-10 bg-gradient-to-r from-cyan-500 to-green-200">
          <div>
            <h2 class="text-white text-xl font-light tracking-widest font-serif">Latest Courses</h2>
          </div>
          <div class="pt-12 pb-5">
            <p class="text-gray-100">
              Find our course to take your programming and development skills to the next level.
            </p>
          </div>
        </div>
      </section>

      <section id="blog">
        <div class="container mx-auto px-4 pt-5 pb-10">
          <div class="flex flex-row">
            <div class="blog-post pr-5">
              <div>
                <Link href="#">
                  <Image src={blogImage} alt="image" />
                </Link>
              </div>

              <div class="blog_details bg-white rounded-md">
                <div class="text-blue-500 indent-3 font-semibold text-sm">
                  <h5>PHP OOP, Design Patterns, Principles</h5>
                </div>
                <div class="pt-4 pb-4">
                  <p class="text-center text-xs font-light text-zinc-700">
                    এই কোর্সে আমি object-oriented PHP এবং কিছু Common Design Patterns, SOLID, KISS,
                    DRY Principles নিয়ে আলোচনা করব
                  </p>
                </div>
              </div>
            </div>
            <div class="blog-post pr-5">
              <div>
                <Link href="#">
                  <Image src={blogImage} alt="image" />
                </Link>
              </div>

              <div class="blog_details bg-white rounded-md">
                <div class="text-blue-500 indent-3 font-semibold text-sm">
                  <h5>PHP OOP, Design Patterns, Principles</h5>
                </div>
                <div class="pt-4 pb-4">
                  <p class="text-center text-xs font-light text-zinc-700">
                    এই কোর্সে আমি object-oriented PHP এবং কিছু Common Design Patterns, SOLID, KISS,
                    DRY Principles নিয়ে আলোচনা করব
                  </p>
                </div>
              </div>
            </div>
            <div class="blog-post pr-5">
              <div>
                <Link href="#">
                  <Image src={blogImage} alt="image" />
                </Link>
              </div>

              <div class="blog_details bg-white rounded-md">
                <div class="text-blue-500 indent-3 font-semibold text-sm">
                  <h5>PHP OOP, Design Patterns, Principles</h5>
                </div>
                <div class="pt-4 pb-4">
                  <p class="text-center text-xs font-light text-zinc-700">
                    এই কোর্সে আমি object-oriented PHP এবং কিছু Common Design Patterns, SOLID, KISS,
                    DRY Principles নিয়ে আলোচনা করব
                  </p>
                </div>
              </div>
            </div>
            <div class="blog-post pr-5">
              <div>
                <Link href="#">
                  <Image src={blogImage} alt="image" />
                </Link>
              </div>

              <div class="blog_details bg-white rounded-md">
                <div class="text-blue-500 indent-3 font-semibold text-sm">
                  <h5>PHP OOP, Design Patterns, Principles</h5>
                </div>
                <div class="pt-4 pb-4">
                  <p class="text-center text-xs font-light text-zinc-700">
                    এই কোর্সে আমি object-oriented PHP এবং কিছু Common Design Patterns, SOLID, KISS,
                    DRY Principles নিয়ে আলোচনা করব
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-row pt-5">
            <div class="blog-post pr-5">
              <div>
                <Link href="#">
                  <Image src={blogImage} alt="image" />
                </Link>
              </div>

              <div class="blog_details bg-white rounded-md">
                <div class="text-blue-500 indent-3 font-semibold text-sm">
                  <h5>PHP OOP, Design Patterns, Principles</h5>
                </div>
                <div class="pt-4 pb-4">
                  <p class="text-center text-xs font-light text-zinc-700">
                    এই কোর্সে আমি object-oriented PHP এবং কিছু Common Design Patterns, SOLID, KISS,
                    DRY Principles নিয়ে আলোচনা করব
                  </p>
                </div>
              </div>
            </div>
            <div class="blog-post pr-5">
              <div>
                <Link href="#">
                  <Image src={blogImage} alt="image" />
                </Link>
              </div>

              <div class="blog_details bg-white rounded-md">
                <div class="text-blue-500 indent-3 font-semibold text-sm">
                  <h5>PHP OOP, Design Patterns, Principles</h5>
                </div>
                <div class="pt-4 pb-4">
                  <p class="text-center text-xs font-light text-zinc-700">
                    এই কোর্সে আমি object-oriented PHP এবং কিছু Common Design Patterns, SOLID, KISS,
                    DRY Principles নিয়ে আলোচনা করব
                  </p>
                </div>
              </div>
            </div>
            <div class="blog-post pr-5">
              <div>
                <Link href="#">
                  <Image src={blogImage} alt="image" />
                </Link>
              </div>

              <div class="blog_details bg-white rounded-md">
                <div class="text-blue-500 indent-3 font-semibold text-sm">
                  <h5>PHP OOP, Design Patterns, Principles</h5>
                </div>
                <div class="pt-4 pb-4">
                  <p class="text-center text-xs font-light text-zinc-700">
                    এই কোর্সে আমি object-oriented PHP এবং কিছু Common Design Patterns, SOLID, KISS,
                    DRY Principles নিয়ে আলোচনা করব
                  </p>
                </div>
              </div>
            </div>
            <div class="blog-post pr-5">
              <div>
                <Link href="#">
                  <Image src={blogImage} alt="image" />
                </Link>
              </div>

              <div class="blog_details bg-white">
                <div class="text-blue-500 indent-3 font-semibold text-sm">
                  <h5>PHP OOP, Design Patterns, Principles</h5>
                </div>
                <div class="pt-4 pb-4">
                  <p class="text-center text-xs font-light text-zinc-700">
                    এই কোর্সে আমি object-oriented PHP এবং কিছু Common Design Patterns, SOLID, KISS,
                    DRY Principles নিয়ে আলোচনা করব
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
