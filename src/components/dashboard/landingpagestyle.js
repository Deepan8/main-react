
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../resources/font.css"
export const Totall = styled.div`
   
    margin: -8px;
    
`
export const Nav = styled.div`

font-family: "LexendDeca-Regular";

background-color: grey;
padding: 20px;
color: white;
`;
export const Links = styled(Link)`
text-decoration: none;
`;
export const Bluebox = styled.div`
background-color:rgb(35,82,165);
display: flex;
flex-direction:column;
width: 100%;
`;

export const Question = styled.h1`
margin: 50px 105px;
font-family: "LexendDeca-Bold";
font-size: 40px;
@media (max-width:426px) {
    margin: 0px 50px;
    
font-size: 20px;

    }
`;

export const Logoname = styled.h2`
font-family: "LexendDeca-Bold";
font-size: 30px;
@media (max-width:800px) {
   font-size: 20px;
  }
  @media (max-width:620px) {
   font-size: 15px;
  }
`;

export const Contentag = styled.h4`
width: 90%;
color: grey;
padding: 20px;
text-align: center;
font-family: "LexendDeca-Regular";
font-size: 100%;
@media (max-width: 768px) {
font-size: 65%;
}
`;

export const Twobox = styled.div`
display: flex;
flex-direction: row;
justify-content:center;
align-items: center;
gap: 2%;
padding: 15px;

@media (max-width:426px) {
    display: flex;
flex-direction: column;
gap:8px;
}
`;

export const Doctorbox = styled.div`
width:38%;
background-color: white;
padding: 5px;
display: flex;
flex-direction: column;
align-items: center;
border-radius:5px;
@media (max-width:426px) {
    width:75%;
    }
`;

export const Drugbox = styled.div`
width:38%;
background-color: white;
padding: 5px;
display: flex;
flex-direction: column;

border-radius:5px;
@media (max-width:426px) {
    width:75%;
    }
`;

export const Imagetag = styled.img`
background-color:rgb(235,242,255);
border-radius: 7px;
width: 28px;
`;

export const Logoheading = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap:5px;
`;
export const Row = styled.div`
display: flex;
gap: 20px;
justify-content: center;

`;
export const Buttontag = styled.button`
/* width: 60%; */
color: white;
font-size: 80%;
display: flex;
justify-content: center;
background-color: rgb(33,101,219);
padding: 10px;
border-radius: 6px;
border-color: rgb(33,101,219);
@media (max-width: 768px) {
font-size: 60%;
}

`;
export const Mainblue = styled.div`
display: flex;
flex-direction: column;

`;
export const Greypart = styled.div`
display: flex;
flex-direction: column;
padding:1rem 4rem;
background-color:rgb(240,243,246);
`;
export const Legalpri = styled.p`

padding:10px 0;
margin:0;
border-bottom:1px solid grey
`;

export const Legaltopic = styled.h3`

`;
export const Paraone = styled.div`
width:80%;

`;
export const Paratwo = styled.div`
width:80%;
`;





