import React from 'react'
import "./Homepage.css"
import  logo from "../images/logo.jpg"
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
   <>
   <div className='App'>
 <div className="Main-container">
      <form className="Main-Box">
        <div className="Main-form-content">
          <h3 className="Main-form-title">Puzzle App</h3>
         
            <img className='Main-logo'src={logo} alt =""/>
        
        
          <div className="d-grid gap-2 mt-3">
            <Link to="/puzzle" type="submit" className="btn btn-success">
              Start
            </Link>
          </div>
        
        </div>
      </form>
    </div>
    </div>
   </>
  )
}

export default HomePage