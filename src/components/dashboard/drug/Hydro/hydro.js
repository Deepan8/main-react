import {
    Button, Hydrocodone, Hydro,Generic,HydroHeader, AlertMessages, Img, HydroContent,
    Alerts, Inputs, AlertText, InputLabel, Note, Count, Select, Buttons, ButtonContent,
    GenericLink,Information,TherapyInfo,Heading,Para
} from "./hydrostyle"
import { Searching } from "../drug"
import { images } from "../../../../resources/images"

import { hydro } from "../../../../resources/string"
import { useRef,useState } from "react"

export default function Hydroco() {
    const valid = useRef();
    const [iserror,setiserror]= useState({});

 const handleClick = () => {
   setiserror(validate(valid.current.value))
 }
   const validate = (valid) => {
    const err={};
    
    if (valid < 0) {
    err.valid='please enter the positive number';
    }
   return err;
   }

    return (
        <>
        <Hydrocodone>
            <Hydro>
                <HydroHeader>
                <Searching.Consumer>{ value => <Heading>{value}</Heading>}</Searching.Consumer>
                <Generic>GENERIC</Generic>
                </HydroHeader>
                <HydroContent>
                    <Alerts>
                        <Para>{hydro.alerts}</Para>
                        <AlertMessages>
                            <Img src={images.Coin} alt="money" />
                            <AlertText>{hydro.costSaving} <GenericLink>{hydro.link}</GenericLink></AlertText>
                        </AlertMessages>
                        <AlertMessages>
                            <Img src={images.Message} alt="tool" />
                            <AlertText>{hydro.therapy}</AlertText>
                        </AlertMessages>
                    </Alerts>


                    <Inputs>
                        <div>
                            <InputLabel>{hydro.quantity}</InputLabel>
                            <Count type="number" ref={valid}/>
                            <p>{iserror.valid}</p>
                        </div>

                        <div>
                            <InputLabel>{hydro.type}</InputLabel>
                            <ButtonContent>
                                <Buttons>Retail</Buttons>
                                <Buttons>Mail Order</Buttons>
                            </ButtonContent>
                        </div>

                        <div>
                            <InputLabel>{hydro.refill}</InputLabel>
                            <Select>
                                <option>Every 1 month</option>
                                <option>Every 3 month</option>
                                <option>Every 6 month</option>
                                <option>Every 1 year</option>
                            </Select>
                        </div>

                        <div>
                            <Note>{hydro.note}</Note>
                            <Note>{hydro.availability}</Note>
                            <Note>{hydro.date}</Note>
                        </div>

                        <Button onClick={handleClick} >Add Drug to List</Button>
                    </Inputs>
                </HydroContent>
            </Hydro>
        </Hydrocodone>
        
        <Information>
        <h3>Important Information</h3>
        <TherapyInfo>{hydro.therapy}</TherapyInfo>
        </Information>
        </>

    )
}