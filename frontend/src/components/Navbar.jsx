import React from 'react'
import SakilaStudioLogo from "../img/SakilaStudioLogo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={SakilaStudioLogo} alt="" />
                    </Link>
                </div>
                <div className="links">
                    <Link className='link' to="/">
                        <h5>HOME</h5>
                    </Link>
                    <Link className='link' to="/film">
                        <h5>FILMS</h5>
                    </Link>
                    <Link className='link' to="/actor">
                        <h5>ACTORS</h5>
                    </Link>
                    <Link className='link' to="/customer">
                        <h5>CUSTOMERS</h5>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar