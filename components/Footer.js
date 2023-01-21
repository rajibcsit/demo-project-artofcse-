import Link from "next/link";
function Footer() {
  return (
    <div>
      <section id="navbar">
        <nav class="p-5 bg-black shadow md:flex md: items-center md: justify-between">
          <p class="text-green-500">
            Copyrights © 2023 All Reserved by
            <span class="text-white hover:text-cyan-500 "> Art of CSE </span>
          </p>

          <div class="text-right">
            <ul class="md:flex md:items-center md:z-auto md:static absolute bg-black w-full left-0 md:py-0 py-4 md:pl-0 p1-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
              <Link href="/info/about">
                <li class="mx-4 my-6 md:my-0 text-base text-white hover:text-cyan-500 duration-500">
                  About
                </li>
              </Link>
              <Link href="/info/contact">
                <li class="mx-4 my-6 md:my-0 text-base text-white hover:text-lime-500 duration-500">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
}
export default Footer;
