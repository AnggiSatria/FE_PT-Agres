import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useFormControl } from '@mui/material/FormControl';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function UpdateProducts() {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/list-user")
  }

  const [users, setUsers] = useState({
    firstName : "",
    lastName : "",
    email : "",
    phone : "",
    password : ""

  })

  const handleOnChange = (e) => {
    setUsers({
      ...users,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(users);
    handleNavigate()
  }

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <div>
      <div className="txt" style={{textAlign : "center"}}>
        <h4>Update Product</h4>
      </div>
      <div className='form' style={{width : "600px", padding : "50px", borderRadius : "5px", margin : "auto"}}>
                <div className="firstName">
                    <h4>Nama</h4>
                        <TextField id="outlined-search" label="First Name" type="text" style={{width : "100%"}} name="firstName" value={users.firstName} onChange={handleOnChange}/>
                </div>

                <div className="lastName" style={{marginTop : "20px"}}>
                    <h4>SKU</h4>
                    <TextField id="outlined-search" label="Last Name" type="mail" style={{width : "100%"}} name="lastName" value={users.lastName} onChange={handleOnChange}/>
                </div>

                <div className="email" style={{marginTop : "20px"}}>
                    <h4>Brand</h4>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Brand"
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>MouseTech</MenuItem>
                    <MenuItem value={20}>Logitech</MenuItem>
                    <MenuItem value={30}>Any</MenuItem>
                    </Select>
                </div>

                <div className="lastName" style={{marginTop : "20px"}}>
                    <h4>No Phone</h4>
                    <TextField id="outlined-search" label="No Phone" type="number" style={{width : "100%"}} name="phone" value={users.phone} onChange={handleChange}/>
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
                            value={users.password}
                            onChange={handleOnChange}
                    />
                    <Button type="submit" onClick={handleSubmit} variant="contained" color="primary" style={{marginTop : "20px", width : "100%"}}>Submit</Button>
                </div>      
            </div>
    </div>
  )
}

export default UpdateProducts