
import styled from "@emotion/styled";
import { Link } from "react-router-dom";


export const LinkFooterAbout = styled((props) => <Link {...props} />)`
color: var( --footer-text-color);
&:hover{
    color:white;
}
`
