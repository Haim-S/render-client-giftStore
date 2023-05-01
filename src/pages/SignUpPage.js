import React, {useState} from 'react'
import Login from '../components/login/Login'
import Register from '../components/register/Register'

const SignUpPage = () => {

  const [showLogin, setShowLogin] = useState(true);


  return (
    <div className='signContainer'>
        {showLogin ?
        <Login setShowLogin={setShowLogin}/> :
        <Register setShowLogin={setShowLogin}/>
      }
    </div>
  )
}

export default SignUpPage