
import React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete'; 
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';

// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const PopupForm = (props) => {

    function handleLogin(e) {
        e.preventDefault()
        // Code to handle login goes here
        props.toggle()
    }

  const part = ['Engine', 'Tire', 'Steering', 'Gear Lever', 'Gas Pedal','Suspension','Oil Filter','Battery','Wiper','Side Mirror','Rearview','Sun Visor','Bumper']; 
  const area = ['All Area', 'Chennai', 'Knachipuram', 'Madurai', 'Dindigul','Tirunelveli','Virudhunagar','Thoothukudi','Tenkasi','Kanniyakumari','Tiruppur','Coimbatore']; 
  const distance = ['5km - 25km', '25km - 50km', '50km - 75km', '75km - 100km', '100km - 125km','125km -150km','150km - 175km','175km - 500km','500km above']; 
  return (
    <div>
    <div style={{ position: 'fixed',
left: '1000px',
top: '10em',
width: '26vw',
height: '70vh',
overflow: 'auto',
border:'5px solid #0e2a47',
zIndex:'1'}} > 

<h3 style={{textAlign:'center', textDecoration:'underline', marginTop:'20px', fontWeight:'800'}}>VIN Number</h3>
   <TextField 
       style={{width:400, marginLeft:20, marginTop:30}}
         variant="outlined"
         label="Enter a VIN"
        /> 
    <Autocomplete 
         style={{width:400, margin:15, marginTop:30}} 
    autoSelect 
     options={part} 
     renderInput={(params) => ( 
       <TextField {...params} 
         variant="outlined"
         label="Select Part"
        /> 
     )}
     />
     <br />
     <Autocomplete 
          style={{width:400, margin:15}} 
     autoSelect 
     options={area} 
     renderInput={(params) => ( 
       <TextField {...params} 
         variant="outlined"
         label="All Areas/Select an Area"
        /> 
     )}
     /> <br />
     <Autocomplete 
          style={{width:400, margin:15}} 
     autoSelect 
     options={distance} 
     renderInput={(params) => ( 
       <TextField {...params} 
         variant="outlined"
         label="Sort by Distance / Select Sort"
        /> 
     )}
     /> <br />
       <TextField 
       style={{marginLeft:15}}
         variant="outlined"
         label="Enter a Postal Code"
        /> 
 <button style={{ marginLeft:'50px', padding:'12px', borderRadius:'10px', width:'150px', backgroundColor:'#0e2a47'}}>
   <Link to='/dashboard/search/engine' style={{color:"#fff", textDecoration:'none', fontSize:'18px'}} onSubmit={handleLogin} >Search</Link>
 </button>
 </div> 
 </div>
  )
}
export default PopupForm
