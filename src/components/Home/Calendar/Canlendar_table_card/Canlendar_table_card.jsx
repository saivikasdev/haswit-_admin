import React from 'react'
import './Canlendar_table_card.css'
import { UisCheckCircle } from "@iconscout/react-unicons-solid";
import { UisTimesCircle } from "@iconscout/react-unicons-solid";
const Canlendar_table_card = () => {
  return (
   <div className="Canlendar_table_card">
 <div className="Session_card">
            <div className="card_row">
              <div className="Session_date">28</div>
              <div className="Session_title">Python tuples</div>
              <div className="Status incomplete">
                <div className="icon_status">
                  <UisTimesCircle size="15" color="rgba(255, 17, 0, 0.655)" />
                </div>
                Live
              </div> 



              <div className="Status completed">
                <div className="icon_status">
                  <UisCheckCircle size="15" color="green" />
                </div>
                Test
              </div>

              <div className="Status completed">
                <div className="icon_status">
                  <UisCheckCircle size="15" color="green" />
                </div>
                Session
              </div>
            </div>
          </div>

          <hr class="solid"></hr>
   </div>
  )
}

export default Canlendar_table_card