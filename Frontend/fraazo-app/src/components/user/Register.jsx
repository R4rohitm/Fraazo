import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const [details,setDetails]=useState({})
    const navigate=useNavigate()
    console.log(details);
    const handleChange=(e)=>{
        e.preventDefault()
        const {name,value}=e.target
        setDetails({
            ...details,
            [name]:value
        })
        
    }

    const handleRegister=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8080/signup",details)
        .then((res)=>{
            if(res.status===200){
                alert(res.data)
                navigate("/login")
            }
            else{
                alert("unable to reagister at the moment pls try again later")
            }
        })
    }
  return (
    <div>
        <div className='row pb-3 border'>
            <div className="col pt-4" onClick={()=>navigate("/")}>Home</div>
            <div className="col pt-4" onClick={()=>navigate("/")}>Register</div>
            <div className="col pt-4" onClick={()=>navigate("/login")}>login</div>
        </div>
        <br />
        <form action="" onSubmit={handleRegister} className="form pt-3">
            <h1>Register</h1>
            <input type="text" placeholder='name' name='name' onChange={handleChange} required/>
            <br />
            <br />
            <input type="text" placeholder='email' name='email' onChange={handleChange} required/>
            <br />
            <br />
            <input type="text" placeholder='username' name='username' onChange={handleChange} required/>
            <br />
            <br />
            <input type="text" placeholder='password' name='password' onChange={handleChange} required/>
            <br />
            <br />
            <input type="text" placeholder='age' name='age' onChange={handleChange} required/>
            <br />
            <br />
            <input type="submit" className='button'/>
        </form>
    </div>
  )
}

export default Register