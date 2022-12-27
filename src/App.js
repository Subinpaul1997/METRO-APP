import React from "react";
import Topbar from ".//components/topbar/Topbar.js";
import Tables from "./components/body/tables/Tables.js"
import Footer from ".//components/footer/Footer.js"
import Details from ".//components/body/details/Details.js";


  function App() {
      return (
        <>
            <Topbar/>
            <Details/>
            <Tables/>
            <Footer/>
              
        </>
  

      )

}

export default App;
