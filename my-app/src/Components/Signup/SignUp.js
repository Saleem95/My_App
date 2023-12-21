import React from 'react';
import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import axios from 'axios'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import Signin from '../Signin/Signin';

function SignUp(props) {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    // const initialValues = { email: "", password: "" };
    // const [inputValue, setinputValue] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
 const [inputValue, setInputValue] = React.useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    number:""
 });

 function textChange(e) {
  const { name, value } = e.target;
  setInputValue({ ...inputValue, [name]: value });
}


  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(inputValue);
    }
    getSignup();

  }, [formErrors]);

  //get data
  async function getSignup() {
    try {
      const item = await axios.get(`http://localhost:5000/api/signup/items`)
      return setItems(item.data);
    } catch (error) {
      console.log("Something is Wrong");
    }
  }
  

  async function postSignup(e) {
    try {
      e.preventDefault();
      setFormErrors(validate(inputValue));
      setIsSubmit(true);
      // const item = await axios.post(`http://localhost:5000/api/items`)
      let item=await axios.post('http://localhost:5000/api/signup/item', inputValue)
      // navigate("/home")
      return setItems(item.data);


    } catch (error) {
      navigate("/home")

      console.log("Something is Wrong");
    }
  }

const mystyle = {
  textAlign:'center',
    margin:"auto",
    Heignt:'100vh'
  };
  const validate = (values) => {
    const errors = {};
    const regex =
    //  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i/
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+@.+\..+$/;
  
    if (!values.name) {
      errors.name = "UserName is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format! At least one uppercase letter At least one lowercase letter At least one number At least one special character";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    // else if (values.password.length === values.confirmPassword.length) {
    //   errors.password = "Password not same";
    // }
    return errors;
  };
 return (
  <div className='conatiner-box'>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        // <pre>{JSON.stringify(inputValue, undefined, 2)}</pre>
        <p>
          Please fill the details
        </p>
      )}


    <Box
    style={mystyle}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50%' },
      }}
      noValidate
      autoComplete="on"
    >
      <div>
    <Grid>
    <TextField
        autoComplete="name" 
        required fullWidth
         color="error"
         onChange={e => textChange(e)} 
          id="outlined-basicname"
          label="Enter your name"
          variant="outlined"
          name='name'
          value={inputValue.name}
        />
     <p>{formErrors.name}</p>

    </Grid>
    <Grid>
    <TextField
        autoComplete="email" 
        required fullWidth
         color="error"
         onChange={e => textChange(e)} 
          id="outlined-basicemail"
          label="Enter your email*"
          variant="outlined"
          name='email'
          value={inputValue.email}
        />
     <p>{formErrors.email}</p>
    </Grid>
    <Grid>
         <TextField
          onChange={e => textChange(e)} 
          id="outlined-password-inputs"
          label="Password"
          name='password'
          type="password"
          autoComplete="current-password"
          value={inputValue.password}
        />
     <p>{formErrors.password}</p>
    </Grid>
    <Grid>
         <TextField
          onChange={e => textChange(e)} 
          id="confirmPassword"
          label="Confirm-Password"
          name='confirmPassword'
          type="password"
          autoComplete="current-password"
          value={inputValue.confirmPassword}
        />
     <p>{formErrors.confirmPassword}</p>
    </Grid>
    <Grid>
    <TextField
        autoComplete="number" 
        required fullWidth
         color="error"
         onChange={e => textChange(e)} 
          id="number"
          label="Enter your number*"
          variant="outlined"
          name='number'
          value={inputValue.number}
        />
     <p>{formErrors.number}</p>
    </Grid>
      </div>
      <div>
        <Button variant="contained" onClick={postSignup}>
          SignUp
        </Button>
        <Button variant="contained" onClick={()=>navigate('/')}>
          SignIn
        </Button>
      </div>
    </Box>

    </div>

 );
}

export default SignUp;