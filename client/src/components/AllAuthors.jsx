import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Button from '@mui/material/Button'

const AllAuthors = () => {


    const [allAuthors, setAllAuthors] = useState([])


    useEffect(() => {
        axios.get('http://localhost:8000/api/allAuthors')
            .then((response) => {
                console.log(response)
                setAllAuthors(response.data)})
            .catch((error) => {
                console.log(error)})
            }, [])


    const deleteHandler=(id) => {
        axios.delete(`http://localhost:8000/api/deleteAuthor/${id}`)
            .then((response) => {
                console.log(response)
                window.location.reload()})
            .catch((error) => {
                console.log(error)})}

  return (
    <div style={{}}>
        <h2 style={{marginBottom:"10px"}}>FULL AUTHOR LIST</h2>

        <Link to={`/createAuthor/`}>
            <Button style={{margin:"0px"}} variant="contained">Add an Author</Button>
        </Link>
        
        <Table style={{width:"800px", margin:"10px auto"}}>
            <TableHead>
            <TableRow style={{backgroundColor:"lavender"}}>
                <TableCell style={{fontWeight:"bold"}}>Author Name</TableCell>
                <TableCell style={{fontWeight:"bold"}}># of Works</TableCell>
                <TableCell style={{fontWeight:"bold"}}>Most Famous Work</TableCell>
                <TableCell style={{fontWeight:"bold"}}>Actions Available</TableCell>
            </TableRow>

            {allAuthors.map((author) => (
            <TableRow key={author._id}>
                <TableCell>{author.authorName}</TableCell>
                <TableCell>{author.booksWritten}</TableCell>
                <TableCell>{author.mostFamous}</TableCell>
                <TableCell>
                    
                    <Link to={`/updateAuthor/${author._id}`}>
                    <button style={{
                        padding:"8px 20px",
                        marginRight:"10px",
                        cursor:"pointer",
                        backgroundColor:"lightBlue",
                        border:"black 1px solid",
                        borderRadius:"3px",}}>
                        Edit</button>
                    </Link>

                    <button style={{
                        padding:"3px 10px",
                        cursor:"pointer"}}
                        onClick={() => deleteHandler(author._id)}>
                        Delete</button>

                </TableCell>
            </TableRow>
            ))}
            </TableHead>
        </Table>
    </div>
  )
}

export default AllAuthors