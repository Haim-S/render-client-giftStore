

import styled from "@emotion/styled";

export const CardStyle = styled.div`
position: relative;
width: 100%;
height: 100%;
padding: 4px;
background-color: white;
border-radius: 8px;
box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.03);
transition: $transition-ease;


@media screen and (max-width: 576px){
    width: 80%;
}
`

export const CategoryCard = styled.div`
position: absolute;
left: -5px;
top: 1.6rem;
background-color: orange;

color: white;
font-size: 13px;
text-transform: capitalize;
padding: 0.2rem 1rem;
box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`

export const ImageCardStyle = styled.img`
width: 100%;
height: 220px;
overflow: hidden!important;
border-top-left-radius: 8px;
border-top-right-radius: 8px;
`

export const TpographyContainer = styled.div`
width: 100%;
margin-top: 15px;
display: flex;
ailgn-items: center;
justify-content: center;
flex-direction: column;
`

