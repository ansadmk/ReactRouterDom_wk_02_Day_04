import React from 'react'
import { Link } from 'react-router-dom'
function Homepage() {
  return (
    <div style={{textAlign:"center"}}>Homepage <br /><br />
        <Link to="/"><button>logout</button></Link>
    </div>
    
  )
}

export default Homepage