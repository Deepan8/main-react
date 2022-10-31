import styled from "styled-components";
import { Link } from "react-router-dom";

export const HydroHeader = styled.div`
display:flex;`

export const Generic = styled.p`
margin:1.5rem;
height: 1%;
border:none;
color:white;
padding:5px;
font-size:10px;
background-color:#27039e`

export const Hydrocodone = styled.div`
padding:3rem 4rem;
@media (max-width:426px) {
    padding:1rem 1rem;
    
}

`

export const Hydro = styled.div`
padding:2rem;
border-radius:1rem;
box-shadow:2px 2px 4px 2px grey`

export const AlertMessages = styled.div`
display:flex;
gap:1rem;`

export const Img = styled.img`
object-fit:contain;`

export const Heading = styled.h2`
font-family: "LexendDeca-Bold";
font-size: 25px;

@media (max-width:426px) {
    font-size: 15px;

  }

`
export const Para = styled.p`
font-family: "LexendDeca-Regular";
font-size: 25px;

@media (max-width:426px) {
    font-size: 15px;

  }

`

export const HydroContent = styled.div`
display:flex;
@media (max-width:426px) {
   display: flex;
   flex-direction: column;
  }
`

export const Alerts = styled.div`
width:65%;
@media (max-width:426px) {
    width:100%;


  }
`

export const Inputs = styled.div`
display:flex;
flex-direction:column;
row-gap:1rem;
width:40%;
background-color:whitesmoke;
border-radius:1rem;
padding:3rem;
@media (max-width:426px) {
    width:70%;


  }
`

export const AlertText = styled.p`
width:85%`

export const InputLabel = styled.h4`
margin:0;`

export const Note = styled.p`
margin:0;`

export const Count = styled.input`
margin:8px 0;
width:100%;
border:1px solid white;
box-shadow:1px 1px 2px 2px grey;
padding:10px;
border-radius:0.5rem;
color:blue;`

export const Select = styled.select`
margin:8px 0;
width:100%;
border:1px solid white;
box-shadow:1px 1px 2px 2px grey;
padding:10px;
border-radius:0.5rem;`

export const ButtonContent = styled.div`
display:flex;
gap:6px;`

export const Buttons = styled.button`

margin:8px 0;
background-color:white;
border:1px solid white;
box-shadow:1px 1px 2px 2px grey;
padding:10px;
border-radius:0.5rem;`

export const Button = styled.button`
background-color:blue;
color:white;
border:1px solid blue;
border-radius:0.5rem;
padding:10px;`

export const GenericLink = styled(Link)`
text-decoration:none;
color:blue;`

export const Information = styled.div`
padding-left:4rem;`
export const TherapyInfo = styled.p`
width:80%;`