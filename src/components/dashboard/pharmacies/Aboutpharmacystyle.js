import styled from "styled-components";
export const PharmacyName = styled.h1`
margin:14px 0;`

export const Pharm = styled.div`
padding:0.5rem 2rem;
`

export const Planing = styled.div`
display:flex;
column-gap:1rem;
margin:1.5rem 0;
`
export const Tag = styled.div`
display:flex;
column-gap:1rem;
`
export const TagContent = styled.p`
background-color:#b4b5b8;
padding:4px;
font-size:11px;
margin:0
`
export const PreferOptions = styled.ul`
display:grid;
font-size:14px;
grid-template-columns:300px 300px;
padding-left:1.5rem;
@media (max-width: 768px) {
    font-size:12px;
    grid-template-columns:200px 300px;    
}
`
export const StandardOptions = PreferOptions

export const Fillup = styled.ul`
font-size:14px;
padding-left:1.5rem;
`
export const Div = styled.div``
export const Information = styled.div`
width:70%;`

export const P = styled.p`
font-size:14px;
margin:5px;`

export const H4 = styled.h4`
margin:5px;`