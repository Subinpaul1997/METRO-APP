import React from "react";
import "./leftChild.css"

export default function LeftChild(props){
  
  const dataSave = function click (){
    const data = props.id;
    const name = props.stationName;
    props.clicked(name,data)
  }
    
  
  return(
       <div className="childContainer">
          
            <table className="table" onClick={dataSave}> 
              <li className="stationName">{props.stationName}</li>
              <hr className="line"></hr>
              <p className="stationCode">Station Code: {props.id}</p>
            </table> 
           
       </div>
    )
}