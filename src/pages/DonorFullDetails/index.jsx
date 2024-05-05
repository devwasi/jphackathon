import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCounter } from '../../Store/slices/counterSlice'
import ResponsiveAppBar from '../../components/AppBar/AppBar'
import OutlinedCard from '../../components/Card'
import { Box, Select } from '@mui/material'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { useParams } from 'react-router-dom'

const Home = () => {
   const [donorData, setDonorData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [filter, setFilter] = useState(false)

  const {uid} = useParams()

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
  
  const donorDetailsHandler = (e)=>{
    // navigate("/donorfulldetails")
    console.log(e.target)
  }
  const filterHandler = (e, newValue) => {
    // newValue === "clear" ? setFilter("") : setFilter(newValue);
    console.log(e)
  };


  return (
    <>
    <ResponsiveAppBar />
    <Box sx={{bgcolor: "#d2df7f", height: "100dvh", borderRadius: 5, paddingTop: 1, mt:1,}}>

      <Box  sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-around', flexWrap: "wrap", rowGap:2, mt:2 }}>
      {
        isLoading ? "loading" : donorData.filter(e=>e.uid == uid).map((e,i)=>{
          return  <OutlinedCard key={i} age={e.age} name={e.name} city={e.city} gender={e.gender} bloodGroup={e.bloodGroup} address={e.address} donorDetails={true} contactNum={e.contactNum} email={e.email} />
        })
      }
    </Box>
      </Box>
    </>
  )
}

export default Home