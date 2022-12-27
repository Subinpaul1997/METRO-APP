// import React, {useState} from "react";
// import axios from "axios";
import {stops} from "./fareData.js"
import "./leftTable.css";
import LeftChild from "./LeftChild";


export default function LeftTable (props) 
{


    if (!stops) return <h1>no nothing</h1>;

    const getId = function Id (station,id){
       const code= id;
       const stationDetail = station
       props.getStationLeft(stationDetail,code)
    }


    return (
             <div className="leftContainer">
        
                <div className="stationDetails" >
                  { stops.filter((stop)=>stop.stop_id !== '')
                    .map((places)=>(
                     <LeftChild  stationName={places.stop_name} id={places.stop_id} clicked={getId}/>
                      
                    ))  
                  }

                   
                 </div>
               </div>  
          )  
}