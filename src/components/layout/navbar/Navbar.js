import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import {Search, Adb, Menu} from '@mui/icons-material';

import { LinkStyle, ShowCartStyle, CountShopingCartStyle } from './NavbarStyle';
import { Link } from 'react-router-dom';
import { navbarLinks } from '../../../constant/navbarLinks';
import { UseContextControllers } from '../../../context/contextController';
import "./Navbar.css"


const Navbar = () => {

  const cart = UseContextControllers().cart;

  return (
    <nav>
       <div className='container-Navbarlogin'>
        
<LinkStyle>Support</LinkStyle>
<LinkStyle to="/my-orders">My Orders</LinkStyle>
<LinkStyle to="/login">Login</LinkStyle>
        </div> 
<from>
    <div className='container-search'>
      <Link to={"/"}>
    <Adb sx={{width: "50px", marginRight: "40px", color: "white"}}/>
      </Link>
        {/* <img style={{width: "50px", marginRight: "40px"}} src='https://i.pinimg.com/originals/b3/cc/d5/b3ccd57b054a73af1a0d281265b54ec8.jpg'/> */}
    <button><Menu/></button>
    <input/>
    <button><Search/></button>
    <div className='ShoppingCart'>
      
    <CountShopingCartStyle>{cart.length}</CountShopingCartStyle>
    
    <Link to={"/cart"}>
    <ShowCartStyle>
    {""}
    </ShowCartStyle>
    <ShoppingCartOutlinedIcon style={{cursor: "pointer", marginTop: "13px"}}/>
    </Link>
    </div>
    
    </div>
<div className='container-btn'>
  {navbarLinks.map((link, index) => (
<LinkStyle to={link.paht} key={index}>{link.label}</LinkStyle>
))}
</div>
</from>
    </nav>
  )
}

export default Navbar