import React, { useState } from 'react'

const Watch = () => {
    
var time=new Date().toLocaleTimeString();
var date=new Date().toLocaleDateString();
const[curtime, setcurtime]=useState(time);
const[curdate,setcurdate]=useState(date);



const Uptime=()=>{
    time=new Date().toLocaleTimeString();
    setcurtime(time)
    date=new Date().toLocaleDateString();
    setcurdate(date)
}

 setInterval(Uptime,1000);
var newy=2022;
if(newy==2022){
    newy="Happy New Year"
}


    return (

        <>

  
            <div className='bg'>
        
                <div className='text'>
                    <h1>{curdate}</h1>
                    <h2>{curtime}</h2>
                    <h2></h2>
                </div>
            </div>
        </>
    )
}

export default Watch
