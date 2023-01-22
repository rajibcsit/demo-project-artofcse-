import Link from "next/link";
function video() {
  return (
    <div>
      <>
        <div class="grid grid-cols-2 place-content-stretch">
          <div>
            <span
              class="absolute text-white text-4xl left-4 cursor-pointer"
              onclick="openSidebar()"
            >
              <i class="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
            </span>
            <div class="sidebar fixed lg:left-0 p-2 w-[300px] overflow-y-auto text-center sidebar">
              <div class="text-gray-100 text-xl">
                <div class="p-2.5 mt-1 flex items-center">
                  <i class="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>

                  <i class="bi bi-x cursor-pointer ml-28 lg:hidden" onclick="openSidebar()"></i>
                </div>
                <div class="my-2 bg-gray-600 h-[1px]"></div>
              </div>
              <div class="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-white">
                <i class="bi bi-search text-sm"></i>
                <input
                  type="text"
                  placeholder="Search"
                  class="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
                />
              </div>
              <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointe">
                <i class="bi bi-house-door-fill"></i>
                <Link href="#">
                  <span class="text-sm text-cyan-700 font-bold hover:underline">
                    Object Oriented PHP
                  </span>
                </Link>
              </div>

              <div class="my-4 bg-gray-600 h-[1px]"></div>
              <div
                class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                onclick="dropdown()"
              ></div>
            </div>
          </div>
          <div class="bg-white mt-2">
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/2_16ZoJ-eh4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div class="mt-3 pb-3">
              <p class="text-sm">
                Object Oriented PHP, Design Patterns and Principles গুলো নিয়ে একটি নতুন Course শুরু
                করতে যাচ্ছি। অবজেক্ট অরিয়েন্টেড প্রোগ্রামিং এর অনেক ফিচার সকলে বোঝে কিন্তু কোথায়
                কোনটা কিভাবে ব্যবহার করতে হয় সেটা বুঝতে সমস্যা হয়। বিশেষ করে Interface, Abstract
                Class, Static Methods and Properties, trait এগুলো কিভাবে ব্যবহার করতে হয় সকলেই
                জানে। কিন্তু ডেভেলপমেন্ট এর ক্ষেত্রে কোথায় কোনটা ব্যবহার করা উচিত এবং ব্যবহার করলে
                কি সুবিধা হবে এটা বুঝতে অনেকেই সমস্যায় পড়ে যায়। Object-oriented স্টাইলে Code কে
                কি করে সুন্দরভাবে Organize করতে হয় সেটা এই কোর্সে আলোচনা করব।আশা করি কোর্স টি সকলের
                ভাল লাগবে।
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default video;
