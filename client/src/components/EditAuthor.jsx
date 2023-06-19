import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useParams, useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button'

const EditAuthor = () => {


  const [author, setAuthor] = useState({
    authorName: '',
    booksWritten: '',
    mostFamous: ''
  })


  const {id} = useParams()
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})


  const changeHandler = (e) => {
    setAuthor({...author, [e.target.name]: e.target.value})
  }


  useEffect(() => {
    axios.get(`http://localhost:8000/api/oneAuthor/${id}`)
        .then((response) => {
            console.log(response.data)
            setAuthor(response.data)})
        .catch((error) => {console.log(error)})
    }, [])


  const submitHandler = (e) => {
      e.preventDefault()
      axios.patch(`http://localhost:8000/api/updateAuthor/${id}`, author)
          .then((response) => {
              console.log(response)
              navigate('/')})
          .catch((errors) => {
              console.log(errors)
          setErrors(errors.response.data.errors)
      })
  }


  const deleteHandler=(id) => {
      axios.delete(`http://localhost:8000/api/deleteAuthor/${id}`)
          .then((response) => {
              console.log(response)
              navigate('/')})
          .catch((error) => {
              console.log(error)})}
  

  return (
    <div>
        <h2 style={{marginBottom:"0px"}}>EDIT THIS AUTHOR</h2>

        <Link to={`/`}>
            <Button style={{margin:"10px", scale:"70%"}} variant="contained">Back to Home</Button>
        </Link>

            <form onSubmit = {submitHandler}
                style={{
                height:"300px",
                width:"350px",
                border:"black solid 1px",
                padding:"20px",
                margin:"auto"}}>

                    <p>Author Name:</p>
                    <input style={{padding:"5px", width:"250px", marginBottom:"10px"}} type="text" onChange={changeHandler} value={author.authorName} name="authorName"/>
                    {errors.authorName ? <p style={{color:"red", fontSize:"10pt", margin:"-10px 0px 10px"}}>{errors.authorName.message}</p> : null}
                    
                    <p># of Works:</p>
                    <input style={{padding:"5px", width:"250px", marginBottom:"10px"}}type="text" onChange={changeHandler} value={author.booksWritten} name="booksWritten"/>
                    {errors.booksWritten ? <p style={{color:"red", fontSize:"10pt", margin:"-10px 0px 10px"}}>{errors.booksWritten.message}</p> : null}
                    
                    <p>Most Famous Work:</p>
                    <input style={{padding:"5px", width:"250px", marginBottom:"10px"}}
                    type="text" onChange={changeHandler} value={author.mostFamous} name="mostFamous"/>
                    {errors.mostFamous ? <p style={{color:"red", fontSize:"10pt", margin:"-10px 0px 10px"}}>{errors.mostFamous.message}</p> : null}
                    
                    <br />
                    <button style={{
                        padding:"8px 20px",
                        margin:"10px 10px 0px 0px",
                        backgroundColor:"lightBlue",
                        border:"black 1px solid",
                        borderRadius:"3px",
                        cursor:"pointer"}}>
                        Edit Author</button>

                    <Link to={`/`}>
                        <button style={{
                        padding:"3px 10px",
                        marginRight:"10px",
                        cursor:"pointer"}}>
                        Cancel</button>
                    </Link>

                    <button style={{
                        padding:"3px 10px",
                        cursor:"pointer"}}
                        onClick={() => deleteHandler(author._id)}>
                        Delete</button>
            </form>
    </div>
  )
}

export default EditAuthor