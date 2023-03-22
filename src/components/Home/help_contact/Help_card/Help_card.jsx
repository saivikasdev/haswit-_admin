import React from 'react'

const Help_card = (props) => {
  const { mentor } = props
  return (
   <div className="Help_card">
      <div className="Help_contact_card">
        <div className="Mentor_name">
          {mentor.Mentorname}
        </div>
        <div className="Phone">
        {mentor.Mentorphone}
        </div>
      </div>
   </div>
  )
}

export default Help_card