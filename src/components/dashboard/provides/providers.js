import { provider } from "../../../resources/string"
import { hydro } from "../../../resources/string"
import { Nav, Bluebox, Coverage, Let, Question, Search, Tot, Whitebox, Titlebox, Combothree, Buttontag,  Img ,Inputtag,Information,TherapyInfo,Totall} from "../provides/providerstyle"
import location from '../../../assets/images/location.png'
import { useRef,useState } from "react"
import Footer from "../../common/footer"
import home from '../../../assets/images/home.png'
export default function Pro() {
    const valid = useRef();
    const [iserror,setiserror]= useState({});
    const handleClick = () => {
        setiserror(validate(valid.current.value))
      }
        const validate = (valid) => {
         const err={};
         
         if (valid === '') {
         err.valid='please enter the Zipcode & contry';
         }
        return err;
        }
     
    return (
        <Totall>
            <Nav><Img src={home} alt="home" />{provider.providerHeader}</Nav>
            <Bluebox>

                <Let>
                    {provider.purpose}
                </Let>
                <Question>
                    {provider.providerQuery}
                </Question>
                <Whitebox>
                    <Combothree>
                        <Titlebox>
                            <h3><Img src={location} alt="location" />{provider.zipCode}</h3>
                            <Inputtag type='text' placeholder="Enter Zip & County" ref={valid}></Inputtag>
                            <p>{iserror.valid}</p>
                        </Titlebox>
                        
                        <Buttontag onClick={handleClick} type="submit" value="Submit" >Continue</Buttontag>

                    </Combothree>

            </Whitebox>

           </Bluebox>

        <Information>
        <h3>Important Information</h3>
        <TherapyInfo>{hydro.therapy}</TherapyInfo>
        </Information>
         <Footer/>
        </Totall>
    )
}