import React from 'react'
import './nomore.css'
import { Link } from 'react-router-dom';


const QuoteGenrator = () => {
  return (
    <div className='outer-container'>
      <div className="inner-container">
        <h3 className='h3' style={{textDecoration:'none'}}>Quote Information Form</h3>
      </div>
    <div className='inner-container'>
      <h3 className='h3'>Part Information</h3>
      <div className='flex'>
        <div>
        <h4>Make/Model/Part:</h4>
        <h4>Year:</h4>
        <h4>Stock Number:</h4>
        <h4>Price:</h4>
        <h4>Description:</h4>
        </div>        
        <div className='para'>
          <p>Toyota Camry A/C Compressor Clutch Only</p>
          <p>2009</p>
          <p>K52394</p>
          <p>450</p>
          <p>A</p>
        </div>

      </div>
    </div>
    <div className='inner-container'>
      <h3 className='h3'>Required Information</h3>
      <div className='flex'>
        <div>
        <form >
          <label>Your Email: </label> <br />
          <input type="email" /> <br /> <br />
          
          <label>Your Number: </label> <br />
          <input type="number" /> 
        </form>
        </div> 
        <div>
          <form>
            <label>Your Postal (Zip) Code:</label> <br />
            <input type="number" /> <br /> <br />
            <label ></label>Customer/Business Name<br />
            <input type="text" />
          </form>
        </div>

      

      </div>
    </div>
    <div className='inner-container'>
      <h3 className='h3'>Your Contact Information</h3>
      <div>
      <div className='flex'>
        <div>
        <form >
          <label>Name: </label> <br />
          <input type="text" /> <br /> <br />
          <label>Address: </label> <br />
          <input type="text" /> <br /> <br />
        </form>
        </div> 
        <div>
          <form>
            <label>City:</label> <br />
            <input type="text" /> <br /> <br />
            <label >State:</label> <br />
            <input type="text" />
          </form>
        </div>

      

      </div>
   
      </div>
    </div>
    <div className='inner-container'>
      <h3 className='h3'>Additional Information</h3>
      <div>
      <div className='flex'>
        <div>
        <form >
          <label>Additional Part(s): </label> <br />
          <input type="text" /> 
        </form>
        </div> 
        <div>
          <form>
            <label>Desired Part Color(s):</label> <br />
            <input type="text" /> 
          </form>
          <div className='text'>
    
      <button style={{marginLeft:'-18em', marginRight:'15em', width:'200px', marginTop:'15px'}}>
        <Link to='/dashboard/default' className='link'>Submit Form</Link>
      </button>
      </div>
        </div>

      

      </div>
   
      </div>
    </div>
  </div>
  )
}

export default QuoteGenrator