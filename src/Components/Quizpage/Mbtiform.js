import React, {useState,useEffect } from "react";
import { Form, Grid} from "semantic-ui-react";
import './Mbtiform.css'
import { Button } from '@mui/material';
import { AiOutlineSend } from "react-icons/ai";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const MBTIFrom = ({mbti}) => {
    const [essay,senddata] = useState("");

    const [data,setdata] = useState([{}])

    useEffect (() => { 
      fetch("/results").then(
        res => res.json()
      ).then(
        data =>{
        setdata(data)
        console.log(data)
      }
      )
  
    },  [])


    return (
        <Box className="form-box">
            <Box sx={{ width: 1200, maxWidth: '100%', }} >
                <TextField fullWidth label="Enter Your Essay" id="fullWidth" multiline rows={7}
                placeholder = "Add Your Essay here minimum 15 words"
                value ={essay}
                onChange={e=> senddata(e.target.value)}
                className ="Input-essay"
                align = "center"
                direction="column" align="left" style={{ display: "flex", justifyContent: "center" }}
                />
            </Box>
            <Box direction="column" align="left" style={{ display: "flex", justifyContent: "right" } }>
                <Button variant="contained" endIcon={<AiOutlineSend />} 
                onClick={async () => {
                    const movie = {essay};
                    const response = await fetch("/quiz", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify(movie)
                    });
        
                    if (response.ok) {
                      console.log("response worked!",movie);
                      senddata("");
                    }
                  }}
                  
                >
                    submit
                </Button>
            </Box>
            
            <Grid className="result" direction="column" align="left" style={{ display: "flex", justifyContent: "center" }}>
              <Card sx={{ maxWidth: 345 }}>
                 <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {data.input_result}
                     </Typography>
                    <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                     </Typography>
                  </CardContent>
                  <CardActions>
                  <Button size="small">Learn More</Button>
                  </CardActions>
                  </Card>
            </Grid>
            </Box>
    )






}