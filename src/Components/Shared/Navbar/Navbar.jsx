import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
    const { user, logout } = useAuth()
    const handleLogout = () => {
        logout()
    }

    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/doctors'>Doctors</Link></li>
        <li><Link to='/contact'> Contact</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">HelloDoctor</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>

                

                { user ? 
                
                <div className="navbar-end">
                     <div className="avatar">
                        <div className="w-16 rounded-full mr-5">
                            <img src={user.photoURL} />
                        </div>
                    </div>
                    <Link className="btn" onClick={handleLogout} to="/">Logout</Link>
                </div>
                    :
                    <div className="navbar-end">
                        <Link className="btn" to="/login">Login</Link>
                    </div>}
            </div>
        </div>
    );
};

export default Navbar;