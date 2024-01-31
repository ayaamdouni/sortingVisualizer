import React, {useEffect, useState} from 'react';
import Footer from './Footer/Footer';
import './SortComponent.css';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {Typography } from '@mui/material';
import './NavBar.css'


function SortComponent() {
    
    const [color, setColor] = useState("Black")
    const [current, setCurrent] = useState(0)
    const [array,setArray] = useState([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150])
    const [listChanges, setChanges] = useState([])
    const [barNumbers, setBarNumbers] = useState(15)
    const [speed, setSpeed] = useState(10)
    const [widthBar, setWidth] = useState(1000/barNumbers)
    
    const resetArray = () => {
        const array = []
        setChanges([])
        
        for (let i = 0 ; i<barNumbers ; i++) {
            
            array.push(Math.floor(Math.random() * (400 - 50 + 1)) + 50);
        }
        setArray(array)
        
        }
    
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  
    const sortArray = async ()=> {
        
        const array1 = [...array]
        console.log("first array1 ", array1)
        for (let i = 0 ; i<barNumbers ; i++) {
            setChanges([i])
            for (let j = i+1; j<barNumbers; j++){
                
                
                // await delay(10);
                if(array1[j]<=array1[i]){
                    setCurrent(j)
                    await delay(200 - speed);
                    let temp = array1[i]
                    array1[i] = array1[j]
                    array1[j] = temp
                    setChanges([i,j])
                    // await delay(100)
                    // setChanges([i])
                    setArray([...array1])
                    
                        
                }
                }
            }
            setCurrent(0)
    }
    
    const handleSliderChange = (event, newValue) => {
        setBarNumbers(newValue);
        setWidth(1000/barNumbers)
        resetArray()
      }; 
      const handleSpeedChange = (event, newValue) => {
        
        setSpeed(newValue);
      };  
            
    
     
    
    return (
        <div className="App" style={{ height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div id="nav-bar">
            <div id="title">
                <h1>Sorting Algorithm Visualizer</h1>
            </div>
            <div id="toolbar">
        
            <div>
                <Typography gutterBottom>Array size</Typography>
                <Slider
                onChange={handleSliderChange}
                value={barNumbers} min={10} max={90}
                valueLabelDisplay="auto"
                aria-labelledby="array size"
                id="non-linear-slider"
                />
            </div>

            <div className="separator"/>

            <div>
                <Typography gutterBottom>Sorting Speed</Typography>
                <Slider
                    value={speed} 
                    min={10} max={90}
                    valueLabelDisplay="auto"
                    aria-labelledby="speed slider"
                    id="non-linear-slider"
                    onChange={handleSpeedChange}
                />
            </div>
            <div className="separator" />
            <Button variant="text" color="info"
                    onClick={() => resetArray()}>
            Generate New Array
            </Button>

            <div className="separator" />

            <Box            
            exclusive
            aria-label="sorting algorithm"
            >

                <Button aria-label="Bubble Sort"
                onClick={() => sortArray()}>
                Sort
                </Button>
          
            </Box>
        
            </div>
            </div>
            
            <div className='bars-container'>
                    
                {array.map((elem, index) =>{
                let backgroundColor = "#4095BF";
                if(index == current){
                    backgroundColor = 'red'
                }
                
                if(index <= listChanges[0]){
                    backgroundColor = "rgb(15, 105, 28)"
                    }
                
                {return <div 
                        className="bars"
                        key = {index}
                        style={{height : `${elem}px`, width: `${widthBar}px`, backgroundColor }}>{elem}</div>}
                        })
                }
            </div>
                    
            <Footer></Footer>
            
        </div>
    );
}

export default SortComponent;
