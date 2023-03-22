import React, { useState } from 'react'
import './All_students.css'
import {db} from "../../firebase-config"
import { getDocs, collection } from "firebase/firestore"; 
import { useEffect } from 'react';
const All_students = () => { 
     const [loading, setLoading] = useState(false)
    const [students, setstudents] = React.useState([]);

    const fetchData = async () => {
      const doc_refs = await getDocs(collection(db, 'Students'))

       const res = []

        setLoading(true)

        const res_ = await doc_refs.forEach(student => {
          res.push({
              ...student.data()
          })
      })

        setstudents([...res])
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])



  
  return (
    
  <>
  
  <div className="All_students">
  <div className="Student_card">
        <div className="">
         student Name
        </div>
        <div className="">
        student Phone
        </div>
        <div className="">
        student Whatsapp
        </div>
        <div className="">
        student address
        </div>
        <div className="">
        student gmail
        </div>
        <div className="">
        student study at
        </div>
        <div className="">
        Time
        </div>
      </div>
    {students.length > 0 && students.map((student,index) => (



      <div className="Student_card" key={index}>
        <div className="Student_name">
         {student.Name}
        </div>
        <div className="Student_phone">
        {student.Phone}
        </div>
        <div className="Student_whatsapp">
        {student.Whatsapp}
        </div>
        <div className="Student_address">
        {student.address}
        </div>
        <div className="Student_gmail">
        {student.gmail}
        </div>
        <div className="Student_study_at">
        {student.study_at}
        </div>
        <div className="time">
        {student.time}
        </div>
      </div>



    
  )
  
  
  )}
  
  </div>
  </>
  )
}

export default All_students