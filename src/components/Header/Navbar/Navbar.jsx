import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import {
  BookmarkIcon,
  ChartBarIcon,
  AcademicCapIcon,
  InformationCircleIcon,
  VideoCameraIcon,
  ArrowLeftOnRectangleIcon,
  BellAlertIcon,
} from "@heroicons/react/24/solid";
import { AuthContext } from "../../../providers/AuthProviders/AuthProviders";

const Navbar = () => {
  const notification = [
    {
      noti: "Module 61: Private Route Recap with Ema-John has been released",
    },
    {
      noti: "Module 612: Private Route Recap with Ema-John has been released",
    },
    {
      noti: "Module 612: Private Route Recap with Ema-John has been released",
    },
    {
      noti: "Module 612: Private Route Recap with Ema-John has been released",
    },
    {
      noti: "Module 612: Private Route Recap with Ema-John has been released",
    },
    {
      noti: "Module 612: Private Route Recap with Ema-John has been released",
    },
    {
      noti: "Module 612: Private Route Recap with Ema-John has been released",
    },
    {
      noti: "Module 612: Private Route Recap with Ema-John has been released",
    },
    {
      noti: "Module 612: Private Route Recap with Ema-John has been released",
    },
    {
      noti: "Module 612: Private Route Recap with Ema-John has been released",
    },
    {
      noti: "Module 612: Private Route Recap with Ema-John has been released",
    },
    {
      noti: "Module 612: Private Route Recap with Ema-John has been released",
    },
    {
      noti: "Module 612: Private Route Recap with Ema-John has been released",
    },
    {
      noti: "Module 612: Private Route Recap with Ema-John has been released",
    },
    {
      noti: "Module 612: Private Route Recap with Ema-John has been released",
    },
    {
      noti: "Module 612: Private Route Recap with Ema-John has been released",
    },
    {
      noti: "Module 612: Private Route Recap with Ema-John has been released",
    },
    {
      noti: "Module 612: Private Route Recap with Ema-John has been released",
    },
  ];

  const [isOpenNav, setIsOpenNav] = useState(false);
  const { user } = useContext(AuthContext);

  console.log(user);
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [isNotification, setIsNotification] = useState(false);

  return (
    <div>
      <div className="navContainerCustom text-sm lg:px-[3rem] pt-2 bg-[#0f0317] text-white">
        <div className="nav flex items-center lg:justify-center justify-between px-2">
          <Link to="/">
            <div className="logo lg:mr-20 flex items-center justify-center">
              <img className="w-12 h-12" src="ph_logo.svg" alt="" />
              <span className="text-[0.8rem]">Programming Hero</span>
            </div>
          </Link>

          <div className="menuProfileContainer flex items-center space-x-8">
            <div className="menuContainer ">
              <ul className="hidden lg:flex items-center justify-center space-x-5">
                {user && (
                  <a href="https://crackerz.programming-hero.com/">
                    <li>Concept Crackerz</li>
                  </a>
                )}

                {user ? (
                  ""
                ) : (
                  <a href="https://web.programming-hero.com/home/level2/">
                    <li>Level to</li>
                  </a>
                )}

                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  <li>Course Details</li>
                </NavLink>

                {user ? "" : <li>About Us</li>}

                {user && <li>Support</li>}
                <li>Blog</li>

                {user ? "" : <li>Success</li>}
                {user && <li>My Classes</li>}
              </ul>
            </div>

            <div className="notiProfileContainer  ">
              <ul className="flex items-center  justify-center space-x-5">
                {user ? (
                  ""
                ) : (
                  <Link to="/login">
                    <li className="cursor-pointer">Login</li>
                  </Link>
                )}

                {user && (
                  <div
                    onClick={() => setIsNotification(!isNotification)}
                    className="lg:block relative "
                  >
                    <img
                      className="w-4 h-4 relative cursor-pointer "
                      src="download.png"
                      alt=""
                    />
                    <div className="absolute">
                      <div className="relative bottom-6 left-2 h-3 w-3 flex items-center justify-center bg-red-700 rounded-full">
                        <span className=" text-[11px] absolute font-bold text-center  rounded-full ">
                          3
                        </span>
                      </div>
                    </div>

                    {isNotification && (
                      <div className="absolute bg-[#150f2d] w-52 h-96 top-7 right-0 rounded-md">
                        <div className="content space-y-5 h-96 overflow-y-auto">
                          {notification.map((noti) => {
                            return (
                              <div className="mt-5">
                                <h1 className="flex mx-3 text-left space-x-3">
                                  <img
                                    className="w-4 h-4"
                                    src="download.png"
                                    alt=""
                                  />
                                  <h1 className="-mt-1">{noti.noti}</h1>
                                </h1>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {user && (
                  <li className="px-3 hidden lg:flex-row lg:flex items-center space-x-2 justify-center py-[0.15rem] bg-white rounded-3xl">
                    <img className="h-5 w-5" src="gem.8e6eff96.svg" alt="" />
                    <span className="text-black">128</span>
                  </li>
                )}
                <div className="flex items-center justify-center">
                  {user && (
                    <Link to="/modules">
                      <button className="text-white hidden lg:block my-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2">
                        Continue Course
                      </button>
                    </Link>
                  )}

                  {user ? (
                    ""
                  ) : (
                    <Link to="/register">
                      <button className="text-white hidden lg:block my-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-md text-sm px-5 py-2 text-center mr-2 mb-2">
                        Enroll Now
                      </button>
                    </Link>
                  )}

                  {/* Profile */}
                  {user && (
                    <li>
                      <div className="relative inline-block text-left">
                        <div className="flex w-[47px] h-[47px] items-center justify-center">
                          <img
                            onClick={() => setIsOpenNav(!isOpenNav)}
                            className="w-full h-full mt-3 rounded-full block cursor-pointer"
                            src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1672215649089.jpg"
                            alt=""
                          />
                        </div>

                        <div
                          className={`absolute  right-0 z-10 mt-5 w-56 origin-top-right rounded-lg  bg-[#150f2d] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                            isOpenNav ? "block" : "hidden"
                          }`}
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="menu-button"
                          tabIndex="-1"
                        >
                          <div className="profile text-white text-center space-y-2">
                            {user.photoURL ? (
                              <img
                                className="w-[80px] h-[80px] rounded-full mx-auto block mt-5"
                                src={user.photoURL}
                                alt=""
                              />
                            ) : (
                              <img
                                className="w-[80px] h-[80px] rounded-full mx-auto block mt-5"
                                src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1672215649089.jpg"
                                alt=""
                              />
                            )}
                            <h1>{user.email}</h1>
                            <p>Student ID: WEB7-{user.uid.slice(0, 5)}</p>

                            <Link to="/profile">
                              <button
                                onClick={() => setIsOpenNav(!isOpenNav)}
                                className="py-2 text-black mt-3 font-semibold px-2 rounded-md bg-yellow-400"
                              >
                                View Profile
                              </button>
                            </Link>

                            {user && (
                              <Link to="/modules">
                                <div
                                  onClick={() => setIsOpenNav(!isOpenNav)}
                                  className="mx-auto flex justify-center mt-5"
                                >
                                  <button className="text-white block lg:hidden my-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2">
                                    Continue Course
                                  </button>
                                </div>
                              </Link>
                            )}
                          </div>

                          <div className="mt-5">
                            <hr />
                          </div>

                          <div className="py-1 text-white ml-5 " role="none">
                            <Link to="/booksmarks">
                              <div className="flex items-center w-full hover:bg-[#0b0522]  cursor-pointer">
                                <BookmarkIcon className="h-4 w-4"></BookmarkIcon>
                                <a
                                  onClick={() => setIsOpenNav(!isOpenNav)}
                                  href="#"
                                  className={` block px-4 py-3 text-sm ${
                                    isOpenNav ? "block" : "hidden"
                                  }`}
                                  role="menuitem"
                                  tabIndex="-1"
                                  id="menu-item-1"
                                >
                                  Bookmark
                                </a>
                              </div>
                            </Link>
                            <Link to="/analytics">
                              <div className="flex items-center w-full hover:bg-[#0b0522]  cursor-pointer">
                                <ChartBarIcon className="h-4 w-4"></ChartBarIcon>
                                <a
                                  onClick={() => setIsOpenNav(!isOpenNav)}
                                  href="#"
                                  className={` block px-4 py-3 text-sm hover:bg-[#0b0522]  ${
                                    isOpenNav ? "block" : "hidden"
                                  }`}
                                  role="menuitem"
                                  tabIndex="-1"
                                  id="menu-item-0"
                                >
                                  Student Analytics
                                </a>
                              </div>
                            </Link>

                            <Link to="/leaderBoard">
                              <div className="flex items-center w-full hover:bg-[#0b0522]  cursor-pointer">
                                <AcademicCapIcon className="h-4 w-4 hover:bg-[#0b0522]  cursor-pointer"></AcademicCapIcon>
                                <a
                                  onClick={() => setIsOpenNav(!isOpenNav)}
                                  href="#"
                                  className={` block px-4 py-3 text-sm hover:bg-[#0b0522]  ${
                                    isOpenNav ? "block" : "hidden"
                                  }`}
                                  role="menuitem"
                                  tabIndex="-1"
                                  id="menu-item-0"
                                >
                                  Leader Board
                                </a>
                              </div>
                            </Link>

                            <div className="flex items-center w-full hover:bg-[#0b0522]  cursor-pointer">
                              <InformationCircleIcon className="h-4 w-4"></InformationCircleIcon>
                              <a
                                onClick={() => setIsOpenNav(!isOpenNav)}
                                href="#"
                                className={` block px-4 py-3 text-sm hover:bg-[#0b0522]  ${
                                  isOpenNav ? "block" : "hidden"
                                }`}
                                role="menuitem"
                                tabIndex="-1"
                                id="menu-item-0"
                              >
                                Anaouncement
                              </a>
                            </div>
                            <div className="flex items-center w-full hover:bg-[#0b0522]  cursor-pointer">
                              <VideoCameraIcon className="h-4 w-4"></VideoCameraIcon>
                              <a
                                onClick={() => setIsOpenNav(!isOpenNav)}
                                href="#"
                                className={` block px-4 py-3 text-sm hover:bg-[#0b0522]  ${
                                  isOpenNav ? "block" : "hidden"
                                }`}
                                role="menuitem"
                                tabIndex="-1"
                                id="menu-item-0"
                              >
                                Conceptual Session
                              </a>
                            </div>
                            <div
                              onClick={handleLogOut}
                              className="flex items-center w-full hover:bg-[#0b0522]  cursor-pointer"
                            >
                              <ArrowLeftOnRectangleIcon className="h-4 w-4"></ArrowLeftOnRectangleIcon>
                              <a
                                onClick={() => setIsOpenNav(!isOpenNav)}
                                href="#"
                                className={` block px-4 py-3 text-sm hover:bg-[#0b0522]  ${
                                  isOpenNav ? "block" : "hidden"
                                }`}
                                role="menuitem"
                                tabIndex="-1"
                                id="menu-item-0"
                              >
                                Log Out
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  )}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
