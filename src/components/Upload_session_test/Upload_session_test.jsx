import './Upload_session_test.css'
import React from 'react'
import Session_upload_card from './Session_upload_card/Session_upload_card'
import Test_card from './Test_card/Test_card'

const Upload_session_test = () => {
  return (
    <div className="Upload_session_test">
      <div className="Test_session_row">
      <div className="Test_column">
      <Test_card/>
      </div>
      <div className="Session_column">
      <Session_upload_card/>
       <Session_upload_card/>
      </div>
      </div>
    </div>
  )
}

export default Upload_session_test