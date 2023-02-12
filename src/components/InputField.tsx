import React, { useEffect, useState } from 'react';
import {TextField, Stack, Box, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


interface userState{
    username:string,
    phone: string,
    email: string
}


//get form data from localstorage
const getFormValue=()=>{
  const storeValue=localStorage.getItem("formData")
  if(!storeValue) return {
      username:"",
      phone: "",
      email:"" 
  }
  return JSON.parse(storeValue)
}

const InputField = () => {
  const navigate=useNavigate()
  const [value, setValue]=useState<userState>(getFormValue)


  //set the user data in localstorage
  useEffect(()=>{
    localStorage.setItem("formData", JSON.stringify(value))
  },[value])

  //handle input field change
  const handleChange=(event:React.ChangeEvent<HTMLInputElement>): void=>{
    setValue({
    
      ...value,
      [event.target.name]:event.target.value,
  
   })
  }
 
  //handle submit form
  const handleSubmit=(event:React.FormEvent<HTMLFormElement>): void=>{
    event.preventDefault();
    toast.success("Data placed successfully")
    navigate("/user")
  }
  
  return (
       <div  style={{
          width: "25%", margin:"auto",
        }}>
       <Stack spacing={4} sx={{background:"white", boxShadow:"5", py:5,   borderRadius:2, mt:10 }}>
        <Box component="form" onSubmit={handleSubmit}  sx={{
        '& .MuiTextField-root': { m: 2, width: '80%', ml:3.5},
        }}>
         <div>
        <TextField
             required
             onChange={handleChange}
             value={value.username}
             name="username"
             label="Name"
             type="text"
             variant="standard"
           />
        </div>
         <div>
         <TextField
             required
             onChange={handleChange}
             value={value.phone}
             name="phone"
             label="Phone Number"
             type="text"
             variant="standard"
           />
         </div>
         <div>
         <TextField
             required
             onChange={handleChange}
             value={value.email}
             name="email"
             label="Email"
             type="email"
             variant="standard"
           />
         </div>
         <div style={{marginLeft:27, marginTop:10}}>
         <Button variant="outlined" type='submit'>Submit</Button>
         </div>
       </Box>
    </Stack>
    </div>
    );
};

export default InputField;