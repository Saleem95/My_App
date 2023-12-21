
import React from 'react';
import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import axios from 'axios'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
// import { Grid } from '@mui/material';

function Signin({props}) {
  const initialValues = { email: "", password: "" };
  // const [inputValue, setinputValue] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

 const [inputValue, setInputValue] = React.useState(initialValues);



 const mystyle = {
  textAlign:'center',
    margin:"auto",
    Heignt:'100vh'
  };

 function textChange(e) {
    // setInputValue({
    //   ...inputValue,
    //   [e.target.name]: e.target.value
    // })

    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  }
  // useEffect(() => {
  //   getdata();
  // }, [])
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(inputValue);
    }
    getdata();

  }, [formErrors]);

  //Get All Data
  async function getdata() {
    try {
      const item = await axios.get(`http://localhost:5000/api/signin/items`)
      return setItems(item.data);
    } catch (error) {
      console.log("Something is Wrong");
    }
  }
  //Post data
  const postdata = async (e) =>{
    // const { email, password } = req.body;
    e.preventDefault();
    setFormErrors(validate(inputValue));
    setIsSubmit(true);
    let data=await axios.post('http://localhost:5000/api/signin/item', inputValue)

    if(data){
      console.log(data);
      // alert("Please create New account")
      localStorage.setItem("token", JSON.stringify(data))
      // navigate("/home")
      }else{
        navigate("/signup")
        }
  }


const validate = (values) => {
  const errors = {};
  const regex =/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  // if (!values.username) {
  //   errors.username = "Username is required!";
  // }
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Password must be more than 4 characters";
  } else if (values.password.length > 10) {
    errors.password = "Password cannot exceed more than 10 characters";
  }
  return errors;
};

 return (
  <div className='container-box'>
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
      // noValidate
      autoComplete="on"
    >
      <div>
        
              
        <TextField
        autoComplete="email" 
        required fullWidth
         color="error"
         onChange={e => textChange(e)} 
          id="outlined-basic"
          label="Enter your text"
          variant="outlined"
          name='email'
          value={inputValue.email}
        //   value={inputValue}
        />
          <p>{formErrors.email}</p>

         <TextField
          onChange={e => textChange(e)} 
          id="outlined-password-input"
          label="Password"
          name='password'
          type="password"
          autoComplete="current-password"
          value={inputValue.password}

        />
          <p>{formErrors.password}</p>

      </div>
      <div>
        <Button variant="contained" onClick={postdata}>
          SignIn
        </Button>
        <Button variant="contained" onClick={()=>navigate('/signup')}>
          SignUp
        </Button>

      </div>
    </Box>
    </div>
 );
}

export default Signin;