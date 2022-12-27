import React from "react"
import "./topbar.css"

export default function Topbar() {
   return (
    <div className="topbarContainer">
        <div className="topLeft">
            <img className="logo" src="\assets\metro.jpg" alt="img"/>
        </div> 
        <div className="topCenter">
         <span className="name">KOCHI METRO</span>
        </div>
    </div>
   )
}