import React, { useEffect, useState } from 'react'
import './Job_card.css'
import { db } from '../../../../firebase-config';
import { doc, setDoc ,query,collection,onSnapshot } from "firebase/firestore";
const Job_card = (props , index) => {
  const [edit_job_form, setedit_job_form] = useState(false)
  const { Job } = props;


  const [job_name, setjob_name] = useState(Job.job_name);
  const [job_desc, setjob_desc] = useState(Job.job_desc);
  const [minimum_rank, setminimum_rank] = useState(Job.minimum_rank);
  const [company, setcompany] = useState(Job.company);
  const [work, setwork] = useState(Job.work);
  const [type, settype] = useState(Job.type);
  const [vacancy, setvacancy] = useState(Job.vacancy);
  const [location, setlocation] = useState(Job.location);
  const [website_link, setwebsite_link] = useState(Job.website_link);





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
        doc(db, "Jobs", Job.job_name),
        {
          job_desc: job_desc,
          minimum_rank: minimum_rank,
          company: company,
          work:work,
          type: type,
          vacancy: vacancy,
          location: location,
          website_link: website_link,
        },
      ).then(() => {
        setedit_job_form(false);
      });
    } else {
      console.log(job_name)

    }
  };






  return (
    <div className="Job">
      <div className="Job_card" key={index}>
        <div className="Job_title">
        {Job.job_name}
        </div>
        <div className="Job_desc">
        {Job.job_desc}
        </div>
       <div className="job_column">
       <div className="min_rank">
       Minimum rank : {Job.minimum_rank}
        </div>
        <div className="company">
       Company : {Job.company}
        </div>
        <div className="company">
       Work : {Job.work}
        </div>
       </div>
        <div className="job_column">
        <div className="company">
       Job type : {Job.type}
        </div>
        <div className="company">
       Vacancy : {Job.vacancy}
        </div>
        <div className="company">
          Location : {Job.location}
        </div>
        </div>
        
        <div className="Eligible_stu_table">
          <div className="table_row you">
            <div className="Stu_name">
              You
            </div>
            <div className="Stu_uid">
              13133
            </div>
            <div className="Stu_position">
              #2
            </div>
          </div>
          <div className="table_row">
            <div className="Stu_name">
              Ramesh
            </div>
            <div className="Stu_uid">
              13124
            </div>
            <div className="Stu_position">
              #4
            </div>
          </div> <div className="table_row">
            <div className="Stu_name">
              Bill gates
            </div>
            <div className="Stu_uid">
              131333
            </div>
            <div className="Stu_position">
              #5
            </div>
          </div> <div className="table_row">
            <div className="Stu_name">
              Mahesh
            </div>
            <div className="Stu_uid">
              13133
            </div>
            <div className="Stu_position">
              #7
            </div>
          </div>
        </div>
        <div className="More_desc" onClick={() => setedit_job_form(!edit_job_form)}>
          Edit
        </div>
        
    </div>
    {edit_job_form === true ? (
        <>
          <form onSubmit={Setdata} className="Add_project_form">
            <textarea
              onChange={job_desc_set}
              type="text"
              defaultValue={Job.job_desc}
              className="job_details"
              placeholder="Job description"
              rows="6"
              cols="90"
            ></textarea>
            <div className="Form_column">
              {/* <input
                onChange={job_name_set}
                defaultValue={Job.job_name}
                type="text"
                className="Project_name"
                placeholder="Enter Job Name"
              /> */}
              <input
                onChange={minimum_rank_set}
                defaultValue={Job.minimum_rank}
                type="text"
                className="points"
                placeholder="Minimum rank"
              />
              <input
                onChange={company_set}
                defaultValue={Job.company}
                type="text"
                className="points"
                placeholder="Company"
              />
              <input
                onChange={work_set}
                defaultValue={Job.work}
                type="text"
                className="Project_name"
                placeholder="Work"
              />
              
              <button type="submit" className="add_project">
                Edit Job
              </button>
            </div>


            <div className="Form_column">
            <input
                onChange={type_set}
                defaultValue={Job.type}
                type="text"
                className="points"
                placeholder="Type"
              />
              <input
                onChange={vacancy_set}
                defaultValue={Job.vacancy}
                type="text"
                className="points"
                placeholder="Vacancy"
              />
              <input
                onChange={location_set}
                defaultValue={Job.location}
                type="text"
                className="points"
                placeholder="Location"
              />
              <input
                onChange={website_link_set}
                defaultValue={Job.website_link}
                type="text"
                className="points"
                placeholder="Website link"
              />

            </div>


          </form>
        </>
      ) : null}
    </div>
  )
}

export default Job_card