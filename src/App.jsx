import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import MyClasses from "./components/MyClasses/MyClasses";
import Modules from "./components/Modules/Modules";
import Profile from "./components/Profile/Profile";
import MyProfile from "./components/ProfileRoutes/MyProfile/MyProfile";
import Adress from "./components/ProfileRoutes/Address/Adress";
import Education from "./components/ProfileRoutes/Education/Education";
import JobProfile from "./components/ProfileRoutes/JobProfile/JobProfile";
import JobExprience from "./components/ProfileRoutes/JobExprience/JobExprience";
import SkillSet from "./components/ProfileRoutes/SkillSet/SkillSet";
import ImportantLinks from "./components/ProfileRoutes/ImportantLinks/ImportantLinks";
import JobApplication from "./components/ProfileRoutes/JobApplication/JobApplication";
import GotHired from "./components/ProfileRoutes/GotHired/GotHired";
import CourseRequest from "./components/ProfileRoutes/CourseRequest/CourseRequest";
import OrderHistory from "./components/ProfileRoutes/OrderHistory/OrderHistory";
import Certification from "./components/ProfileRoutes/Certification/Certification";
import Booksmark from "./components/Bookmark/Booksmark";
import StudentAnalytics from "./components/StudentAnlytics/StudentAnalytics";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import AuthProviders from "./providers/AuthProviders/AuthProviders";
import Register from "./components/LoginRegister/Register/Register";
import Login from "./components/LoginRegister/Login/Login";
import PrivateRoutes from "./routes/PrivateRoutes/PrivateRoutes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
        },
        {
          path: "/myClassess",
          element: <PrivateRoutes><MyClasses></MyClasses></PrivateRoutes>,
        },
        {
          path: "/modules",
          element: <PrivateRoutes><Modules></Modules></PrivateRoutes>,
          loader:()=>fetch('data.json')
        },
        {
          path: "/booksmarks",
          element: <PrivateRoutes><Booksmark></Booksmark></PrivateRoutes>
        },
        {
          path: "/analytics",
          element: <PrivateRoutes><StudentAnalytics></StudentAnalytics></PrivateRoutes>
        },
        {
          path: "/leaderBoard",
          element: <PrivateRoutes><LeaderBoard></LeaderBoard></PrivateRoutes>,
          loader:()=>fetch('leaderBoard.json')
        },
        {
          path: "/register",
          element: <Register></Register>,
          
        },
        {
          path: "/login",
          element: <Login></Login>,
          
        },
        {
          path: "/profile",
          element: <PrivateRoutes><Profile></Profile></PrivateRoutes>,
          children:[
            
            {
              path:'/profile',
              element:<MyProfile></MyProfile>
            },
            {
              path:'/profile/address',
              element:<Adress></Adress>
            },
            {
              path:'/profile/education',
              element:<Education></Education>
            },
            {
              path:'/profile/jobProfile',
              element:<JobProfile></JobProfile>
            },
            {
              path:'/profile/jobExprience',
              element:<JobExprience></JobExprience>
            },

            {
              path:'/profile/skillSet',
              element:<SkillSet></SkillSet>,
            },
            {
              path:'/profile/importantLinks',
              element:<ImportantLinks></ImportantLinks>
            },
            {
              path:'/profile/jobApplication',
              element:<JobApplication></JobApplication>
            },
            {
              path:'/profile/gotHired',
              element:<GotHired></GotHired>
            },
            {
              path:'/profile/courseRequest',
              element:<CourseRequest></CourseRequest>
            },
            {
              path:'/profile/orderHistory',
              element:<OrderHistory></OrderHistory>
            },
            {
              path:'/profile/certification',
              element:<Certification></Certification>
            },
          ]
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <AuthProviders><RouterProvider router={router}></RouterProvider></AuthProviders>
    </div>
  );
}

export default App;
