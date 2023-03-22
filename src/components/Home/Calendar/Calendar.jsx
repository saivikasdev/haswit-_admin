import React from 'react'
import './Calendar.css'
import { UisCheckCircle } from "@iconscout/react-unicons-solid";
import { UisTimesCircle } from "@iconscout/react-unicons-solid";
import Canlendar_table_card from './Canlendar_table_card/Canlendar_table_card';
import Calendar_block from './Calendar_block/Calendar_block';
const Calendar = () => {
  return (
   <div className="Calendar">
 
    <div className="My_journey">
      <div className="My_journey_title">MY JOURNEY</div>
      <div className="months_dropdown">
        <div class="btn-group">
          <button type="button" class="btn btn-danger">
            May
          </button>
          <button
            type="button"
            class="btn btn-danger dropdown-toggle dropdown-toggle-split"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="sr-only">May</span>
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">
              May
            </a>

            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              June
            </a>

            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              July
            </a>
          </div>
        </div>
      </div>
      <div className="Calender_row">
        <div class="Calender">
          <div class="day_name">Sunday</div>
          <div class="day_name">Monday</div>
          <div class="day_name">Tuesday</div>
          <div class="day_name">Wednesday</div>
          <div class="day_name">Thursday</div>
          <div class="day_name">Friday</div>
          <div class="day_name">Saturday</div>
          <div className="empty_month "></div>
          <div class="block other">
            <div className="date">30</div>
          </div>
          <div class="block other">
            <div className="date">31</div>
            <div className="Session_name">
              <div className="text_"></div>
            </div>
          </div>
         
          <Calendar_block/>
          <Calendar_block/>
          <Calendar_block/>
          <Calendar_block/>
          <Calendar_block/>
          <Calendar_block/>
          <Calendar_block/>
          <Calendar_block/>
          <Calendar_block/>
          <Calendar_block/>
          <Calendar_block/>
          <Calendar_block/>
          <Calendar_block/>
          <Calendar_block/>
          <Calendar_block/>
          <Calendar_block/>
          <Calendar_block/>
          <Calendar_block/>
          <Calendar_block/>
          <Calendar_block/>
          <Calendar_block/>
          <Calendar_block/>
          <Calendar_block/>
          
          <Calendar_block/>
          
          <Calendar_block/>
          
          <Calendar_block/>
          <div class="block">
            <div className="date_status">
              <div className="date">01</div>
              <div className="icon_status">
                <UisTimesCircle size="15" color="rgb(255, 0, 0)" />
              </div>
            </div>

            <div className="Session_name">
              <div className="text_">CSS Styling</div>
            </div>
          </div>
          
          <Calendar_block/>
          <Calendar_block/>
          <div class="block other">
            <div className="date">1</div>
            <div className="Session_name"></div>
          </div>
          <div class="block other">
            <div className="date">2</div>
            <div className="Session_name"></div>
          </div>
          <div class="block other">
            <div className="date">3</div>
            <div className="Session_name"></div>
          </div>
          <div class="block other">
            <div className="date">4</div>
            <div className="Session_name"></div>
          </div>
        </div>
        <div className="Sessions_table">
          <div className="Sessions_title">Sessions List</div>
          <div className="Month">May</div>
       
         <Canlendar_table_card/>
         <Canlendar_table_card/>
         <Canlendar_table_card/>
         <Canlendar_table_card/>
         <Canlendar_table_card/>
         <Canlendar_table_card/>
         <Canlendar_table_card/>
         <Canlendar_table_card/>
         <Canlendar_table_card/>
         <Canlendar_table_card/>
         <Canlendar_table_card/>
        </div>
      </div>
    </div>

   </div>
  )
}

export default Calendar