import Link from "next/link";

function About() {
  return (
    <div>
      <>
        <section id="intro" class="bg-gradient-to-r from-cyan-500 to-green-200">
          <div class="container">
            <div class="grid place-items-center pt-10 pb-6 ">
              <div class="grid place-items-center">
                <h1 class="text-2xl text-white font-semibold"> Welcome To Art of CSE</h1>
              </div>
            </div>
          </div>
        </section>

        <section class="about bg-white pb-80">
          <div class="container grid place-items-center justify-center">
            <div class="grid place-items-center justify-center pt-7">
              <p class="text-black text-sm">
                artofcse.com is a programming based community which focuses on several aspects of
                computer science and engineering such as programming, data structure and algorithm,
                problem-solving etc. Beside all these, it provides web design, web development and
                application development courses to build up creative and productive programmers and
                developers. <br /> <br />
                We believe CSE is a creative subject to show off ones talent and to build up new
                technologies in order to make human life easier and comfortable.
                <br /> <br /> From that feeling, artofcse.com emerged in 2016 with a community
                including some skilled trainers and programmers which have been committed to
                heightening programming skills together through exchanging knowledge. <br /> <br />
                Artofcse always welcomes your idea, opinion and contribution to make this community
                better.
                <Link href="/info/contact" class="text-cyan-500 hover:underline">
                  Contact us
                </Link>
                <br /> <br />
                Find our course to take your programming and development skills to the next level.
                <Link href="/learning/courses" class="text-cyan-500 hover:underline">
                  Our Courses
                </Link>
              </p>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default About;
