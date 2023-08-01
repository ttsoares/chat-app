"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen w-full">
      {/* wraper */}
      <div className="flex flex-col w-[290px] md:w-[310px] h-[770px]  mt-16 ml-[39px] md:mt-44 md:ml-[455px] rounded-3xl ring-[10px]  md:ring-[15px] ring-white drop-shadow-xl text-[10px]">
        {/* Dent on top */}
        <div className="hidden md:block h-9 w-44 rounded-2xl z-10 absolute -top-[16px] left-[67px] bg-white drop-shadow-none"></div>
        <div className="block md:hidden h-[28px] w-44 rounded-2xl z-10 absolute -top-[10px] left-[70px] bg-white"></div>
        {/* header */}
        <div className="flex flex-col w-full h-28 bg-gradient-to-l from-grad_start to-grad_end rounded-t-xl rounded-b-md ">
          <div className="flex text-white md:p-3 items-center md:mt-5 pt-10">
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
                className="w-9 h-9 rounded-full ring-2 ring-gray-400"
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
              class="w-6 h-6 ml-16"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </div>
        </div>
        {/* chat */}
        <div className="flex w-full h-full flex-col bg-light_violet rounded-b-3xl">
          <h2 className="ml-3 p-3 bg-pale_violet w-2/3 rounded-t-xl rounded-br-xl rounded-bl m-1 text-dark_violet text-xs drop-shadow-lg">
            That sounds great. I&apos;d be happy to discuss more.
          </h2>
          <h2 className="ml-3 p-3 bg-pale_violet w-2/3 rounded-t-xl rounded-br-xl rounded-bl m-1 text-dark_violet text-xs drop-shadow-lg">
            Could you send over some pictures of your dog, please?
          </h2>
          <div className="flex w-full justify-end">
            <Image
              src={"/images/dog-image-1.jpg"}
              width={60}
              height={60}
              alt="dog1"
              className="rounded-xl m-1 pr-1 drop-shadow-lg"
            />
            <Image
              src={"/images/dog-image-2.jpg"}
              width={60}
              height={60}
              alt="dog1"
              className="rounded-xl m-1 pr-1 drop-shadow-lg"
            />
            <Image
              src={"/images/dog-image-3.jpg"}
              width={60}
              height={60}
              alt="dog1"
              className="rounded-xl m-1 pr-1 drop-shadow-lg"
            />
          </div>
          <h2 className="ml-2 p-3 bg-white w-2/3 rounded-t-xl rounded-bl-xl rounded-br m-1 text-dark_violet text-xs self-end drop-shadow-lg">
            Here are a few picturs. She&apos;s a happy girl.
          </h2>
          <h2 className="ml-2 mb-4 p-3 bg-white rounded-t-xl rounded-bl-xl rounded-br m-1 text-dark_violet text-xs self-end drop-shadow-lg">
            Can you make it?
          </h2>
          <h2 className="ml-2 p-3 bg-pale_violet w-2/3 rounded-t-xl rounded-br-xl rounded-bl m-1 text-dark_violet text-xs drop-shadow-lg">
            She looks so happy! The time we discussed works. How long shall I
            take her out for ?
          </h2>
          <div className="items-center justify-between text-xs ml-3 flex w-4/5 h-16 p-3  bg-gradient-to-l from-grad_start to-grad_end rounded-t-xl rounded-br-xl rounded-bl text-light_violet mb-3 mt-1 drop-shadow-lg">
            <div className="flex items-center">
              <div className="h-4 w-4 rounded-full mr-4 ring-2 ring-light_violet/40"></div>
              <h2 className="text-light_violet/70 ">30 minutes walk</h2>
            </div>
            <h2 className="pl-6 font-bold md:text-lg  text-white">$29</h2>
          </div>
          <div className="items-center justify-between text-xs ml-3 flex w-4/5 h-16 p-3  bg-gradient-to-l from-grad_start to-grad_end rounded-t-xl rounded-br-xl rounded-bl text-light_violet mb-3 mt-1 drop-shadow-lg">
            <div className="flex items-center">
              <div className="h-4 w-4 rounded-full mr-4 ring-2 ring-light_violet/40"></div>
              <h2 className="text-light_violet/70 ">1 hour walk</h2>
            </div>
            <h2 className="pl-6 font-bold md:text-lg text-white">$49</h2>
          </div>
          {/* input */}
          <div className="flex bg-white w-11/12 m-auto h-16 rounded-full justify-between items-center p-3 mt-2">
            <p className="text-gray-400 ml-4">Type a message</p>

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

      <div className="flex flex-col  justify-center md:items-start items-center  mx-8 md:mx-0 max-w-[400px]  md:ml-40 mt-10 ">
        <h1 className="font-bold text-4xl mt-10 md:mt-0 mb-6 text-left">
          Simple booking
        </h1>
        <p className="text-gray-400 text-center md:text-left">
          Stay in touch with our dog walkers throught the chat interface. This
          makes it easy to discuss arrangements and make bookings. Once the walk
          has been completed you can rate your walker and book again all through
          the chat.
        </p>
      </div>
    </main>
  );
}
