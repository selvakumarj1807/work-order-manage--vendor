import React from 'react'
import Footer from "./Footer";
import Navbar from "./Navbar";
import Section from "./Section";
import Testimonial from "./Testimonial";
import "./style.css";
import { FormControl, Grid,  MenuItem, Select, Stack } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Popup from "reactjs-popup";


const PartInformation = () => {

    const [year, setYear] = useState('');

    const handleChange = (event) => {
      setYear(event.target.value);
    };

  return (
    <div className="home">
      <Navbar />
      <div className='text' style={{border:'4px solid black', padding:'40px', borderRadius:'10px', boxShadow:'5px 3px', marginTop:'50px', marginRight:'100px'}}>
          <h4 style={{textAlign:'center', fontWeight:'650',border:'2px solid black', padding:'5px'}} >Part Information</h4>
        
           <br />
            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                <div style={{display:'flex'}}>
                    <h4>Year - </h4>
                    <p style={{marginTop:'5px', marginLeft:'5px', fontSize:'32px', color:'red' ,fontWeight:'650' }} >2009</p>
                </div>
                <div style={{display:'flex'}}>
                    <h4>Make - </h4>
                    <p style={{marginTop:'5px', marginLeft:'5px', fontSize:'32px', color:'red' ,fontWeight:'650' }}>Audi</p>
                </div>
                <div style={{display:'flex'}}>
                    <h4>Model - </h4>
                    <p style={{marginTop:'5px', marginLeft:'5px', fontSize:'32px', color:'red' ,fontWeight:'650' }}>A4</p>
                </div>
            </div>

      <h4 style={{textAlign:'center', fontWeight:'650', border:'2px solid black', padding:'5px'}} >Required Information</h4>
        
      <Grid container spacing={2.5} style={{marginTop:'2px'}} >
        <div style={{display:'flex', width:'100%', marginLeft:'20px',gap:'50px'}}>
        <Grid item xs={6}>
          <Stack spacing={1}>
            {/* <InputLabel>Year</InputLabel> */}
            <TextField id="name" label="Contact Name" type='text' variant="outlined"  style={{marginTop:'15px'}}/>
            <TextField id="email" label="Email Id" type='email' variant="outlined"  style={{marginTop:'15px'}}/>
            <TextField id="phno" label="Mobile Number" type='number' variant="outlined"  style={{marginTop:'15px'}}/>
        
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack spacing={1}>
            {/* <InputLabel>Year</InputLabel> */}
            <TextField id="outlined-basic" label="Postal (Zip) Code" variant="outlined" style={{marginTop:'15px'}} />
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                displayEmpty
                id="demo-simple-select"
                value={year}
                placeholder="Shipping Method"
                onChange={handleChange}
                style={{marginTop:'10px'}} 
              >
                <MenuItem disabled value="" sx={{ color: 'text.secondary' }}>
                Shipping Method
                </MenuItem>
                <MenuItem value={"option"}>Option-1</MenuItem>
                <MenuItem value={"option"}>Option-2</MenuItem>
                <MenuItem value={"option"}>Option-3</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                displayEmpty
                id="demo-simple-select"
                value={year}
                placeholder="State/Province"
                onChange={handleChange}
                style={{marginTop:'10px'}} 
              >
                <MenuItem disabled value="" sx={{ color: 'text.secondary' }}>
                State/Province
                </MenuItem>
                <MenuItem value={"tn"}>Tamil Nadu</MenuItem>
                <MenuItem value={"kerala"}>Kerala</MenuItem>
                <MenuItem value={"karnataka"}>Karnataka</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Grid>
        </div>
    
   
        <Grid item xs={12}>
          <Stack spacing={1}>

            <textarea  placeholder='Additional Notes and Comments...' rows={5} />
           
            
          </Stack>
        </Grid>
        <Grid item xs={12}>
          
        <div className="button" style={{
                  fontStyle: "italic",
                  fontWeight: "bold",
                  fontSize: "16px",
                  backgroundColor: "#0e2a47",
                  border: "2px solid #0e2a47",
                  padding: "10px",
                  borderRadius: "10px",
                  color: "#fff",
                  margin:'0'
                }}>
        <NavLink to="/home">Back</NavLink>
      </div>
      <Popup
            trigger={
              <button
              style={{
                fontStyle: "italic",
                fontWeight: "bold",
                fontSize: "16px",
                backgroundColor: "#0e2a47",
                border: "2px solid #0e2a47",
                padding: "10px",
                borderRadius: "10px",
                color: "#fff",
                margin:'0',
                marginLeft:'50px'
              }}>
                {" "}
                Submit
                {/* <Link to='/dashboard/invoice' style={{fontStyle:'italic', fontFamily:'-moz-initial', fontWeight:'bold', fontSize:'18px',  backgroundColor:'#0e2a47', border:'2px solid #0e2a47', padding:'10px', borderRadius:'10px', color:'#fff', marginLeft:'20px'}}> Search</Link> */}
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <div style={{ height: "40vh" }}>
                 <div className='doyou'>
     <div className='flex-box'>
       <div>
       <h4>Do you want to Register as a User?</h4>
       </div>
       <div  className='btn-flex'>
        <button>
            <Link to='/session/signup' className='user-btn btn-1'>Yes</Link>
        </button>
        <button>
        <Popup
            trigger={
              <button
                style={{
                  fontStyle: "italic",
                  fontWeight: "bold",
                  fontSize: "16px",
                  width:'50px',
                  backgroundColor: "#0e2a47",
                  border: "2px solid #0e2a47",
                  padding: "10px",
                  borderRadius: "10px",
                  color: "#FF3131",
                  margin:'0'
                }}
              >
                {" "}
               No
                {/* <Link to='/dashboard/invoice' style={{fontStyle:'italic', fontFamily:'-moz-initial', fontWeight:'bold', fontSize:'18px',  backgroundColor:'#0e2a47', border:'2px solid #0e2a47', padding:'10px', borderRadius:'10px', color:'#fff', marginLeft:'20px'}}> Search</Link> */}
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <div style={{ height: "40vh" }}>
               <div>
                <img src="https://media.istockphoto.com/id/1079725292/vector/green-tick-checkmark-vector-icon-for-checkbox-marker-symbol.jpg?s=612x612&w=0&k=20&c=OvOpxX8ZFuc5NufZTJDbpwGKvgFUmfZjY68MICmEzX4=" alt="" width='100px' height='100px' style={{marginLeft:'45%', marginTop:'30px'}} />
               <h4 style={{textAlign:'center', marginTop:'10px'
            }} className='flex-h4' >Email has been sent </h4>
                <p style={{fontSize:'22px', marginLeft:'40%', marginTop:'10px'}}>Enquiry Number <span style={{color:'blue', fontWeight:'600'}}> #256</span></p>
             </div>

                 <button style={{marginLeft:'48%'}}>
                    <Link to='/' style={{color:'#fff'}}>Done</Link>
                 </button>
              </div>
            
            )}
          </Popup>
        </button>
       
       </div>
    </div>
   </div>
              
                
              </div>
            )}
          </Popup>
          {/* <Popup
            trigger={
              <button
                style={{
                  fontStyle: "italic",
                  fontWeight: "bold",
                  fontSize: "16px",
                  backgroundColor: "#0e2a47",
                  border: "2px solid #0e2a47",
                  padding: "10px",
                  borderRadius: "10px",
                  color: "#fff",
                  margin:'0'
                }}
              >
                {" "}
                Submit
                             </button>
            }
            modal
            nested
          >
            {(close) => (
              <div style={{ height: "80vh", width:'63vw', }}>
                  <NoMoreInfor />
              </div>
            
            )}
          </Popup> */}

        </Grid>
      </Grid>


          </div>
      <Section />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default PartInformation


