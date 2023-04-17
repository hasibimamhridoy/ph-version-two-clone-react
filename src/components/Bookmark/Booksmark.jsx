import React, { useContext, useEffect, useState } from "react";
import { LevelContext } from "../Layout/Layout";
import { VideoCameraIcon ,TrashIcon} from "@heroicons/react/24/solid";

const Booksmark = () => {
  const [
    expandedMilestone,
    setExpandedMilestone,
    milestone,
    setMilestone,
    toggleMilestone,
    handleMilestoneCover,
    handleBookmark,
    bookmarkMilestion,
    setBookmarkMilestion,
  ] = useContext(LevelContext);

  console.log(bookmarkMilestion);

  return (
    <div className="bg-[#1c102d] h-screen ">
    
      <div className="bookmarkContainer ">
        <header className="lg:h-60 py-16 space-y-5 text-white text-center  bg-[#2b1b42]">
          <h1 className="text-2xl">Bookmark History</h1>
          <p className="w-[50%] text-center mx-auto text-sm">
            Hello Md. Hasib Imam, You can organize your things here. You can use
            Tag, search to find any specific bookmarked video. Hopefully you
            like it. Stay with us. We won’t let you go..huh
          </p>
        </header>

        <div className="search lg:w-[60%] w-[80%] -translate-y-8 rounded-lg mx-auto bg-[#231237]">
          <form className="flex items-center w-[100%] mx-auto p-3">
            <label for="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-[#2b1b42] text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5  dark:bg-gray-700 "
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>

        <div className="bookItem text-white">
         

           {bookmarkMilestion.map(milestion=>{
            return(
                <div className="bg-[#1c102d] pt-5">

                <div>
                <div className="item rounded-md flex items-center gap-4 justify-between w-[60%] bg-[#231237] px-5 py-8 mx-auto ">
                
                <div className="flex space-x-4 items-center">
                <VideoCameraIcon className="w-5 h-5 text-red-500"></VideoCameraIcon>
                <h1 className="text-md">{milestion.name?milestion.name:'No Name Module'}</h1>
                </div>

                <TrashIcon className="w-5 h-5 text-red-500" ></TrashIcon>
                </div>

            </div>
            <div className="flex justify-end w-[60%] bg-[#231237] pb-5 pr-5 mx-auto">
            <button className="px-5 py-1 font-bold bg-white text-black rounded-2xl">Go</button>
            </div>
            </div>
            )
           })}
           
        </div>
      </div>
    </div>
  );
};

export default Booksmark;
