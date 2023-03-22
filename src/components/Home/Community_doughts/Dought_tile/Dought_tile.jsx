import React, { useState } from "react";
import "./Dought_tile.css";
import Profile_pic from "../../../../images/bitmoji.png";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../../firebase-config";
const Dought_tile = (props) => {
  const [answer_form, setanswer_form] = useState(false);
  const { dought } = props;
  const [answer, setanswer] = useState("");
  const answer_set = (e) => {
    let answer = e.target.value;
    setanswer(answer);
  };

  const add_answer = async (e) => {
    e.preventDefault();
    if (answer.length > 15) {
      await setDoc(
        doc(db, "Doughts", dought.Dought, "answers", answer),
        {
          Answer: answer,
          User: "Admin",
        },
        { merge: true }
      ).then(() => {
        setanswer_form(false);
      });
    } else {
    }
  };
  return (
    <div className="dought_tile_container">
      <div className="Dought_tile">
        {dought.Dought}
        <div className="Doughted_student_">
          <div className="Doughted_student_pic">
            <img src={Profile_pic} className="profile_image__" />
          </div>
          <div className="Doughted_student_name">{dought.Username}</div>
        </div>
        <div
          className="Answer_button"
          onClick={() => {
            setanswer_form(!answer_form);
          }}
        >
          Answer
        </div>
      </div>

      {answer_form === true ? (
        <>
          <form onSubmit={add_answer} className="Add_project_form">
            <textarea
              onChange={answer_set}
              type="text"
              className="job_details"
              placeholder="Your answer"
              rows="6"
              cols="90"
            ></textarea>

            <button type="submit" className="Answer_button">
              Answer
            </button>
          </form>
        </>
      ) : null}
    </div>
  );
};

export default Dought_tile;
