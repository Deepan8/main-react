import { Modal, Overlay, ModalContent, Popuphead, ButtonTag, Close, Buttons, PopupContent ,Buttonsno} from '../../components/dashboard/popupstyle'
import { useState, useRef } from 'react';
import Closepop from "../../assets/images/close.png"
import { Link } from 'react-router-dom';
import Drug from '../dashboard/drug/drug';
export function Pop(){

    return(
<>

<Modal>
                 
                                <Overlay  ></Overlay>
                                <ModalContent>
                                    <Close>
                                        <Popuphead>You are Choosing Next Year as Plan Coverage </Popuphead>
                                        <img src={Closepop}  alt="close" />
                                    </Close>
                                    <PopupContent>
                                        <p>By continuing this, You may Loose already added details of drugslist. </p>
                                        <h5>Do you want to Continue?</h5>
                                    </PopupContent>
                                    <ButtonTag>
                                        
                                      <Buttonsno className="buttons" >No</Buttonsno>
                                        <Buttons >Yes</Buttons>
                                       
                                    </ButtonTag>
                                </ModalContent>
     </Modal>
</>

)}