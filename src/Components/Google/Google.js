import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../../FIrebase/firebase.init';
import './Google.css'
import { FcGoogle } from "react-icons/fc";


const auth = getAuth(app);
const google = () => {
    const googleProvider = new GoogleAuthProvider();

    const handleWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
        })
    }

    return (
      <div>
        <button className="google-btn" onClick={handleWithGoogle}>
          <FcGoogle id='icon'/> <span>Continue with Google</span>
        </button>
      </div>
    );
};

export default google;