import React, { useState } from 'react';
import axios from 'axios';
import { Button, CircularProgress, TableContainer, Table, TableHead, TableCell, TableBody, TableRow } from '@mui/material';

function ViewPost() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = () => {
        setLoading(true);
        axios.get("https://api.github.com/users")
        // axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => { setUser(res.data); setLoading(false); })
            .catch((err) => { console.error('Error fetching data:', err); setLoading(false); });
    }

    return (
        <div>
            {loading ? <CircularProgress color='primary' /> :
                <TableContainer style={{ background: 'white' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{color:'red'}}>Login</TableCell>
                                <TableCell style={{color:'red'}}>ID</TableCell>
                                <TableCell style={{color:'red'}}>Avatar</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {user.map((val) => (
                                <TableRow key={val.id}>
                                    <TableCell style={{ color: 'red' }}>{val.login}</TableCell>
                                    <TableCell>{val.id}</TableCell>
                                    <TableCell><img height={"100px"} src={val.avatar_url}/></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>}

            <br /><br />
            <Button variant="contained" color="primary" onClick={fetchData}>
                View Data
            </Button>
        </div>
    );
}

export default ViewPost;
