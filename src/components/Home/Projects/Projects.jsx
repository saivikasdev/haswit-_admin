import React, { useState } from "react";
import "./Projects.css";
import Project_card from "./Project_card/Project_card";
import { doc, Firestore, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../../../firebase-config";
import storage from "../../../firebase-config";
import { collection, query, where, getDocs,onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {toast} from 'react-toastify';
import whatsAppClient from "@green-api/whatsapp-api-client";
const Projects = () => {
  const [loading, setLoading] = useState(false);
  const [projects, setprojects] = useState([]);
  const [project_form, setproject_form] = useState(false);

  const [project_name, setproject_name] = useState("");
  const [project_points, setproject_points] = useState("");
  const [end_date, setend_date] = useState("");
  const [project_details, setproject_details] = useState("");
  const [image, setImage] = useState("");
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
      await setDoc(
        doc(db, "Projects", project_name),
        {
          Project_name: project_name,
          Points: project_points,
          End_date: end_date,
          Details: project_details,
        },
        { merge: true }
      ).then(async () => {

        const q = query(collection(db, "Students"));
        const querySnapshot = await getDocs(q);
  querySnapshot.forEach(async (doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.data().Whatsapp);
  
    const restAPI = whatsAppClient.restAPI({
      idInstance: "1101800560",
      apiTokenInstance: "9a944f3506bd428db020dc4eadf20466c60e73ee599b41d2a0",
    });
    const response = await restAPI.message.sendMessage(
      "+919182783270",
      doc.data().Whatsapp,
      '🧑‍💻 New project was posted named : ' + project_name +'\nCheck now : http://localhost:3001/Projects'
    );
    
    response.then(
      console.log('notification sent')
    )
  
  
  });
  


        setproject_form(false);
      });
      handleUpload();
    } else {
    }
  };





  const fetchData = async () => {
    setLoading(true);
    const q = query(collection(db, "Projects"),);
    onSnapshot(q, (querySnapshot) => {
      const Projects = [];
      querySnapshot.forEach((doc) => {
        Projects.push(doc.data());
      });
      setprojects([...Projects]);
       setLoading(false);
    });
  
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Projects">
      {project_form === true ? (
        <>
          <form onSubmit={Setdata} className="Add_project_form">
            <textarea
              onChange={project_details_set}
              type="text"
              className="project_details"
              placeholder="Project details"
              rows="10"
              cols="130"
            ></textarea>
            <div className="Form_column">
              <input type="file" onChange={handleChange} accept="/image/*" />
              
              <input
                onChange={project_name_set}
                type="text"
                className="Project_name"
                placeholder="Enter Project Name"
              />
              <input
                onChange={project_points_set}
                type="text"
                className="points"
                placeholder="Enter Project Points"
              />
              <input
                onChange={end_date_set}
                type="date"
                className="end_date_"
                placeholder="End date"
              />

              <button type="submit" className="add_project">
                Add project
              </button>
            </div>
          </form>
        </>
      ) : null}
      <div
        className="Add_contact"
        onClick={() => setproject_form(!project_form)}
      >
        Add Project Form
      </div>{" "}
      {projects.length > 0 &&
        projects.map((project, index) => (
          <Project_card project={project}/>
        ))}
    </div>
  );
};

export default Projects;
