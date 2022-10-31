import styled from "styled-components";
import { Link } from "react-router-dom"


export const Available = styled.div`
padding-left:3rem;
width: 34rem;
@media (max-width: 426px) {
    width: 20rem;
}
`
export const Divsion = styled.div`
display:flex;
flex-direction:row;
width: 100%;
@media (max-width: 426px) {
    display: flex;
    flex-direction: column;
}
`
export const Subdivsion = styled.div`
width: 100%;`


export const AddressContact = styled.div`
font-size:13px;`

export const PharmacyName = styled.h4`
/* margin:14px 0; */
`

export const ContactDistance = styled.div`
display:flex;
column-gap:10px;
`

export const Pharm = styled.div`
padding:12px;

border:1px solid grey;

&:hover{
    border-left: 2px solid blue;
}

`

export const Contact = styled.div`
display:flex;
column-gap:2px;
@media (max-width: 768px) {
    font-size:9px;
    
}

`
export const P = styled.p`
margin:0;
@media (max-width: 768px) {
    font-size:9px;
    
}`
export const Img = styled.img`
width:20px;
height:20px;
object-fit:contain;`

export const Heading = styled.h3`
border:1px solid grey;
margin-bottom:0;
padding:12px;
`

export const TagContent = styled.div`
display:flex;
flex-wrap:wrap;
margin-right:0;
column-gap:8px;`

export const Tag = styled.div`
font-size:11px;
padding:2px;
margin:10px 0;
border:none;
background-color:#d9d3d2`

export const Pageno = styled.div`
display:flex;
justify-content:space-between;
width:22%;`

export const Number = styled.p`
margin:0;
padding:8px;
color:#78a2f5;
background-color:white;
&:hover{
background-color:#78a2f5;
color:white;
}`
export const PageLink = styled(Link)`
text-decoration:none;`

export const Links =styled(Link)`
text-decoration:none;
color:black;`

 
export const Detailedpharmacy = styled.div`


    

`