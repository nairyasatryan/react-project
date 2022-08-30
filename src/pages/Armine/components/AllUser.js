import { Component, useEffect, useState } from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, styled, Button} from '@mui/material';
import {Link} from "react-router-dom";
import React from 'react';


const StyledTable = styled(Table)`
  width:90%;
  margin: 50px auto 0 auto;
`
const Thead = styled(TableRow)`
  background:#000;
  & > th{
    color:#fff;
    font-size:20px;
  }
`
const TBody = styled(TableRow)`
  background:#0000;
  & > td{
    font-size:20px;
  }
`
const AllUser = () => {

  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   getUsersDetalis();
  // }, [])

  // const getUsersDetalis = async () => {
  //   let response = await getUsers();
  //   console.log(response);
  //   setUsers(response.data);
  // }
  return (
    <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </Thead>
      </TableHead>
      <TableBody>
        
          
            <TBody>
              <TableCell>Armine</TableCell>
              <TableCell>Demirchyan</TableCell>
              <TableCell>145</TableCell>
              <TableCell>58578</TableCell>
              <TableCell>4</TableCell>
              <TableCell>
                <Button variant="contained" style={{marginRight:10}} component={Link} to="/armine/edit">Edit</Button>
                <Button variant="contained" color="secondary">Delete</Button>
              </TableCell>
              
            </TBody>
          
        
      </TableBody>
    </StyledTable>
  )
}

export default AllUser;