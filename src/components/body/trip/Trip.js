import React,{useEffect, useState} from "react"
import "./trip.css"



export default function Trip (props){
 const [farePrice,setFarePrice] = useState([]);


 useEffect(()=>{
   if (props.departureCode !== '' && props.arrivalCode !== ''){

      findFare(props.departureCode,props.arrivalCode);
      
   }
    // eslint-disable-next-line , react-hooks/exhaustive-deps
 },[props.departureCode,props.arrivalCode]);

  const findFare = (departure,arrival)=>{
   const fareRules = props.fareRule.filter(fare => fare.origin_id === departure && fare.destination_id === arrival)
   const fare = props.fareId.filter(farecode => farecode.fare_id === fareRules[0].fare_id)
   setFarePrice (fare[0].price) 
  }

 return(
    <div className="tripContainer">
      <h2>Trip Details</h2>
      <div className="trip">
         
        <div className="detailBox">
          
          <h3 className="names">{props.departure}</h3>
          
        </div>
      
        <h2>to</h2>

        <div className="detailBox">
           
           <h3 className="names"> {props.arrivalStation}</h3>
           
        </div>
        

        <div className="detailBox">
         <h2>Rs{farePrice}/-</h2>

        </div>

      </div>
    </div> 
    )  



}