import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

function ListDelete() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const users = [
    {
      id : "1",
      firstName : "Anggi",
      lastName : "Satria",
      email : "anggisatria122@gmail.com",
      phone : "0895321589992",
    },
  ]

  const navigate = useNavigate()

  const handleNavigate = (e) => {
    navigate("/create-product")
  }

  const handleUpdate = (e) => {
    navigate("/update-product")
  }

  return (
    <div style={{padding : "50px"}}>
      <div className="header" style={{display : "flex", width : "100%", flex : "50%"}}>
        <h4 style={{flex : "9"}}>List Users</h4>
        <Button onClick={handleNavigate} variant='primary'style={{marginLeft : "20px", flex : "1"}}>Create Product</Button>
      </div>
      
      <Table striped bordered hover variant="dark" style={{marginTop : "20px"}}>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((e) => {
          return <tr>
          <td>{e.id}</td>
          <td>{e.firstName}</td>
          <td>{e.lastName}</td>
          <td>{e.email}</td>
          <td>{e.phone}</td>
          <td>
            <Button onClick={handleShow} variant='danger'>Delete</Button>
            <Button onClick={handleUpdate} variant='danger' style={{marginLeft: "20px"}}>Update</Button>
          </td>
        </tr>
        })}
      </tbody>
    </Table>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <div className="text">
            <h6>Are You Sure Want To Delete?</h6>
          </div>
          <div className="button" style={{display : "flex", flex : "50%", marginTop : "40px"}}>
            <Button variant="secondary" onClick={handleClose} style={{flex : "1", marginRight : "10px"}}>
              Close
            </Button>
            <Button variant="primary" style={{flex : "1", marginLeft : "10px"}}>Yes</Button>
          </div>
          
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ListDelete