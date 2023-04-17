import React, { } from "react";
import ProfileSideNav from "../ProfileRoutes/ProfileSideNav/ProfileSideNav";
import { Outlet } from "react-router-dom";



const Profile = () => {



  return (
    <div className="h-fit bg-[#0f0317] p-5 gap-3 space-y-5 lg:px-[4.9rem] lg:flex lg:flex-row flex-col lg:gap-5 lg:pt-10">
   
        <div className="profileRoutes lg:mt-5 bg-[#260c37] rounded-md w-full lg:w-[20%]">
          <ProfileSideNav></ProfileSideNav>
        </div>

        <div className="profileRoutes h-fit lg:w-[80%] w-full">
          <Outlet></Outlet>
        </div>
      
    </div>
  );
};

export default Profile;
