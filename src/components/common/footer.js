import {  Greypart, Legalpri, Legaltopic,Para, Paraone, Paratwo } from "../../components/common/footerstyle"



import context from "../../../src/resources/string"


function Footer() {
   
    
    return (
        
            
            <Greypart>
                <Legalpri>{context.Legalprivacy}</Legalpri>
                <Legaltopic>{context.Legalheading}</Legaltopic>
                <Para>
                <Paraone>{context.Paraone}</Paraone>
                <Paratwo>{context.Paratwo}</Paratwo>
                </Para>
            </Greypart>


           
        
    );
}

export default Footer;