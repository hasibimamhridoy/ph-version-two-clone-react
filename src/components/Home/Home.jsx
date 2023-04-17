import React, { useContext } from "react";
import "./Home.css";
import { AuthContext } from "../../providers/AuthProviders/AuthProviders";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <header className="headerContainer h-screen bg-red-400">
        <h1 className="header-title">
          Learn Effectively That Will Take You <br /> Towards Your Goal
        </h1>
      </header>

      <section className="batch-section section">

        <div className="batch-container">
          <h1 className="heading-text "> Next Batch Schudule</h1>

          <div className="batch-time-container">
            <div className="batch-start-end-container">
              <div className="batch-start-end">
                <div className="start-time">
                  <div className="start">Enrollment Starts</div>
                  <div className="s-time">10 June, 2023</div>
                </div>

                <div className="end-time">
                  <div className="end">Enrollment Ends</div>
                  <div className="e-time">10 June, 2023</div>
                </div>
              </div>
            </div>

            <div className="batch-orientation-container">
              <div className="batch-orientation">
                <div className="orientation-time">
                  <div className="orientation">Orientation Starts</div>
                  <div className="o-time">28 June, 2023</div>
                </div>

                <div className="class-starts">
                  <div className="c-starts">Class Start</div>
                  <div className="t-starts">30 June, 2023</div>
                </div>
              </div>
            </div>
          </div>

          <h5 className="text-center text-blue-400 mt-20 mb-60px;">
            If You Are Interested To
            <span className="text-amber-400"> Enroll In 8th Batch,</span>{" "}
            Register On The Website
          </h5>
        </div>

        <section className="learn-form-section">

            <div className="learn-form-container">

                <h1 className="heading-text learn-title">What You Will Learn_ From This Course?</h1>

                <div className="thumbnail">
                    <img src="courseThumbnail.cdaf4694.jpg" alt=""/>
                </div>

                <section className="videos-assignment-secttion hidden lg:block">

                    <div className="videos-assignment-container">

                        <div className="videos">
                            
                            <div className="videos-c v-item">
                                <img src="assignment.5817cd10.svg" alt=""/>
                                <p>950 Videos</p>
                            </div>

                        </div>


                        <div className="projects">

                            <div className="projects-c v-item">
                                <img src="assignment.5817cd10.svg" alt=""/>
                                <p>Projects</p>
                            </div>
                        </div>


                        <div className="assignment">
                            
                            <div className="assignment-c v-item">
                                <img src="assignment.5817cd10.svg" alt=""/>
                                <p>Assignment</p>
                            </div>

                        </div>
                    </div>

                </section>


                <section className="videos-assignment-secttion lg:hidden block">

                    <div className=" space-y-3">

                        <div className="bg-white rounded-md ">
                            
                            <div className="h-16 gap-3 px-4 flex items-center">
                                <h1><img src="assignment.5817cd10.svg" alt="" /></h1>
                                <h1>Video</h1>
                            </div>

                        </div>
                        <div className="bg-white rounded-md ">
                            
                            <div className="h-16 gap-3 px-4 flex items-center">
                                <h1><img src="assignment.5817cd10.svg" alt="" /></h1>
                                <h1>Projects</h1>
                            </div>

                        </div>
                        <div className="bg-white rounded-md ">
                            
                            <div className="h-16 gap-3 px-4 flex items-center">
                                <h1><img src="assignment.5817cd10.svg" alt="" /></h1>
                                <h1>Assignment</h1>
                            </div>

                        </div>


                    </div>

                </section>



            </div>

        </section>
      </section>


      <section className="course-curriculam section">
        <div className="curriculam">
            <h1 className="heading-text text-lg lg:text-6xl">Course Curriculam</h1>
        </div>

        <div className="scroll-container">

            <div className="scroll-item">
                <h4>Module-1: Welcome Module</h4>
            </div>

            <div className="scroll-item">
                <h4>Module-1: Welcome Module</h4>
            </div>


            <div className="scroll-item">
                <h4>Module-1: Welcome Module</h4>
            </div>

            <div className="scroll-item">
                <h4>Module-1: Welcome Module</h4>
            </div>


            <div className="scroll-item">
                <h4>Module-1: Welcome Module</h4>
            </div>

            <div className="scroll-item">
                <h4>Module-1: Welcome Module</h4>
            </div>

            <div className="scroll-item">
                <h4>Module-1: Welcome Module</h4>
            </div>

        </div>
    </section>

    <section className="speciality-section section">
        <section className="">

            <div className="speciality-title heading-text">
                <h1></h1>What Is The Specialty_ Of This Course?
            </div>

            <div className="speciality-container">
                <div className="speciality-child">
                    <div className="top-icon"><img src="img_2.svg" alt=""/></div>
                    <h3>Complete Web Development Course</h3>
                    <p>Learn everything it takes to get a job as a junior web developer from scratch</p>
                </div>
                <div className="speciality-child">
                    <div className="top-icon"><img src="img_3.svg" alt=""/></div>
                    <h3>Complete Web Development Course</h3>
                    <p>Learn everything it takes to get a job as a junior web developer from scratch</p>
                </div>
                <div className="speciality-child">
                    <div className="top-icon"><img src="img_4.svg" alt=""/></div>
                    <h3>Complete Web Development Course</h3>
                    <p>Learn everything it takes to get a job as a junior web developer from scratch</p>
                </div>
                <div className="speciality-child">
                    <div className="top-icon"><img src="img_5.svg" alt=""/></div>
                    <h3>Complete Web Development Course</h3>
                    <p>Learn everything it takes to get a job as a junior web developer from scratch</p>
                </div>
                <div className="speciality-child">
                    <div className="top-icon"><img src="img_6.svg" alt=""/></div>
                    <h3>Complete Web Development Course</h3>
                    <p>Learn everything it takes to get a job as a junior web developer from scratch</p>
                </div>
                <div className="speciality-child">
                    <div className="top-icon"><img src="img_7.svg" alt=""/></div>
                    <h3>Complete Web Development Course</h3>
                    <p>Learn everything it takes to get a job as a junior web developer from scratch</p>
                </div>
                <div className="speciality-child">
                    <div className="top-icon"><img src="img_8.svg" alt=""/></div>
                    <h3>Complete Web Development Course</h3>
                    <p>Learn everything it takes to get a job as a junior web developer from scratch</p>
                </div>
                <div className="speciality-child">
                    <div className="top-icon"><img src="img_7.svg" alt=""/></div>
                    <h3>Complete Web Development Course</h3>
                    <p>Learn everything it takes to get a job as a junior web developer from scratch</p>
                </div>
            </div>
        </section>
    </section>

    <section className="course-work-section section">
        <h1 className="course-work-sec-title heading-text">How Will This Course Work_?</h1>

        <section className="course-work-container">

            <div className="course-work-child">
                <div className="left-icon">
                    <h1>1</h1>
                </div>
                <div>
                    <p>Everyday we will be given a module/practice task. Videos will be released at 10.00pm. Smart
                        students may trick our system to get module access 2 hours earlier than everyone else</p>
                </div>
            </div>

            <div className="course-work-child">
                <div className="left-icon">
                    <h1>1</h1>
                </div>
                <div>
                    <p>Everyday we will be given a module/practice task. Videos will be released at 10.00pm. Smart
                        students may trick our system to get module access 2 hours earlier than everyone else</p>
                </div>
            </div>

            <div className="course-work-child">
                <div className="left-icon">
                    <h1>1</h1>
                </div>
                <div>
                    <p>Everyday we will be given a module/practice task. Videos will be released at 10.00pm. Smart
                        students may trick our system to get module access 2 hours earlier than everyone else</p>
                </div>
            </div>

            <div className="course-work-child">
                <div className="left-icon">
                    <h1>1</h1>
                </div>
                <div>
                    <p>Everyday we will be given a module/practice task. Videos will be released at 10.00pm. Smart
                        students may trick our system to get module access 2 hours earlier than everyone else</p>
                </div>
            </div>

            <div className="course-work-child">
                <div className="left-icon">
                    <h1>1</h1>
                </div>
                <div>
                    <p>Everyday we will be given a module/practice task. Videos will be released at 10.00pm. Smart
                        students may trick our system to get module access 2 hours earlier than everyone else</p>
                </div>
            </div>

            <div className="course-work-child">
                <div className="left-icon">
                    <h1>1</h1>
                </div>
                <div>
                    <p>Everyday we will be given a module/practice task. Videos will be released at 10.00pm. Smart
                        students may trick our system to get module access 2 hours earlier than everyone else</p>
                </div>
            </div>

            <div className="course-work-child">
                <div className="left-icon">
                    <h1>1</h1>
                </div>
                <div>
                    <p>Everyday we will be given a module/practice task. Videos will be released at 10.00pm. Smart
                        students may trick our system to get module access 2 hours earlier than everyone else</p>
                </div>
            </div>

            <div className="course-work-child">
                <div className="left-icon">
                    <h1>1</h1>
                </div>
                <div>
                    <p>Everyday we will be given a module/practice task. Videos will be released at 10.00pm. Smart
                        students may trick our system to get module access 2 hours earlier than everyone else</p>
                </div>
            </div>




        </section>
    </section>

    </div>
  );
};

export default Home;
