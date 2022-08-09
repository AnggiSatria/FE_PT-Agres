import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useMutation } from "react-query"
import { Users }  from "../../components/Data Dummy/index"

function Form() {
    
    const navigate = useNavigate()

    const data = Users
    console.log(data);

   const users = data.find(function(e) {
        return e.email
   })

    const handleLogin = () => {
        navigate("/create-product")
    }

    const [login, setLogin] = useState({
        email : "",
        password : "",
    })

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault() 
        console.log(login);
        
        if(login.email == users.email&&users.status == "admin"){
            handleLogin()
        }else if(login.email == users.email&&users.status == "client"){
            handleLogin()
        }else{
            navigate("/")
        }
    }

  return (
    <div style={{marginTop : "50px"}}>
        <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        style={{ 
        width : "400px", 
        margin : "auto", 
        padding : "50px", 
        borderRadius : "5px"
        }}
        >
            <div className="email">
                <h4>Email</h4>
                <TextField id="outlined-search" label="Email" type="search" style={{width : "100%"}} name="email" value={login.email} onChange={handleChange}/>
            </div>

            <div className="password" style={{marginTop : "20px"}}>
                <h4>Password</h4>
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    style={{width : "100%"}}
                    name="password"
                    value={login.password}
                    onChange={handleChange}
                />
            </div>      

            <div className="button" style={{marginTop : "20px"}}>
                <Button type='submit' variant='contained' color='primary' style={{width : "100%", height : "40px"}}>Login</Button>
            </div>

            </Box>
            
    </div>
  )
}

export default Form