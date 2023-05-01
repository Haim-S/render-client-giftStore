import React from 'react'
import "./Footer.css";
import { LinkFooterAbout } from './FooterStyle';


const Footer = () => {
  return (
    <footer>
      <LinkFooterAbout to={"/"}>Click here to see more about me</LinkFooterAbout>
      <h4>&copy;Haim-s 2022. All Rights Reserved.</h4>
    </footer>
  )
}

export default Footer