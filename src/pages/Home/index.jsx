import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCounter } from '../../Store/slices/counterSlice'
import ResponsiveAppBar from '../../components/AppBar/AppBar'
import OutlinedCard from '../../components/Card'
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { useNavigate } from 'react-router-dom'
import BgImage from "../../utilis/images/blood-donation.png"

const Home = () => {
   const [donorData, setDonorData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [filter, setFilter] = useState("")

  const navigate =  useNavigate()
  const getdataHandler = async ()=>{
    setIsLoading(true)
      try {
        const arr = [];
        const docSnap = await getDocs(collection(db,"donors"))
  
        docSnap.forEach((doc) => {
          arr.push({
            ...doc.data(),
            id: doc.id,
          });
        });
  
        setDonorData([...arr]);
        setIsLoading(false)
      } catch (error) {
        console.log("error", error);
      }
    
  }

  useEffect(()=>{
getdataHandler()
  },[])

  // Donor Complete Details Handler

  const donorDetailsHandler = ()=>{
    navigate("/donorfulldetails")
  }
  
  const filterHandler = (e, newValue) => {
    e.target.value === "clear" ? setFilter("") : setFilter(e.target.value);
  };


  return (
    <>
    
    <ResponsiveAppBar />
<Box sx={{bgcolor: "#d2df7f", height: "100dvh", borderRadius: 5, paddingTop: 1, mt:1,}}>




{/* filter blood group */}

 <Box sx={{textAlign: "center", mt: 2}}>
      {/* <select defaultValue="clear" onChange={filterHandler}>
        <option value="clear">Blood Type</option>
        <option value="A+">A+</option>
        <option value="B+">B+</option>
        <option value="AB+">AB+</option>
        <option value="O+">O+</option>
        <option value="A-">A-</option>
        <option value="B-">B-</option>
        <option value="AB-">AB-</option>
        <option value="O-">O-</option>
      </select> */}
      <FormControl sx={{width:150}}>
        <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>
        <Select
          value={filter}
          label="BloodGroup"
          onChange={filterHandler}
        >
          <MenuItem value={"A+"}>A+</MenuItem>
          <MenuItem value={"A-"}>A-</MenuItem>
          <MenuItem value={"B+"}>B+</MenuItem>
          <MenuItem value={"B-"}>B-</MenuItem>
          <MenuItem value={"AB+"}>AB+</MenuItem>
          <MenuItem value={"AB-"}>AB-</MenuItem>
          <MenuItem value={"O+"}>O+</MenuItem>
          <MenuItem value={"O-"}>O-</MenuItem>
        </Select>
      </FormControl>

      </Box>
    
      { filter ? ( // if user add filter show this
       <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-around', flexWrap: "wrap", rowGap:2, mt:2 }}>
        {
          donorData
          .filter((e, i) => e.bloodGroup.includes(filter))
          .map((e, i) => {
            return (
               <OutlinedCard key={i} age={e.age} name={e.name} city={e.city} gender={e.gender} bloodGroup={e.bloodGroup} uid={e.uid} />
            );
          })
        }
       </Box>
     )
     : // if user don't add filter show this 
      <Box  sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-around', flexWrap: "wrap", rowGap:2, mt:2 }}>
     {
      isLoading ? "loading" : donorData.map((e,i)=>{
       return  <OutlinedCard key={i} age={e.age} name={e.name} city={e.city} gender={e.gender} bloodGroup={e.bloodGroup} uid={e.uid} />
       })
     }
   </Box>
    }
     
     </Box>

      
    </>
  )
}

export default Home