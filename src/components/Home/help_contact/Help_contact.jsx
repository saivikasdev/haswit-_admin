import React from 'react'
import Help_card from './Help_card/Help_card'
import './Help_contact.css'
import { useState } from 'react'
import { useEffect } from 'react';
import { doc, Firestore, setDoc, Timestamp } from "firebase/firestore";
import { collection, query,onSnapshot } from "firebase/firestore";
import {db} from "../../../firebase-config"
const Help_contact = () => {
  const [Form, setForm] = useState(false)
  const [mentor_name, setmentor_name] = useState('')
  const [mentor_phone, setmentor_phone] = useState('')
  const [loading, setLoading] = useState(false)
  const [mentors, setmentors] = React.useState([]);

  const mentor_name_set = (e) => {
    let mentor_name = e.target.value;
    setmentor_name(mentor_name);
  };

  const mentor_phone_set = (e) => {
    let mentor_phone = e.target.value;
    setmentor_phone(mentor_phone);
  };

  const Setdata = async (e) => {
    e.preventDefault();
    if (mentor_name || mentor_phone>6) {

      await setDoc(doc(db, "Helpline", mentor_name), {
        Mentorname:mentor_name,
        Mentorphone:mentor_phone

      },{ merge: true }).then(() => {
        setForm(false)

      })
        

}
else{
}
  }


  const fetchData = async () => {


    setLoading(true);
    const q = query(collection(db, "Helpline"),);
    onSnapshot(q, (querySnapshot) => {
      const res = [];
      querySnapshot.forEach((doc) => {
        res.push(doc.data());
      });
      setmentors([...res]);
       setLoading(false);
    });
  }

  useEffect(() => {
      fetchData()
  }, [])



  return (
   <div className="Help_contact">
    
    {Form === true ? (
          <>
      <form onSubmit={Setdata} className='Add_contact_form' >
            <input
            onChange={mentor_name_set}
              type="text"
              className="mentor_name"
              placeholder="Enter Mentor Name"
             
            />
            <input
            onChange={mentor_phone_set}
              type="text"
              className="mentor_phone"
              placeholder="Mentor number"
             
            />
            <button type="submit" className="add_helpline">
              Add contact
            </button>
          </form>
          </>): null}
    <div className="Add_contact" onClick={() => setForm(!Form)}>
      Add Contact Form
    </div>
    {mentors.length > 0 && mentors.map((mentor,index) => (

      <Help_card mentor={mentor}/>
    ))}
   </div>
  )
}

export default Help_contact