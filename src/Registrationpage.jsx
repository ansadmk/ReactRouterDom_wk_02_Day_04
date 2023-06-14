import React from 'react'
import { Link } from 'react-router-dom'

function Registrationpage() {
  return (
    <div style={{textAlign:"center"}}>
        Registrationpage <br /> <br />
        <input type="text" /><br />
        <br />
        <input type="text" /><br />
        <br />
        <Link to="/second" ><button>Submit</button></Link>
        </div>
  )
}

export default Registrationpage