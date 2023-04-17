import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BookmarkIcon, Square2StackIcon } from "@heroicons/react/24/solid";
import { LevelContext } from "../Layout/Layout";

const Modules = () => {
  const data = useLoaderData();

  const [
    expandedMilestone,
    setExpandedMilestone,
    milestone,
    setMilestone,
    toggleMilestone,
    handleMilestoneCover,
    handleBookmark,
    bookmarkMilestion,
    setBookmarkMilestion
  ] = useContext(LevelContext);

  console.log(milestone);

  return (
    <div className="bg-[#010313] lg:py-5">
      <h1 className="text-3xl text-[#d636e0] lg:ml-10 lg:py-5 lg:pl-5 px-3 py-3">
        Complete Web Development Course With Jhankar Mahbub
      </h1>
      <div className="module-container lg:flex lg:flex-row flex-col lg:px-16 gap-4 lg:h-fit px-3 py-3 rounded-md">

        <div className="videoPlayerContainer w-full lg:w-[70%]">
          <div className="player lg:h-96 bg-green-500">
            <img
              className="h-full w-full"
              src={
                milestone.image
                  ? milestone.image
                  : "https://phero-web.nyc3.cdn.digitaloceanspaces.com/promotional-images/Frame-1.jpg"
              }
              alt=""
            />
          </div>

          <div  className="lg:flex lg:flex-row flex-col py-1 bg-blue-500 lg:gap-5 items-center lg:pr-6 justify-end bookmark ">
            <div onClick={()=>handleBookmark(milestone)} className="flex cursor-pointer text-white items-center gap-1">
              <BookmarkIcon className="h-6 w-5"></BookmarkIcon>
              <h1 className="text-lg">Bookmark</h1>
            </div>
            <Square2StackIcon className="h-6 w-5 hidden text-white"></Square2StackIcon>
          </div>

          <div className="title">
            <h1 className="text-2xl my-5 text-white font-semibold">
              {milestone.name}
            </h1>
          </div>

         <div className="next-module space-x-6 flex justify-end">
         <button className="lg:px-5 px-3 text-white border border-[#653ea6] py-1 font-semibold rounded-md bg-[#010313]">
            Previous
          </button>
          <button className=" lg:px-8 px-5 text-black py-1 font-semibold rounded-md bg-[#c3acff]">
            Next
          </button>
         </div>

        </div>

        <div className="moduleListContainer lg:h-[26.5rem]  overflow-y-scroll w-full lg:w-[30%]">
          <div className="bg-[#150f2d] p-3 m-3 rounded-lg">
            <input
              type="text"
              id="simple-search"
              className="bg-[#0b051a] border text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:pl-10 p-2.5 "
              placeholder="Search"
            />
          </div>

          <div>
            {data.data.map((milestone) => (
              <div
                onClick={() => handleMilestoneCover(milestone)}
                className="bg-[#150f2d] p-3 m-3 rounded-lg"
                key={milestone._id}
              >
                <h3
                  className="cursor-pointer p-1 m-1 text-lg text-[#c227b8] rounded-lg  "
                  onClick={() => toggleMilestone(milestone._id)}
                >
                  {milestone.name}
                </h3>

                <div className="bg-[#2b1b42] rounded-md">
                  {expandedMilestone === milestone._id &&
                    milestone.modules.map((module) => (
                      <div
                        className="text-white font-bold mx-2 px-3 py-2"
                        key={module._id}
                      >
                        <h4 className="p-1 cursor-pointer rounded-md">
                          {module.name}
                        </h4>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modules;
