
import React, {useRef} from 'react'
import "../login/login.css";
import {TextField} from "@mui/material";
import {Alert} from '@mui/material';
import {useNavigate} from "react-router-dom";
import {UseAuthContext} from "../../context/contextAuth";


const Register = ({setShowLogin}) => {


    
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const ageRef = useRef();
  const countryRef = useRef();

  
  const navigate = useNavigate();



  const Use_Register = UseAuthContext().Use_Register;
  const isAuth = UseAuthContext().isAuth;

  const handleSubmit = async(e) => {
    e.preventDefault();
    const values = {
      email:     emailRef.current.value,
      password:  passwordRef.current.value,
      firstName: firstNameRef.current.value,
      lastName:  lastNameRef.current.value,
      age:       ageRef.current.value,
      country:   countryRef.current.value
    }
    await Use_Register(values);
    
    emailRef.current.value = "";
    passwordRef.current.value = "";
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    ageRef.current.value = "";
    countryRef.current.value = "";
    // console.log(isAuth);
    if(isAuth) navigate("/");
  }
  

const error = "";
    


  return (
    <div className='registerBox'>
    <h1 className='LoginTitle'>Register</h1>
    <form onSubmit={handleSubmit}>
    <div style={{width: "100%", height: "100%", display: "flex", alignContent: "center", justifyContent: "center", flexDirection: "column"}}>
        <p>Already a member? <span className='sign-color' onClick={()=> setShowLogin(true)}>Sign In</span></p>
        {error ? 
        <Alert severity="error">{error}</Alert>
      : " "  
      }

    <div style={{display: "flex", justifyContent: "space-evenly"}}>
  
    <TextField inputRef={emailRef} name="email" type="text" variant='outlined' label='Email' required/>
  
    <TextField inputRef={passwordRef} name="password" type="text" variant='outlined' label='Password' />
    
    <TextField inputRef={firstNameRef} name="firstName" type="text" variant='outlined' label='First name' />
    </div>

    <div style={{marginTop: "5%", display: "flex", justifyContent: "space-evenly"}}>
 
    <TextField inputRef={lastNameRef} name="lastName" type="text" variant='outlined' label='Last name' />

    <TextField inputRef={ageRef} name="age" type="number" variant='outlined' label='Age' />

    <TextField inputRef={countryRef} name="country" type="text" variant='outlined' label='Country'/>
    </div>

    </div>
    <div style={{ display: "flex", alignContent: "center", justifyContent: "center", marginTop: "35px"}}>
    <button className='Btnsign' type="submit" variant="contained">Register</button>
    </div>
    </form>
</div>
  )
}

export default Register