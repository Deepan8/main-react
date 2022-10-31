import styled from "styled-components";

export const Modal = styled.div`
width: 100vw;
height: 100vh;
top: 0;
left: 0;
right: 0;
bottom: 0;
position: fixed;`

export const Overlay = styled(Modal)`
background: rgba(49,49,49,0.8);`

export const ModalContent = styled.div`
position: absolute;
top: 40%;
left: 50%;
transform: translate(-50%, -50%);
line-height: 1.4;
background: #f1f1f1;
color:black;
padding: 14px 0 14px 24px;
border-radius: 8px;
max-width: 600px;
min-width: 300px;`

export const Popuphead = styled.h3`
 margin:0;`
  
export const ButtonTag = styled.div`
display: flex;
margin-left: 30%;
column-gap: 2px;`

export const Close = styled.div`
display: flex;
align-items: center;`

export const Buttons = styled.button`
width:25%;
padding: 2%;;
background-color: blue;
border-radius: 6px;
border: none;
color: #f1f1f1;`

export const PopupContent = styled.div`
padding:2% 10%;
text-align: center;`