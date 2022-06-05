import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import LocationsApi from '../../api/LocationsApi'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/AuthHooks'


const DeletePopup = (props) => {

  const navigate = useNavigate()
  const { authToken } = useAuth()

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const handleClick = () => {
    LocationsApi.fetchDeleteLocation(props.id.toString() , authToken)
    return navigate('/locations/')
  }

  return (
    <div>
      <div type="button" className="button" onClick={() => setOpen(o => !o)}>
        Delete
      </div>
      <Popup 
        open={open} 
        closeOnDocumentClick 
        onClose={closeModal}
        >
      <a className="close" onClick={closeModal}>
            &times;
          </a>
          <div className='form' >
            <div  >Are you sure you want to delete location?</div>
            <button onClick={handleClick} >Delete</button>
          </div>
      </Popup>
    </div>  )
}

export default DeletePopup