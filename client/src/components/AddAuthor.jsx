import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Button from '@mui/material/Button'

const AddAuthor = () => {

  const [author, setAuthor] = useState({
    authorName: '',
    booksWritten: '',
    mostFamous: ''
  })


  const navigate = useNavigate()
  const [errors, setErrors] = useState({})

  const changeHandler = (e) => {
    setAuthor({...author, [e.target.name]: e.target.value})}


  const submitHandler = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/createAuthor', author)
      .then((response) => {
        console.log(response)
        navigate('/')})
      .catch((errors) => {
        console.log(errors)
        setErrors(errors.response.data.errors)
      })
  }

  return (
    <div>
        <h2 style={{marginBottom:"0px"}}>ADD A NEW AUTHOR</h2>
        
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
                        Add Author</button>

                    <Link to={`/`}><button style={{
                        padding:"3px 10px",
                        cursor:"pointer"}}>
                        Cancel</button>
                    </Link>
            </form>
    </div>
  )
}

export default AddAuthor