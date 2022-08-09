import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

function CreateProducts() {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/delete-product")
  }

  const [users, setUsers] = useState({
    firstName : "",
    lastName : "",
    email : "",
    phone : "",
    password : ""

  })

  const handleChange = (e) => {
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

  return (
    <div>
      <div className="txt" style={{textAlign : "center"}}>
        <h4>Create Products</h4>
      </div>
      <div className='form' style={{width : "600px", padding : "50px", borderRadius : "5px", margin : "auto"}}>
                <div className="firstName">
                    <h4>Fist Name</h4>
                        <TextField id="outlined-search" label="First Name" type="text" style={{width : "100%"}} name="firstName" value={users.firstName} onChange={handleChange}/>
                </div>

                <div className="lastName" style={{marginTop : "20px"}}>
                    <h4>Last Name</h4>
                    <TextField id="outlined-search" label="Last Name" type="mail" style={{width : "100%"}} name="lastName" value={users.lastName} onChange={handleChange}/>
                </div>

                <div className="email" style={{marginTop : "20px"}}>
                    <h4>Email Address</h4>
                    <TextField id="outlined-search" label="Email" type="mail" style={{width : "100%"}} name="email" value={users.email} onChange={handleChange}/>
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
                            onChange={handleChange}
                    />
                    <Button type="submit" onClick={handleSubmit} variant="contained" color="primary" style={{marginTop : "20px", width : "100%"}}>Submit</Button>
                </div>      
            </div>
    </div>
  )
}

export default CreateProducts