import React from 'react'
import './Calendar_block.css'
import { UisCheckCircle } from "@iconscout/react-unicons-solid";
import { UisTimesCircle } from "@iconscout/react-unicons-solid";
const Calendar_block = () => {
  return (
   <div className="Calendar_block">
       <div class="block">
            <div className="date_status">
              <div className="date">01</div>
              <div className="icon_status">
                <UisTimesCircle size="15" color="red" />
                <UisCheckCircle size="15" color="rgba(0, 255, 0, 0.655)" />
                <UisCheckCircle size="15" color="rgba(0, 255, 0, 0.655)" />
              </div>
            </div>

            <div className="Session_name">
              <div className="text_">CSS Styling</div>
            </div>
          </div>
   </div>
  )
}

export default Calendar_block