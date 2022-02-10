import React, {useState,useEffect } from "react";
import { Container } from "@mui/material";
import { MBTIFrom } from "../Components/Quizpage/Mbtiform";

/* <p>Your Entry was : </p> {data.input_text} */
function Quiz() {





 
    return (
      
      <div className="quiz">

      <Container style={{ marginTop: 40 }}>
        <MBTIFrom/>
        <Container>
        </Container>
      </Container>
      
      </div>
    );
  }
  
  export default Quiz;