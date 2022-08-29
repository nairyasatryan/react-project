import { useEffect, useState } from "react";
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { getUsers } from '../service/api';
import React from 'react';

const AllUser = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsersDetalis();
  }, [])

  const getUsersDetalis = async () => {
    let response = await getUsers();
    console.log(response);
    setUsers(response.data);
  }
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          users.map(user => (
            <TableRow>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  )
}

export default AllUser;