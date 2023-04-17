import React from "react";
import { useLoaderData } from "react-router-dom";

const LeaderBoard = () => {

    const leaderBoard = useLoaderData()
    console.log(leaderBoard);
  return (
    <div className="bg-[#0e0618] text-white lg:px-24 px-4 lg:pt-14 pt-4 lg:pb-20 pb-4">
      
      <h1 className="text-4xl lg:pl-32 lg:py-5 text-center">Leader Board</h1>
      <div className="boardContainer lg:w-[75%] w-full py-6 lg:mt-0 mt-5 px-3 bg-[#653ef5] rounded-xl mx-auto ">
      
      <div className="flex items-center justify-between px-3">
        <h1>Your Position</h1>
        <h1>Assignment</h1>
        <h1>Avg</h1>
      </div>

      <div className="boardContainer w-[100%] mx-auto ">
        <div className="board flex items-center justify-between py-4 bg-white text-black px-4 rounded-lg mt-10">
          <div className="position flex items-center gap-2">
            <h1 className="text-lg">1</h1>
            <img className="w-8 rounded-full h-8"
              src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1672215649089.jpg"
              alt=""
            />
            <h1>Hasib Imam</h1>
          </div>
          <div className="Assignment">7</div>
          <div className="Avarage Marks">6.00</div>
        </div>
      </div>
      </div>

      {/* //Top Position position */}

      <div className="boardContainer my-10 lg:w-[75%] w-full py-6 lg:mt-10 mt-5 px-3 bg-[#ff247a] pb-10 rounded-xl mx-auto ">
      
      <div className="flex items-center">
        <h1>Top Position</h1>
      </div>

      {leaderBoard.slice(0,5).map(student=>{
        return(
            <div className="boardContainer w-[100%] mx-auto ">
        <div className="board flex items-center justify-between py-4 bg-white text-black px-4 rounded-lg mt-6">
          <div className="position flex items-center gap-2">
            <h1 className="text-lg">{student.position}</h1>
            <img className="w-8 rounded-full h-8"
              src="https://source.unsplash.com/random/200x200?sig=1"
              alt=""
            />
            <h1>{student.name}</h1>
          </div>
          <div className="Assignment">{student.assignmentCount}</div>
          <div className="Avarage Marks">{student.averageMark}</div>
        </div>
      </div>
        )
      })}

      
      </div>


      {/* //All position */}

      <div className="boardContainer my-10 lg:w-[75%] w-full py-6 lg:mt-0 mt-5 px-3 bg-white pb-10 rounded-xl mx-auto ">
      
    
      {leaderBoard.slice(6,50).map(student=>{
        return(
            <div className="boardContainer w-[100%] mx-auto ">
        <div className="board flex items-center justify-between py-4 bg-gray-100 text-black px-4 rounded-lg mt-6">
          <div className="position flex items-center gap-2">
            <h1 className="text-lg">{student.position}</h1>
            <img className="w-8 rounded-full h-8"
              src="https://source.unsplash.com/random/200x200?sig=1"
              alt=""
            />
            <h1>{student.name}</h1>
          </div>
          <div className="Assignment">{student.assignmentCount}</div>
          <div className="Avarage Marks">{student.averageMark}</div>
        </div>
      </div>
        )
      })}

      
      </div>



    </div>
  );
};

export default LeaderBoard;
