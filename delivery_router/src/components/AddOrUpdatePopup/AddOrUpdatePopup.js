import './AddOrUpdatePopup.css'
import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import LocationForm from '../LocationForm/LocationForm';


const AddOrUpdatePopup = (props) => { 

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <div>
      <div type="button" className="button" onClick={() => setOpen(o => !o)}>
        {props.buttonName}
      </div>
      <Popup 
        open={open} 
        closeOnDocumentClick 
        onClose={closeModal}
        id='popup'
        >
      <a className="close" onClick={closeModal}>
            &times;
          </a>
          <div className='form' >
          <LocationForm locationDetails={props.locationDetails} />
        </div>
      </Popup>
    </div>
  )
}

export default AddOrUpdatePopup
