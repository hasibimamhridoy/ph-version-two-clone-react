import React from "react";
import { NavLink } from "react-router-dom";

const ProfileSideNav = () => {

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
 

  return (
    <div className="flex flex-col space-y-5">
      <div className="profileHeader space-y-5 px-6">
        <img
          className="w-[60px] h-[60px] rounded-full mx-auto block mt-5"
          src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1672215649089.jpg"
          alt=""
        />
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center leading-none rounded-full w-[45%]">
            {" "}
            45%
          </div>
        </div>
      </div>

    
      <NavLink onClick={handleNavClick}
        to="/profile"
        className={({ isActive}) =>
          isActive ? "text-white my-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-sm text-sm px-5  py-2 text-center m-3" : "text-white my-2 font-medium rounded-sm text-sm px-5  py-2 text-center m-3"
        }
      >
     
     <div className="flex space-x-3 items-center ">
     <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle fill="none" cx="12" cy="7" r="3"></circle>
        <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z"></path>
      </svg>
      <button>My Profile</button>
     </div>

      </NavLink>

      <NavLink onClick={handleNavClick}
        to="/profile/address"
        className={({ isActive}) =>
          isActive ? "text-white my-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-sm text-sm px-5  py-2 text-center m-3" : "text-white my-2 font-medium rounded-sm text-sm px-5  py-2 text-center m-3"
        }
      >
     
     <div className="flex space-x-3 items-center ">
     <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
      <button>Address</button>
     </div>

      </NavLink>

      <NavLink
        to="/profile/education"
        className={({ isActive}) =>
          isActive ? "text-white my-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-sm text-sm px-5  py-2 text-center m-3" : "text-white my-2 font-medium rounded-sm text-sm px-5  py-2 text-center m-3"
        }
      >
     
     <div className="flex space-x-3 items-center ">
     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M426.2 80.4l-170.2 32-170.2-32C64 77 48 97.3 48 118v244.5c0 20.7 16 32.6 37.8 37.6L256 432l170.2-32c21.8-5 37.8-16.9 37.8-37.6V118c0-20.7-16-41-37.8-37.6zm0 282l-151.2 32V149.9l151.2-32v244.5zm-189.2 32l-151.2-32V118L237 150v244.4z"></path></svg>
      <button>Education</button>
     </div>

      </NavLink>

      <NavLink onClick={handleNavClick}
        to="/profile/jobProfile"
        className={({ isActive}) =>
          isActive ? "text-white my-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-sm text-sm px-5  py-2 text-center m-3" : "text-white my-2 font-medium rounded-sm text-sm px-5  py-2 text-center m-3"
        }
      >
     
     <div className="flex space-x-3 items-center ">
     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M426.2 80.4l-170.2 32-170.2-32C64 77 48 97.3 48 118v244.5c0 20.7 16 32.6 37.8 37.6L256 432l170.2-32c21.8-5 37.8-16.9 37.8-37.6V118c0-20.7-16-41-37.8-37.6zm0 282l-151.2 32V149.9l151.2-32v244.5zm-189.2 32l-151.2-32V118L237 150v244.4z"></path></svg>
      <button>Job Profile</button>
     </div>

      </NavLink>

      <NavLink onClick={handleNavClick}
        to="/profile/jobExprience"
        className={({ isActive}) =>
          isActive ? "text-white my-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-sm text-sm px-5  py-2 text-center m-3" : "text-white my-2 font-medium rounded-sm text-sm px-5  py-2 text-center m-3"
        }
      >
     
     <div className="flex space-x-3 items-center ">
     <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
      <button>Job Exprience</button>
     </div>

      </NavLink>

      <NavLink onClick={handleNavClick}
        to="/profile/skillSet"
        className={({ isActive}) =>
          isActive ? "text-white my-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-sm text-sm px-5  py-2 text-center m-3" : "text-white my-2 font-medium rounded-sm text-sm px-5  py-2 text-center m-3"
        }
      >
     
     <div className="flex space-x-3 items-center ">
     <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
      <button>Skill Set</button>
     </div>

      </NavLink>

      <NavLink onClick={handleNavClick}
        to="/profile/importantLinks"
        className={({ isActive}) =>
          isActive ? "text-white my-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-sm text-sm px-5  py-2 text-center m-3" : "text-white my-2 font-medium rounded-sm text-sm px-5  py-2 text-center m-3"
        }
      >
     
     <div className="flex space-x-3 items-center ">
     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13 3L16.293 6.293 9.293 13.293 10.707 14.707 17.707 7.707 21 11 21 3z"></path><path d="M19,19H5V5h7l-2-2H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2v-5l-2-2V19z"></path></svg>
      <button>Important Links</button>
     </div>

      </NavLink>

      <NavLink onClick={handleNavClick}
        to="/profile/jobApplication"
        className={({ isActive}) =>
          isActive ? "text-white my-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-sm text-sm px-5  py-2 text-center m-3" : "text-white my-2 font-medium rounded-sm text-sm px-5  py-2 text-center m-3"
        }
      >
     
     <div className="flex space-x-3 items-center ">
     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13 3L16.293 6.293 9.293 13.293 10.707 14.707 17.707 7.707 21 11 21 3z"></path><path d="M19,19H5V5h7l-2-2H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2v-5l-2-2V19z"></path></svg>
      <button>Job Application</button>
     </div>

      </NavLink>
      
      <NavLink onClick={handleNavClick}
        to="/profile/gotHired"
        className={({ isActive}) =>
          isActive ? "text-white my-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-sm text-sm px-5  py-2 text-center m-3" : "text-white my-2 font-medium rounded-sm text-sm px-5  py-2 text-center m-3"
        }
      >
     
     <div className="flex space-x-3 items-center ">
     <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
      <button>Got Hired</button>
     </div>

      </NavLink>

      <NavLink onClick={handleNavClick}
        to="/profile/courseRequest"
        className={({ isActive}) =>
          isActive ? "text-white my-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-sm text-sm px-5  py-2 text-center m-3" : "text-white my-2 font-medium rounded-sm text-sm px-5  py-2 text-center m-3"
        }
      >
     
     <div className="flex space-x-3 items-center ">
     <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M1.6367 1.6367C.7322 1.6367 0 2.369 0 3.2734v17.4532c0 .9045.7322 1.6367 1.6367 1.6367h20.7266c.9045 0 1.6367-.7322 1.6367-1.6367V3.2734c0-.9045-.7322-1.6367-1.6367-1.6367H1.6367zm.545 2.1817h19.6367v16.3632h-2.7266v-1.0898h-4.9102v1.0898h-12V3.8184zM12 8.1816c-.9046 0-1.6367.7322-1.6367 1.6368 0 .9045.7321 1.6367 1.6367 1.6367.9046 0 1.6367-.7322 1.6367-1.6367 0-.9046-.7321-1.6368-1.6367-1.6368zm-4.3633 1.9102c-.6773 0-1.2285.5493-1.2285 1.2266 0 .6772.5512 1.2265 1.2285 1.2265.6773 0 1.2266-.5493 1.2266-1.2265 0-.6773-.5493-1.2266-1.2266-1.2266zm8.7266 0c-.6773 0-1.2266.5493-1.2266 1.2266 0 .6772.5493 1.2265 1.2266 1.2265.6773 0 1.2285-.5493 1.2285-1.2265 0-.6773-.5512-1.2266-1.2285-1.2266zM12 12.5449c-1.179 0-2.4128.4012-3.1484 1.0059-.384-.1198-.8043-.1875-1.2149-.1875-1.3136 0-2.7285.695-2.7285 1.5586v.8965h14.1836v-.8965c0-.8637-1.4149-1.5586-2.7285-1.5586-.4106 0-.831.0677-1.2149.1875-.7356-.6047-1.9694-1.0059-3.1484-1.0059Z"></path></svg>
      <button>Course Request</button>
     </div>

      </NavLink>

      <NavLink onClick={handleNavClick}
        to="/profile/orderHistory"
        className={({ isActive}) =>
          isActive ? "text-white my-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-sm text-sm px-5  py-2 text-center m-3" : "text-white my-2 font-medium rounded-sm text-sm px-5  py-2 text-center m-3"
        }
      >
     
     <div className="flex space-x-3 items-center ">
     <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M1.6367 1.6367C.7322 1.6367 0 2.369 0 3.2734v17.4532c0 .9045.7322 1.6367 1.6367 1.6367h20.7266c.9045 0 1.6367-.7322 1.6367-1.6367V3.2734c0-.9045-.7322-1.6367-1.6367-1.6367H1.6367zm.545 2.1817h19.6367v16.3632h-2.7266v-1.0898h-4.9102v1.0898h-12V3.8184zM12 8.1816c-.9046 0-1.6367.7322-1.6367 1.6368 0 .9045.7321 1.6367 1.6367 1.6367.9046 0 1.6367-.7322 1.6367-1.6367 0-.9046-.7321-1.6368-1.6367-1.6368zm-4.3633 1.9102c-.6773 0-1.2285.5493-1.2285 1.2266 0 .6772.5512 1.2265 1.2285 1.2265.6773 0 1.2266-.5493 1.2266-1.2265 0-.6773-.5493-1.2266-1.2266-1.2266zm8.7266 0c-.6773 0-1.2266.5493-1.2266 1.2266 0 .6772.5493 1.2265 1.2266 1.2265.6773 0 1.2285-.5493 1.2285-1.2265 0-.6773-.5512-1.2266-1.2285-1.2266zM12 12.5449c-1.179 0-2.4128.4012-3.1484 1.0059-.384-.1198-.8043-.1875-1.2149-.1875-1.3136 0-2.7285.695-2.7285 1.5586v.8965h14.1836v-.8965c0-.8637-1.4149-1.5586-2.7285-1.5586-.4106 0-.831.0677-1.2149.1875-.7356-.6047-1.9694-1.0059-3.1484-1.0059Z"></path></svg>
      <button>Order History</button>
     </div>

      </NavLink>

      <NavLink onClick={handleNavClick}
        to="/profile/certification"
        className={({ isActive}) =>
          isActive ? "text-white my-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-sm text-sm px-5  py-2 text-center m-3" : "text-white my-2 font-medium rounded-sm text-sm px-5  py-2 text-center m-3"
        }
      >
     
     <div className="flex space-x-3 items-center ">
     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M305.975 298.814l22.704 2.383V486l-62.712-66.965V312.499l18.214 8.895zm-99.95 0l-22.716 2.383V486l62.711-66.965V312.499l-18.213 8.895zm171.98-115.78l7.347 25.574-22.055 14.87-1.847 26.571-25.81 6.425-10.803 24.314-26.46-2.795-18.475 19.087L256 285.403l-23.902 11.677-18.475-19.15-26.46 2.795-10.803-24.313-25.81-6.363-1.847-26.534-22.118-14.92 7.348-25.573-15.594-21.544 15.644-21.52-7.398-25.523 22.068-14.87L150.5 73.03l25.86-6.362 10.803-24.313 26.46 2.794L232.098 26 256 37.677 279.902 26l18.475 19.149 26.46-2.794 10.803 24.313 25.81 6.425 1.847 26.534 22.055 14.87-7.347 25.574 15.656 21.407zm-49.214-21.556a72.242 72.242 0 1 0-72.242 72.242 72.355 72.355 0 0 0 72.242-72.242zm-72.242-52.283a52.282 52.282 0 1 0 52.282 52.283 52.395 52.395 0 0 0-52.282-52.245z"></path></svg>
      <button>Certification</button>
     </div>

      </NavLink>
   
    </div>
  );
};

export default ProfileSideNav;
