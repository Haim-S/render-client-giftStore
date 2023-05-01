
import styled from "@emotion/styled";

export const ListCardStyle = styled.div`

display: grid;

row-gap: 2rem;

@media screen and (min-width: 576px){
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.4rem;
}

@media screen and (min-width: 768px){
    grid-template-columns: repeat(3, 1fr);
}

@media screen and (min-width: 1200px){
    grid-template-columns: repeat(4, 1fr);
}

@media screen and (min-width: 1400px){
    grid-template-columns: repeat(4, 1fr);
}
`

export const TitleCategory = styled.div`
width: 99%;
height: 60px;
margin-bottom: 15px;
padding: 1px;
padding-left: 10px;
display: flex;
align-items: center;
color: var(--header-color-title) ;
background-color: #fff;
border-left: 7px solid var(--header-border-title) ;
`

export const H3 = styled.h2`
padding: 0;
`