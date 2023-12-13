import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, CircularProgress } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ViewData() {
    var [user, setUser] = useState([])
    var [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     setLoading(true)
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    //         .then((res) => { setUser(res.data); setLoading(false) })
    //         .catch((err) => { console.log(err); setLoading(false) })
    // }, []); // Empty dependency array ensures that useEffect runs only once, similar to componentDidMount

    const fetchData = () => {
        setLoading(true)
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => { setUser(res.data); setLoading(false) })
            .catch((err) => { console.log(err); setLoading(false) })
    }

    return (
        <div>
            {loading ? <CircularProgress color='primary' /> :
                <TableContainer component={Paper}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ color: 'red' }}>ID</TableCell>
                            <TableCell style={{ color: 'red' }}>Name</TableCell>
                            <TableCell style={{ color: 'red' }}>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((val) => (
                            <TableRow key={val.id}>
                                <TableCell style={{ color: 'red' }}>{val.id}</TableCell>
                                <TableCell>{val.name}</TableCell>
                                <TableCell>{val.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </TableContainer>
            }
            <br></br><br></br>
            <Button variant="contained" color="primary" onClick={fetchData}>
                View Data
            </Button>
        </div>
    )
}

export default ViewData
