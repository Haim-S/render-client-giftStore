

import styled from "@emotion/styled";

export const ExtrasContainerCardBuyStyle = styled.div`
max-width: 1280px;
margin: 0 auto;
// width: 50%;
// height: 50%;

`

export const CardBuyStyle = styled.div`
display: grid;
row-gap: 2rem;
 padding: 12px;
 background: white;

        @media screen and (min-width: 768px){
            grid-template-columns: repeat(2, 1fr);
            column-gap: 4rem;
        }

`

export const ImageContainer = styled.div`
display: flex;
flex-direction: column;
`

export const ImageCardBuyStyle = styled.img`
width: 100%;
height: 350px;
overflow: hidden !important;
`

export const SmallerImageContainer = styled.div`
width: 100%;
height: 30%;
display: flex;
ailgn-items: center;
justify-content: center;
`

export const SmallerImageStyle = styled.img`
widht: 33%;
height: 45%;
border: 4px solid white;
&:hover {
    height: 43%;
    overflow: hidden;
    border:2px solid red;
    padding: 2px;
    transition:all 300ms ease-in-out;
}
`

export const TpographyCartBuyContainer = styled.div`
width: 100%;
margin-top: 15px;
display: flex;
flex-direction: column;
padding-top: 25px;
`

export const DivCategory = styled.div`
margin: 0 auto;
  width: 80%;
  height: 20px;
  display: flex;
  align-items: center;
  color: black;
  border-bottom:solid 0.2px rgba(0, 0, 0, 0.065);
`

export const DivTitleOne = styled.div`
margin-top: 15px;
display: flex;
align-items: center;
justify-content: center;
`


export const DivTitleTwo = styled.div`
margin-top: 15px;
display: flex;
align-items: center;
justify-content: center;

`
export const DivPrice = styled.div`
width: 80%;
height: 15%;
margin-top: 30px;
margin-left: 35px;
display: flex;
padding: 25px;
flex-direction: column;
background: var( --oneCardPage-divPrice-bgc);
border-radius: 8px;
justify-content: space-evenly;
`

export const OldPrice = styled.span`
opacity: 0.7;
text-decoration: line-through;
font-size: 17px;
padding-right: 10px;
`

export const NewPrice = styled.span`

font-weight: 700;
font-size: 26px;
`

export const DescountPrice = styled.span`
padding-left: 20px;
font-size: 13px;
font-weight: 600;
color: #F79F1F;
`

export const BtnContainer = styled.div`
width: 80%;
height: 15%;
margin-top: 30px;
margin-left: 35px;
display: flex;
flex-direction: column;
`
export const QuantityContainer = styled.div`
width: 98px;
height: 50px;
display: flex;
align-items: center;
justify-content: space-evenly;
`

export const BtnBayNow = styled.button`
width: 90px;
height: 50px;
padding: 0 18px;
background: #f39c12;
margin-left: 5px;
`
export const BtnAddToCard = styled.button`
width: 95px;
height: 50px;
background:#ffbe76;
border: 2px solid #f39c12;
margin-right: 10px;
`


