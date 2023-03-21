import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/logo-puzzle.jpg"
import "./Homepage.css"
import "./Navbar.css"
const Navbar = ({size}) => {
    // console.log("navsize",size)
    return (
        <>
            {/* <!-- Image and text --> */}
            {/* <nav className="navbar navbar-light bg-light" style={{ backgroundColor: " " }}>
                <a className="navbar-brand" href="#">

                    <img src={logo} style={{ width: "30", height: "30" }} className="align-top" alt="" />

                    Puzzle app


                </a>
            </nav> */}

            <span onClick={() => window.scroll(0, 0)} className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10 bg-[#028090]" 
            // className="header"
            >
                <div>
                <Link to="/">
                    <img className="nav-logo " src={logo} />
                    </Link>
                </div>
                <div className="title">     Puzzle App </div>
            </span>
        </>
    )
}

export default Navbar