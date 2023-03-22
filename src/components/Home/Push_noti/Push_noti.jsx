import React, { useState } from 'react'
import './Push_noti.css'
import { db } from '../../../firebase-config'
import { setDoc,doc } from 'firebase/firestore'

import whatsAppClient from "@green-api/whatsapp-api-client";
import { collection, query, where, getDocs } from "firebase/firestore";
const Push_noti = () => {
  const [notification, setnotification] = useState(null)
  const notification_set = (e) => {
    let Notification = e.target.value;
    setnotification(Notification);
  };


  const add_notification = async () => {
    
    if (notification === '') {
      
      
    } else {


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
    '🔔 ' + notification +'\nView now : http://localhost:3001/'
  );
  
  response.then(
    console.log('notification sent')
  )


});




      await setDoc(
        doc(db, "Notifications", notification),
        {
          notification:notification,
        },
        { merge: true }
      ).then(() => {
        document.getElementById('Noti_input').value = ''

      });
    }
  };

  return (
   <div className="Push_noti">
    Push Notification
      <div className="Push_noti_row">
      <input type="text" className='Noti_input' onChange={notification_set} id='Noti_input'/>
      <div className="Change_note_button" onClick={add_notification}>
     Notify
     </div>
      </div>
   </div>
  )
}

export default Push_noti