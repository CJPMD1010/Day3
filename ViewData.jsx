import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ViewData() {

    
    var [user,setUser] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{setUser(res.data)})
        .catch((err=> console.log(err)))
    },[])

  return (
    <div>
        <TableContainer component={Paper}>
                <TableHead>
                    <TableCell  style={{color:'red'}}>ID</TableCell>
                    <TableCell  style={{color:'red'}}>Name</TableCell>
                    <TableCell  style={{color:'red'}}>Email</TableCell>
                </TableHead>
                <TableBody>
                    {user.map((val) => (
                    <TableRow>
                    <TableCell  style={{color:'red'}}>{val.id}</TableCell>
                    <TableCell>{val.name}</TableCell>
                    <TableCell>{val.email}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
        </TableContainer>
    </div>
  )
}

export default ViewData