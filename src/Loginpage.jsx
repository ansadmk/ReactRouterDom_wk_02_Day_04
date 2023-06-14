import React from 'react'
import { Link } from 'react-router-dom'
function Loginpage() {
  return (
    <div style={{textAlign:"center"}}>
        Loginpage <br /> <br />
        <input type="text" /><br />
        <br />
        <input type="text" /><br />
        <br />
        <Link to="/third" ><button>Login</button></Link>
        </div>
  )
}

export default Loginpage