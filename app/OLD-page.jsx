"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full">
      {/* Dent at the top of the mobile */}
      <div className="hidden md:block h-8 w-44 rounded-xl z-10 absolute top-[192px] left-[522px] bg-white"></div>
      <div className="block md:hidden h-6 w-44 rounded-xl z-10 absolute top-[54px] left-[100px] bg-white"></div>

      <div className="flex flex-col md:flex-row w-3/4 h-[770px] absolute top-16 left-[50px] md:top-44 md:left-[465px] rounded-3xl ring-[10px] md:ring-[15px] ring-white drop-shadow-lg">
        <div flex flex-col>
          <div className="flex flex-col w-full h-28 bg-gradient-to-l from-grad_start to-grad_end rounded-t-3xl rounded-b-md">
            {/* header */}
            <div className="flex text-white p-3 items-center pt-10">
              {/* Chevron */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              {/* avatar */}
              <div className="w-10 h-10 mr-2 ">
                <Image
                  src={"/images/avatar.jpg"}
                  className="w-9 h-9 rounded-full ring-2 ring-white"
                  alt="avatar"
                  width={30}
                  height={30}
                />
              </div>
              <div className="">
                <h1 className="text-base font-bold text-light_violet">
                  Samuel Green
                </h1>
                <p className="text-xs text-light_magenta">Available to Walk</p>
              </div>
              {/* menu */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 ml-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                />
              </svg>
            </div>
          </div>

          <div className="flex w-full h-full flex-col bg-light_violet rounded-b-3xl border-2 border-black">
            <h2 className="p-3 bg-pale_violet w-2/3 rounded-2xl m-1 text-dark_violet text-xs">
              That sounds great. I&apos;d be happy to discuss more.
            </h2>
            <h2 className="p-3 bg-pale_violet w-2/3 rounded-2xl m-1 text-dark_violet text-xs">
              Could you send over some pictures of your dog, please?
            </h2>
            <div className="flex w-full justify-end">
              <Image
                src={"/images/dog-image-1.jpg"}
                width={60}
                height={60}
                alt="dog1"
                className="rounded-xl m-1 pr-1"
              />
              <Image
                src={"/images/dog-image-2.jpg"}
                width={60}
                height={60}
                alt="dog1"
                className="rounded-xl m-1 pr-1"
              />
              <Image
                src={"/images/dog-image-3.jpg"}
                width={60}
                height={60}
                alt="dog1"
                className="rounded-xl m-1 pr-1"
              />
            </div>
            <h2 className="p-3 bg-white w-2/3 rounded-2xl m-1 text-dark_violet text-xs self-end">
              Here are a few picturs. She&apos;s a happy girl.
            </h2>
            <h2 className="p-3 bg-white w-2/3 rounded-2xl m-1 text-dark_violet text-xs self-end">
              Here are a few picturs. She&apos;s a happy girl.
            </h2>
            <h2 className="p-3 bg-pale_violet w-2/3 rounded-2xl m-1 text-dark_violet text-xs">
              She looks so happy! The time we discussed works. How long shall I
              take her out for ?
            </h2>
            <div className="items-center justify-between text-xs flex w-4/5 h-16 p-3  bg-gradient-to-l from-grad_start to-grad_end rounded-t-3xl rounded-br-3xl rounded-bl-lg text-light_violet mb-3 mt-1">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full mr-2 ring-2 ring-light_violet"></div>
                <h2>30 minutes walk</h2>
              </div>
              <h2 className="pl-6 font-bold text-white">$29</h2>
            </div>
            <div className="items-center justify-between text-xs flex w-4/5 h-16 p-3  bg-gradient-to-l from-grad_start to-grad_end rounded-t-3xl rounded-br-3xl rounded-bl-lg text-light_violet mb-3 mt-1">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full mr-2 ring-2 ring-light_violet"></div>
                <h2>1 hour walk</h2>
              </div>
              <h2 className="pl-6 font-bold text-white">$49</h2>
            </div>
            {/* input */}
            <div className="flex bg-white w-11/12 m-auto h-16 rounded-full justify-between items-center p-3 mt-2">
              <p className="text-gray-300">Type a message</p>

              <div className="w-10 h-10 bg-black flex rounded-full justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-wrap justify-center items-center w-full mt-10 bg-yellow-400">
          <h1 className="font-bold text-3xl mt-10 mb-4">Soooimple booking</h1>
          <p className="text-gray-400 text-center">
            Stay in touch with our dog walkers throught the chat interface. This
            makes it easy to discuss arrangements ans make bookings. Once the
            walk has been completed you can rate your walker and book again all
            through the chat.
          </p>
        </div>
      </div>
    </main>
  );
}
