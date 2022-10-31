import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
font-family: "LexendDeca-Regular";
background-color: white;
padding: 10px;
color: black;
border: 1px solid black;

`;

export const Totall = styled.div`
   
    margin: -8px;
    
`


export const Bluebox = styled.div`

display: flex;
flex-direction:column;
width: 100%;
`;

export const Selecttag = styled.select`
border-radius: 8px;


`;

export const Coverage = styled.div`
display: flex;
font-family: "LexendDeca-Regular";
color: white;
gap:10px;
`;
export const Let = styled.p`
display: flex;
font-family: "LexendDeca-Regular";
color: white;
`;
export const Question = styled.h1`
display: flex;
font-family: "LexendDeca-Bold";
color: white;

`;
export const Search = styled.div`
width: 80%;
`;
export const Tot = styled.div`

`;

export const Whitebox = styled.div`
background-color: white;
width:100%;
border-radius: 5px;
font-family: "LexendDeca-Regular";
margin: 0 auto;
`;

export const Titlebox = styled.div`
display: flex;
flex-direction: column;
`;

export const Combothree = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
@media (max-width:426px) {
  
    display: flex;
flex-direction: column;
    }


`;

export const Downcombothree = styled.div`
display: flex;
flex-direction:row ;
justify-content: space-around;
padding: 0px 40px 1px 50px;
@media (max-width:426px) {
  padding: 0px 0px 0px 0px;
  display: flex;
flex-direction: column;
  }
  @media (max-width:768px) {
    padding: 0px 0px 0px 0px;

  }

`;
export const Downcombotwo = styled.div`
display: flex;
flex-direction:column ;
@media (max-width:426px) {
    margin: 0 auto;

    }
`;
export const Row = styled.div`
display: flex;
flex-direction: row ;
`;
export const Col = styled.div`
display: flex;
flex-direction: row ;
@media (max-width:426px) {
display: flex;
flex-direction: column;
margin: 0 auto;  
}

`;

export const Links = styled(Link)`
text-decoration: none;
`;

export const Buttontag = styled.button`
width: 130px;
height: 40px;
display: flex;
justify-content: center;
background-color: rgb(33,101,219);
padding: 10px;
border-radius: 6px;
border-color: rgb(33,101,219);
margin: 20px 0px 0px 0px;
@media (max-width:426px) {
    margin: 20px auto;

}

`;
export const Bluecontent = styled.button`
padding: 50px;
background-color:rgb(23,70,153);
`;
export const InputType = styled.div`
display:flex;
flex-direction:column;
row-gap:4px;`
export const Inputbox = styled.input`
width: 70%;
margin: 0 auto;
`

export const Select = styled.select`


@media (max-width:426px) {
width: 75%;
margin: 0 auto;

  }
`