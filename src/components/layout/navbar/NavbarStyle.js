

import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const LinkStyle = styled((props) => <Link {...props} />)`
padding-left: 25px;
    color: var(--navbar-link-color);
    padding-bottom: 3px;
font-size: 15px;
    &:hover {
        color: var(--navbar-button-hover-background-color);
      }
`

export const ShowCartStyle = styled.div`

width: 15px;
height: 15px;
transition: width 2s, height 2s, background-color 2s, transform 2s;
position: absolute;
&:hover {

width: 200px;
height: 600px;
background-color: white;
rotate: 180deg;
box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.03);
}
`
export const CountShopingCartStyle = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: white;
position: absolute;
margin-left: 10px;
font-size: 13px;
display:flex;
align-items: center;
justify-content: center;
color: var(--navbar-link-color);
font-weight: 600;

`
    

