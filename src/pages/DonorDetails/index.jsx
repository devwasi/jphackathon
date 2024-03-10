import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../config/firebase'
import { useNavigate } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore'
import DropDown from '../../components/RadioGroup';
import { useSelector } from 'react-redux';
import { FormControl, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function DonorDetails() {
  // const handleSubmit = (event) => {
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };
  const [name, setName] = useState("")
  const [city, setCity] = useState("")
  const [address, setAddress] = useState("")
  const [age, setAge] = useState(0)
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("")
  const [empty, setEmpty] = useState(false)
  const [bloodGroup, setBloodGroup] = useState("")
  const [contactNum, setContactNum] = useState("")
  
  const navigate = useNavigate()
  
//   const selector = useSelector(state=>state.bloodGroupreducer)
  
  const donorHandler = async (e)=>{
    e.preventDefault();
    console.log("first", email, name, city,address,age, gender, bloodGroup)
    // console.log(selector)

    if(name && city && address && age && email){
setEmpty(false)
    
      try {
        
            // set donor data in database
            const uid = localStorage.getItem("uid")
                  const userObj = {
                      name,
                      email,
                      age,
                      city,
                      address,
                      gender,
                      bloodGroup,
                      uid,
                      contactNum
                  }
            await setDoc(doc(db,"donors",uid),userObj)
            navigate("/home")
              
      } catch (error) {
          console.log(error)
      }
    } else{
        console.log("please fill all fields")
        setEmpty(true)
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Donor Registration
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                {
                    empty && <Grid item xs={12}><Typography variant='h6' color={"red"}>Please fill all fields</Typography></Grid>
                }
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="fullName"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  autoFocus
                  onChange={e=>setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="age"
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  autoFocus
                  type='Number'
                  onChange={e=>setAge(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="address"
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  autoFocus
                  onChange={e=>setAddress(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="city"
                  required
                  fullWidth
                  id="city"
                  label="city"
                  autoFocus
                  onChange={e=>setCity(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
              <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    onChange={e=>setGender(e.target.value)}
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl>

              </Grid>
{/* blood group */}
<Grid item xs={12}>
<FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={bloodGroup}
          label="BloodGroup"
          onChange={e=>setBloodGroup(e.target.value)}
        >
          <MenuItem value={"A-"}>A-</MenuItem>
          <MenuItem value={"B-"}>B-</MenuItem>
          <MenuItem value={"AB-"}>AB-</MenuItem>
          <MenuItem value={"O-"}>O-</MenuItem>
          <MenuItem value={"A+"}>A+</MenuItem>
          <MenuItem value={"B+"}>B+</MenuItem>
          <MenuItem value={"AB+"}>AB+</MenuItem>
          <MenuItem value={"O+"}>O+</MenuItem>
        </Select>
      </FormControl>
</Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={e=>setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="contactNum"
                  type='tel'
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  label="contact Number"
                  name="contactNum"
                  autoComplete="contactNum"
                  onChange={e=>setContactNum(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              onClick={donorHandler}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={"/"} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}