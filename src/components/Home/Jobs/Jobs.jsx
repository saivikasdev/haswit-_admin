import React, { useEffect, useState } from "react";
import "./Jobs.css";
import Job_card from "./Job_card/Job_card";
import { db } from "../../../firebase-config";
import { doc, setDoc ,query,collection,onSnapshot,getDocs } from "firebase/firestore";
import whatsAppClient from "@green-api/whatsapp-api-client";  
const Jobs = () => {

  const [job_name, setjob_name] = useState("");
  const [job_desc, setjob_desc] = useState("");
  const [minimum_rank, setminimum_rank] = useState("");
  const [company, setcompany] = useState("");
  const [work, setwork] = useState("");
  const [type, settype] = useState("");
  const [vacancy, setvacancy] = useState("");
  const [location, setlocation] = useState("");
  const [website_link, setwebsite_link] = useState("");





  const job_name_set = (e) => {
    let job_name = e.target.value;
    setjob_name(job_name);
  };
  const job_desc_set = (e) => {
    let job_desc = e.target.value;
    setjob_desc(job_desc);
  };
  const minimum_rank_set = (e) => {
    let minimum_rank = e.target.value;
    setminimum_rank(minimum_rank);
  };
  const company_set = (e) => {
    let company = e.target.value;
    setcompany(company);
  };

  const work_set = (e) => {
    let work = e.target.value;
    setwork(work);
  };
  const type_set = (e) => {
    let type = e.target.value;
    settype(type);
  };
  const vacancy_set = (e) => {
    let vacancy = e.target.value;
    setvacancy(vacancy);
  };
  const location_set = (e) => {
    let location = e.target.value;
    setlocation(location);
  };
  const website_link_set = (e) => {
    let website_link = e.target.value;
    setwebsite_link(website_link);
  };






  const Setdata = async (e) => {
    e.preventDefault();
    if (job_name || job_desc || company || work > 6) {
      await setDoc(
        doc(db, "Jobs", job_name),
        {
          job_name: job_name,
          job_desc: job_desc,
          minimum_rank: minimum_rank,
          company: company,
          work:work,
          type: type,
          vacancy: vacancy,
          location: location,
          website_link: website_link,
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
      '🧑‍💻 New project was posted named : ' + job_name +'\nCheck now : http://localhost:3001/Jobs'
    );
    
    response.then(
      console.log('notification sent')
    )
  
  
  });


        setjob_form(false);
      });
    } else {
    }
  };


const [Jobs, setJobs] = useState([])

const [loading, setLoading] = useState(false);

  
  const fetchData = async () => {
    setLoading(true);
    const q = query(collection(db, "Jobs"),);
    onSnapshot(q, (querySnapshot) => {
      const Jobs = [];
      querySnapshot.forEach((doc) => {
        Jobs.push(doc.data());
      });
      setJobs([...Jobs]);
       setLoading(false);
    });
  
  };

  useEffect(() => {
    fetchData();
  }, []);






  const [job_form, setjob_form] = useState(false);
  return (
    <div className="Jobs">
      {job_form === true ? (
        <>  
          <form onSubmit={Setdata} className="Add_project_form">
            <textarea
              onChange={job_desc_set}
              type="text"
              className="job_details"
              placeholder="Job description"
              rows="6"
              cols="90"
            ></textarea>
            <div className="Form_column">
              <input
                onChange={job_name_set}
                type="text"
                className="Project_name"
                placeholder="Enter Job Name"
              />
              <input
                onChange={minimum_rank_set}
                type="text"
                className="points"
                placeholder="Minimum rank"
              />
              <input
                onChange={company_set}
                type="text"
                className="points"
                placeholder="Company"
              />
              <input
                onChange={work_set}
                type="text"
                className="Project_name"
                placeholder="Work"
              />
              
              <button type="submit" className="add_project">
                Add Job
              </button>
            </div>


            <div className="Form_column">
            <input
                onChange={type_set}
                type="text"
                className="points"
                placeholder="Type"
              />
              <input
                onChange={vacancy_set}
                type="text"
                className="points"
                placeholder="Vacancy"
              />
              <input
                onChange={location_set}
                type="text"
                className="points"
                placeholder="Location"
              />
              <input
                onChange={website_link_set}
                type="text"
                className="points"
                placeholder="Website link"
              />

            </div>


          </form>
        </>
      ) : null}
      <div className="Add_contact" onClick={() => setjob_form(!job_form)}>
        New job
      </div>
      <div className="Job_card_grid">
      {Jobs.length > 0 &&
        Jobs.map((Job, index) => (
          <Job_card Job={Job} index = {index}
            />
        ))}
        
      </div>
    
    </div>
  );
};

export default Jobs;
