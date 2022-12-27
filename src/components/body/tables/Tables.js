import React, {useState} from "react";
import "./tables.css"
import LeftTable from "../leftTable/LeftTable.js";
import Trip from "../trip/Trip.js"
// import axios from "axios"
import {fare} from "../leftTable/fareData"
import {fareRules} from "../leftTable/fareData";


export default function Tables(props) {
   
   const [departureName, setDepartureName] = useState([]);
   const [departureId,setDepartureId] = useState('');
   const [arrivalId, setArrivalId] = useState('');
   const [arrivalName,setArrivalName]= useState([]);


     const getLeft = (station, code) => {
        setDepartureName(station)
        setDepartureId(code)
       }
   
       const getRight = (station, code) => {
           setArrivalName(station)
           setArrivalId(code)
       }
  
      console.log(departureId);
      

    return(
   
         <div className="stationContainer">
            <div className="select">
            <h2>Select departure Station</h2>
            <h2>Select Arrival Station</h2>
            </div>
         <div className="stationSelector">   
        <LeftTable className="box" getStationLeft={getLeft}/> 
        <LeftTable className="box" getStationLeft={getRight}/>
        </div>
       
        <div>
        <Trip departure={departureName} departureCode={departureId} arrivalStation={arrivalName} arrivalCode={arrivalId} fareRule={fareRules} fareId={fare}/>
       </div>

       </div>
    )
}