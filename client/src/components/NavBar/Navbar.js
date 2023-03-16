import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/stack_overflow.png'
import { MdSearch } from "react-icons/md";
import Avatar from "../../components/Avatar/Avatar"
// import Button from "../../components/Button/Button"

import "./Navbar.css"

const Navbar = () => {

  var User = null;


  return (
    <nav>
        <div className='navbar'>
            <Link to="/" className="nav-item nav-logo">
                <img src={ logo } alt='logo' />
            </Link>
            <Link to="/" className="nav-item nav-btn">About</Link>
            <Link to="/" className="nav-item nav-btn">Products</Link>
            <Link to="/" className="nav-item nav-btn">For Teams</Link>
            <form>
                <input type="text" placeholder="Search..." />
                <div className="search-icon" ><MdSearch /></div>
            </form>
            { User === null ?
                <Link to="/Auth" className="nav-item nav-links">Log In</Link>:
                <>
                    <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius={"50%"} color="white"><Link to="/User" style={{color:"white", textDecoration:"none"}}>M</Link></Avatar>
                    <button className='nav-item nav-links'>Log out</button>
                </>
            }
        </div>
    </nav>
  )
}

export default Navbar