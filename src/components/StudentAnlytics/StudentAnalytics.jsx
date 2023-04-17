import React from "react";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Sector,
  Cell,
} from "recharts";
import {
  CalendarDaysIcon,
  ChartBarIcon,
  QuestionMarkCircleIcon,
  VideoCameraIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";
const StudentAnalytics = () => {
  const data01 = [
    { name: "Assignment Marks", value: 40 },
    { name: "Module finish on time", value: 15 },
    { name: "Module progress", value: 15 },
    { name: "Quiz mark", value: 20 },
    { name: "Video duration", value: 15 },
  ];
  const data02 = [{ name: "Avg mark", value: 90.01 }];

  return (
    <div className="bg-[#0c0d21] px-5">
      
      
      <div className="health-quizContainer lg:space-y-0 space-y-5 gap-5 py-10 lg:h-96 lg:px-20 lg:flex lg:flex-row">
        
        
        <div className="heath bg-[#161738] rounded-md lg:w-[55%] pt-6">
          <h1 className="text-white text-xl lg:ml-5 ml-10">Health Check</h1>

          <div className="health lg:flex lg:flex-row py-5 ml-8">
            <div className="chart lg:w-[50%] w-[100%]">
              <PieChart width={300} height={250}>
                <Pie
                  dataKey="value"
                  isAnimationActive={true}
                  data={data01}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                />
                <Pie
                  dataKey="value"
                  data={data01}
                  cx={500}
                  cy={200}
                  innerRadius={40}
                  outerRadius={80}
                  fill="#82ca9d"
                />
                <Tooltip />
              </PieChart>
            </div>

            <div className="chartTitle lg:w-[50%] w-[100%]">
              <ul className="space-y-3">
                <li className="flex gap-3 text-yellow-400 items-center">
                  <CalendarDaysIcon className="h-6 w-6 "></CalendarDaysIcon>
                  <h1>Module finish on time</h1>
                </li>
                <li className="flex gap-3 text-white items-center">
                  <ChartBarIcon className="h-6 w-6 "></ChartBarIcon>
                  <h1>Module progress</h1>
                </li>
                <li className="flex gap-3 text-purple-600 items-center">
                  <QuestionMarkCircleIcon className="h-6 w-6 "></QuestionMarkCircleIcon>
                  <h1>Quiz mark</h1>
                </li>
                <li className="flex gap-3 text-red-500 items-center">
                  <VideoCameraIcon className="h-6 w-6 "></VideoCameraIcon>
                  <h1>Video duration</h1>
                </li>
                <li className="flex gap-3 text-sky-400 items-center">
                  <ClipboardDocumentCheckIcon className="h-6 w-6 "></ClipboardDocumentCheckIcon>
                  <h1>Assignment Mark</h1>
                </li>
              </ul>
            </div>
          </div>
        </div>




        <div className="quiz bg-[#161738] rounded-md lg:w-[45%]  w-full">
          <h1 className="text-white text-xl m-5 lg:pt-0 pt-5">Quiz Mark</h1>

          <div className="health lg:flex  ml-8">
            <div className="chart lg:w-[50%] w-full">
              <PieChart width={300} height={250}>
                <Pie
                  dataKey="value"
                  isAnimationActive={true}
                  data={data02}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#824ffb"
                  label
                />
                <Pie
                  dataKey="value"
                  data={data02}
                  cx={500}
                  cy={200}
                  innerRadius={40}
                  outerRadius={80}
                  fill="#82ca9d"
                />
                <Tooltip />
              </PieChart>
            </div>

            <div className="chartTitle lg:w-[50%] w-full">
              <ul className="space-y-3">
                <li className=" text-yellow-400 items-center">
                  <div className="flex gap-3">
                    <QuestionMarkCircleIcon className="h-6 w-6 "></QuestionMarkCircleIcon>
                    <h1>Complete Quiz</h1>
                  </div>
                  <p className="text-white ml-9 font-semibold text-lg">50</p>
                </li>
                <li className=" text-green-500 items-center">
                  <div className="flex gap-3">
                    <QuestionMarkCircleIcon className="h-6 w-6 "></QuestionMarkCircleIcon>
                    <h1>Incomplete Quiz</h1>
                  </div>
                  <p className="text-red-500 ml-9 font-semibold text-lg">50</p>
                </li>
                <li className=" text-purple-500 items-center">
                  <div className="flex gap-3">
                    <QuestionMarkCircleIcon className="h-6 w-6 "></QuestionMarkCircleIcon>
                    <h1>Total Quiz</h1>
                  </div>
                  <p className="text-red-500 ml-9 font-semibold text-lg">50</p>
                </li>
              </ul>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default StudentAnalytics;
