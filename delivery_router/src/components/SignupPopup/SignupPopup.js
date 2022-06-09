// import './AddOrUpdatePopup.css'
import React from 'react'
import Popup from 'reactjs-popup'
import useAuth from '../../hooks/AuthHooks';
import SignupForm from '../Auth/SignupForm';


const SignupPopup = () => { 

  const { signingup, setSigningup} = useAuth()

  const closeModal = () => {
    setSigningup(false)
  };

  return (
    <div>
      <Popup 
        open={signingup} 
        closeOnDocumentClick 
        onClose={closeModal}
        >
      <a className="close" onClick={closeModal}>
            &times;
          </a>
          <div className='form' >
          <SignupForm />
        </div>
      </Popup>
    </div>
  )
}

export default SignupPopup
