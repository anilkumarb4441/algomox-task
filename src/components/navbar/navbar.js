import React from 'react'
import './navbar.css';
import { useNavigate } from 'react-router-dom';

//assets
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  
  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login')
  }


  return (
    <div className='navbar_wraper'>
    <div className='navbar_logo'>
    <Link to='/'>
    <img src={logo} alt='logo'/>
    </Link>
    </div>
    <div className='navbar_link_wraper'>
        <Link to='/'>Task 1</Link>
        <Link to='/dashbord-tasktwo'>Task 2</Link>
        <button onClick={()=>logout()}>Logout</button>
    </div>
    </div>
  )
}

export default Navbar;