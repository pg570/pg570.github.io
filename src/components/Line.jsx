import React from 'react'
import "../CSS/line.css"

function Line() {
  return (
    <div id='b1' style={{width:"85%",margin : "auto", display:"flex",justifyContent:"space-between",alignItems:"center" , marginTop:"70px", marginBottom:"70px"}}>
        <div  id='b2' style={{width:"10px", height:"10px",backgroundColor:"#e9ad35",borderRadius:"50%"}}></div>
        <div className='b2' style={{width:"10px", height:"10px",backgroundColor:"#e9ad35",borderRadius:"50%"}}></div>
        <div style={{width: "95%",height: "5px",borderRadius: "10px",backgroundColor:"#e9ad35"}}></div>
    </div>
  )
}

export default Line