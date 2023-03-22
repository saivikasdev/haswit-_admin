import React, { useEffect, useState } from 'react'
import './Note_text.css'
import { setDoc,query,collection,onSnapshot,doc,getDoc ,deleteDoc} from 'firebase/firestore';
import { db } from '../../firebase-config';
import { UilTimes } from '@iconscout/react-unicons'
const Note_text = () => {
  const [note_text, setnote_text] = useState('')
  const [Note_text, setNote_text] = useState('')
  
  const fetchData = async () => {

    const docRef = doc(db, "Note_text", "Note_text");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      document.getElementById("note_text_main").innerHTML = docSnap.data().note_text;
      setNote_text(docSnap.data())
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    
  
  };

  const delete_note = async () => {
    await deleteDoc(doc(db, "Note_text", "Note_text"));
  }
  const note_text_set = (e) => {
    let note_text = e.target.value;
    setnote_text(note_text);
  };
  const  change_note = async () => {
    
    if (note_text === '') {
      
      
    } else {
      await setDoc(
        doc(db, "Note_text", 'Note_text'),
        {
          note_text:note_text,
        },
        { merge: true }
      ).then(() => {
        document.getElementById('Note_input').value = ''

      });
    }
  };



  useEffect(() => {
    fetchData();
  }, []);


  return (
   <div className="Note_text">
     Change Note Text:
     <div className="Note_row">
      
     <input type="text" className='Note_input' onChange={note_text_set} id='Note_input'/>
     <div className="Change_note_button" onClick={change_note}>
     Change Note
     </div>
     </div>

    <div className="note_text_main" id='note_text_main'> </div>
    <div className="delete"><UilTimes color="white" className ='delete' onClick={
      delete_note
    }/></div>



</div>
  )
}

export default Note_text