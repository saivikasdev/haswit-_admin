import React from "react";
import Live_meeting from "../Live_meeting/Live_meeting";
import Note_text from "../Note_text/Note_text";
import Upload_session_test from "../Upload_session_test/Upload_session_test";
import Calendar from "./Calendar/Calendar";
import Community_doughts from "./Community_doughts/Community_doughts";
import Help_contact from "./help_contact/Help_contact";
import Jobs from "./Jobs/Jobs";
import Projects from "./Projects/Projects";
import Push_noti from "./Push_noti/Push_noti";
import './Home.css'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="Home">
      <div className="top_nav">
        <Link to={'/All_students'}>
        Students
        </Link>
      </div>
      <div className="Top_row">
      <Live_meeting />
      <Upload_session_test />
      </div>
      <Calendar/>
      <div className="Middle_row">
      <Community_doughts/>
      <div className="Middle_column">
      <Note_text/>
      <Push_noti/>
      </div>
      </div>
      <Projects/>
      <Jobs/>
      <Help_contact/>

    </div>
  );
};

export default Home;
