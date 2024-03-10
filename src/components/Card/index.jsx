import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


export default function OutlinedCard({city,name, age, gender, bloodGroup, uid, address, donorDetails, contactNum, email}) {

  const navigate = useNavigate()

  return (
    <Box sx={donorDetails ? { minWidth: 400, boxShadow: "0 0 5px black", borderRadius: 2,} 
    : { minWidth: 275, maxWidth: 325, boxShadow: "0 0 5px black", borderRadius: 2, }}>
      {/* <Card variant="outlined">{card}</Card> */}
      <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {gender}
      </Typography>
      <Typography variant="h5" component="div">
        {name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {age}
      </Typography>
      <Typography variant="h5" component="div">
        {bloodGroup}
      </Typography>
      <Typography variant="h5">
        {city}
      </Typography>
      <Typography variant="h6">
        {address}
      </Typography>
      <Typography variant="h6">
        {email}
      </Typography>
      <Typography variant="h5">
        {contactNum}
      </Typography>
    </CardContent>
    {
      !donorDetails && <CardActions>
      <Button size="small" onClick={()=>navigate(`/donorfulldetails/${uid}`)}>Contact Donor</Button>
    </CardActions>
    }
    </Box>
  );
}