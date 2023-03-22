import './Community_doughts.css'
import React, { useState } from 'react'
import Dought_tile from './Dought_tile/Dought_tile';
import { collection,query,onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase-config';
import { useEffect } from 'react';
const Community_doughts = () => {
  const [doughts, setdoughts] = useState([])
  const [Loading, setLoading] = useState(false)

  const fetchDoughts = async () => {
    setLoading(true);
    const q = query(collection(db, "Doughts"),);
    onSnapshot(q, (querySnapshot) => {
      const Doughts = [];
      querySnapshot.forEach((doc) => {
        Doughts.push(doc.data());
      });
      setdoughts([...Doughts]);
       setLoading(false);
    });
  
  };

  useEffect(() => {
    fetchDoughts();
  }, []);


  return (
   <div className="Community_doughts">
    {doughts.length > 0 &&
        doughts.map((dought, index) => (
          <Dought_tile dought={dought}/>
        ))}

      
   </div>
  )
}

export default Community_doughts