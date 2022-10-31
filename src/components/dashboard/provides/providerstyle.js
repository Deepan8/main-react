import styled from "styled-components";

export const Nav = styled.div`
background-color: white;
padding: 20px;
color: grey;
`;


export const Bluebox = styled.div`

display: flex;
flex-direction:column;
width: 100%;
background-color: steelblue;
border-radius: 5px;
`;

export const Coverage = styled.div`
display: flex;
`;
export const Totall = styled.div`
   margin: -8px; 
`
export const Let = styled.h3`
display: flex;
padding: 1px 1px 1px 45px;
`;
export const Question = styled.h1`
display: flex;
padding: 1px 1px 1px 45px;
`;
export const Search = styled.div`
width: 80%;
`;
export const Total = styled.div`
`;

export const Whitebox = styled.div`
background-color: white;
width:90%;
border-radius: 5px;
margin: 0 auto;
box-shadow: 1px 1px 1px 1px;

`;

export const Titlebox = styled.div`
display: flex;
flex-direction: column;

`;

export const Combothree = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
padding: 30px;
@media (max-width:590px) {
    display: flex;
flex-direction: column;
}
`;



export const Buttontag = styled.button`
width: 130px;
height: 40px;
display: flex;
justify-content: center;
background-color: grey;
color: white;
padding: 10px;
border-radius: 6px;
margin: 60px 0px 0px 0px;
`;
export const Bluecontent = styled.button`
padding: 50px;
background-color:rgb(23,70,153);
`;
export const InputType = styled.div`
display:flex;
flex-direction:column;
row-gap:4px;`
export const Select = styled.select`
width:110%;
height: 30px;

`
export const InputLabel = styled.h4`
/* margin:0; */
`

export const ButtonContent = styled.div`
display:flex;
gap:6px;`

export const Buttons = styled.button`
margin:8px 0;
background-color:white;
border:1px solid white;
box-shadow:1px 1px 2px 2px grey;
padding:10px;
border-radius:0.5rem;
`

export const Img = styled.img`
width:20px;
height:20px;
object-fit:contain;`


export const Inputtag = styled.input`
width: 130%;
height:30px;
@media (max-width:590px) {
    width: 100%;


  }
`
export const Information = styled.div`
padding-left:4rem;`
export const TherapyInfo = styled.p`
width:80%;`