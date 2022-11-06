import { Nav, Bluebox, Question, Twobox, Doctorbox, Drugbox, Imagetag, Logoheading, Row, Buttontag, Contentag, Mainblue, Logoname,Links,Totall } from "../../../src/components/dashboard/landingpagestyle"
import Footer from "../common/footer";
import context from "../../../src/resources/string"
import { images } from "../../resources/images"
function Content() {

    return (
        <Totall>
            <Mainblue >

                <Nav Category='navi'>{context.Navcontent}</Nav>
                <Bluebox>
                    <Question Category='navii'>
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
                             <Links to="/Drug">   <Buttontag type="submit" value="Submit"  >search for drugs</Buttontag></Links>
                             <Links to="/Pharmacies">  <Buttontag type="submit" value="Submit"  >search for pharmacies</Buttontag></Links>
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