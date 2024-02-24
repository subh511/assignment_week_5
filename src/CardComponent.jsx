

//import React from 'react'

function CardComponent() {
  return (
    <div style={{
        height:"400px",
        width:"400px",
        border:"1px solid black",
        padding:"20px",
        marginLeft:"20px",
        borderRadius:"5px"
    }}>
    <h2>Samrat</h2>
    <p>A student in 100XDevs Cohort 2.0</p>
    <h3>Interests</h3>
    <ul>Iconic</ul>
    <ul>Open SOurce</ul>
    <ul>App Dev</ul>
    <div style={{
        padding:"8px 8px",
        backgroundColor:"#007BFF",
        borderRadius:"5px",
    }}>LinkedIn</div>
    <div style={{
        padding:"8px 8px",
        backgroundColor:"#007BFF",
        borderRadius:"5px"
    }}>Twitter</div>
    </div>
  )
}

export default CardComponent;
