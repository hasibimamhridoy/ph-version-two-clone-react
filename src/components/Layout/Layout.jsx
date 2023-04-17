import React, { createContext, useState } from "react";
import Navbar from "../Header/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export const LevelContext = createContext("o");

const Layout = () => {
  const [expandedMilestone, setExpandedMilestone] = useState(null);
  const [milestone, setMilestone] = useState([]);
  const [bookmarkMilestion, setBookmarkMilestion] = useState([]);

  function toggleMilestone(id) {
    if (id === expandedMilestone) {
      setExpandedMilestone(null);
    } else {
      setExpandedMilestone(id);
    }
  }
  function handleMilestoneCover(milestone) {
    console.log(milestone);
    setMilestone(milestone);
  }

  function handleBookmark(cliCkmilestone) {
    const exits = bookmarkMilestion.find((miles) => miles === cliCkmilestone);

    if (exits) {
      alert("already ache");
    } else {
      const allMilestone = [...bookmarkMilestion, cliCkmilestone];
      setBookmarkMilestion(allMilestone);
    }
  }

  return (
    <div>
      <LevelContext.Provider
        value={[
          expandedMilestone,
          setExpandedMilestone,
          milestone,
          setMilestone,
          toggleMilestone,
          handleMilestoneCover,
          handleBookmark,
          bookmarkMilestion,
          setBookmarkMilestion,
        ]}
      >
        <div className="navbar">
          <Navbar></Navbar>
        </div>


        <div className="outlet">
          <Outlet></Outlet>
        </div>

        
        <div className="footer">
          <Footer></Footer>
        </div>
      </LevelContext.Provider>
    </div>
  );
};

export default Layout;
