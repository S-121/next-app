import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import styles from './App.module.css'
import { Container, Grid } from '@material-ui/core'
import firebase from "firebase"
import "react-datepicker/dist/react-datepicker.css";
import { useAppContext } from '@context/app/AppContext'

function App() {
 const [checkInDate, setCheckInDate] = useState(null);
 const [checkOutDate, setCheckOutDate] = useState(null);
 const { dispatch } = useAppContext()

 const handleCheckInDate = (date) => {
   setCheckInDate(date);
   setCheckOutDate(null);
 };

 const handleCheckOutDate = (date) => {
   setCheckOutDate(date);
 };
 
 return (
   
   <Container sx={{
       mb: '8px',
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       p: '3rem',
       height: '100%',
       borderRadius: '8px',
    }}>
   <div className="App">
     <div className="input-container">
       <div>
       
       <h4>Select Your Rental Dates</h4>
         <h5>Pick-Up Date</h5>
         <DatePicker
           selected={checkInDate}
           minDate={new Date()}
           onChange={handleCheckInDate}
         />
       </div>
       <div>
         <h5>Return Date</h5>
         <DatePicker
           selected={checkOutDate}
           minDate={checkInDate}
           onChange={handleCheckOutDate}
         />
       </div>
     </div>
     {checkInDate && checkOutDate && (
       <div className="summary">
         <p>
           Your rental will begin on {moment(checkInDate).format("LL")} and end on{" "}
           {moment(checkOutDate).format("LL")}.
         </p>
         <p> {moment(checkOutDate).format("LL")}</p>
        
         
       </div>
     )}
   </div>
   </Container>
 );
}
 
export default App;
