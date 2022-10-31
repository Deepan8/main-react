import { Nav, Bluebox, Question, Twobox, Doctorbox, Drugbox, Imagetag, Logoheading, Row, Buttontag, Contentag, Mainblue, Logoname,Links,Totall } from "../../../src/components/dashboard/landingpagestyle"
import Footer from "../common/footer";
import { useNavigate } from "react-router-dom";
import context from "../../../src/resources/string"
import { images } from "../../resources/images"
function Content() {
    const navigate = useNavigate();

    function handleClick() {
      navigate("/Drug");
     
    }
    function handleClickPharmacies() {
        navigate("/Pharmacies");
       
      }
    return (
        <Totall>
            <Mainblue color="red">

                <Nav>{context.Navcontent}</Nav>
                <Bluebox>
                    <Question>
                        {context.Searchwhat}
                    </Question>
                    <Twobox>
                        <Doctorbox>
                            <Logoheading>
                                <Imagetag src={images.Stetscope} />
                                <Logoname>{context.Doctor}</Logoname></Logoheading>

                            <Contentag> {context.Hereyou}</Contentag>
                            <Links to="/Pro"> <Buttontag type="submit"   >search for providers</Buttontag></Links>
                        </Doctorbox>

                        <Drugbox>
                            <Logoheading><Imagetag src={images.Medicine} />
                                <Logoname>{context.Drug}</Logoname></Logoheading>
                            <Contentag> {context.Find}</Contentag>
                            <Row>
                             <Links to="/Drug">   <Buttontag type="submit" value="Submit" onClick={handleClick} >search for drugs</Buttontag></Links>
                             <Links to="/Pharmacies">  <Buttontag type="submit" value="Submit" onClick={handleClickPharmacies} >search for pharmacies</Buttontag></Links>
                            </Row>
                        </Drugbox>
                    </Twobox>
                </Bluebox>
            </Mainblue>
           <Footer/>


           
        </Totall>
    );
}

export default Content;