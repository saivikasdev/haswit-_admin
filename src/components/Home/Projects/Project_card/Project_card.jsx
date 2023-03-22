import React, { useState } from 'react'
import './Project_card.css'
import Profile_pic from '../../../../images/bitmoji.png';
import { db } from '../../../../firebase-config';
import { doc, setDoc ,query,collection,onSnapshot } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../../../../firebase-config";
const Project_card = (props) => {
  const [edit_project_form, setedit_project_form] = useState(false)
  const { project } = props



  const [loading, setLoading] = useState(false);
  const [projects, setprojects] = useState([]);
  const [project_form, setproject_form] = useState(false);

  const [project_name, setproject_name] = useState(project.Project_name);
  const [project_points, setproject_points] = useState(project.Points);
  const [end_date, setend_date] = useState(project.End_date);
  const [project_details, setproject_details] = useState(project.Details);
  const [image, setImage] = useState(project.image);
  const [percent, setPercent] = useState(0);
  const [file, setFile] = useState("");
  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    }
    const storageRef = ref(storage, `/Project_pictures/${file.name}`); // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        ); // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          console.log(url);
          await setDoc(
            doc(db, "Projects", project_name),
            {
              image: url,
            },
            { merge: true }
          ).then(() => {});
        });
      }
    );
  };
  const project_name_set = (e) => {
    let project_name = e.target.value;
    setproject_name(project_name);
  };
  const project_points_set = (e) => {
    let project_points = e.target.value;
    setproject_points(project_points);
  };
  const end_date_set = (e) => {
    let end_date = e.target.value;
    setend_date(end_date);
  };
  const project_details_set = (e) => {
    let project_details = e.target.value;
    setproject_details(project_details);
  };

  const Setdata = async (e) => {
    e.preventDefault();
    if (project_name || project_points || end_date || project_details > 6) {
      console.log(project.Project_name)
      await setDoc(
        doc(db, "Projects", project.Project_name),
        {
          Points: project_points,
          End_date: end_date,
          Details: project_details,
        },
        { merge: true }
      ).then(() => {
        setedit_project_form(false);
      });
      handleUpload();
    } else {
    }
  };
  return (
   <div className="project_card_column">
    <div className="Project_card">
        <div className="Project_image">
        <img src={project.image} className="profile_image__"/> 
        </div>
        <div className="Project_name">
         {project.Project_name}
         </div>
       <div className="points">
         {project.Points}
       </div>
        <div className="date">
         {project.End_date}
        </div>
        <div className="image_link">
         {project.image}
        </div>
        <div className="project_desc">
         {project.Details}
        </div>

        <div className="Edit" onClick={()=>{
          setedit_project_form(!edit_project_form)
        }}>
          Edit
        </div>
        
    </div>
    {edit_project_form === true ? (
      <>
        <form onSubmit={Setdata} className="Add_project_form">
          <textarea
            onChange={project_details_set}
            defaultValue ={project.Details}
            type="text"
            className="project_details"
            placeholder="Project details"
            rows="10"
            cols="130"
          ></textarea>
          <div className="Form_column">
            <input type="file" onChange={handleChange} accept="/image/*"/>
            
            {/* <input
            defaultValue={project.Project_name}
              onChange={project_name_set}
              type="text"
              className="Project_name"
              placeholder="Enter Project Name"
            /> */}
            <input
            defaultValue={project.Points}
              onChange={project_points_set}
              type="text"
              className="points"
              placeholder="Enter Project Points"
            />
            <input
            defaultValue={project.End_date}
              onChange={end_date_set}
              type="date"
              className="end_date_"
              placeholder="End date"
            />

            <button type="submit" className="add_project">
              Edit project
            </button>
          </div>
        </form>
      </>
    ) : null}
   </div>
  )
}

export default Project_card