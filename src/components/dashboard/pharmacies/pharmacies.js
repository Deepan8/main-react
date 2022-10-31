import { Nav, Bluebox, Coverage, Let, Question, Search, Tot, Whitebox, Titlebox, Combothree, Downcombothree, Downcombotwo, Row, Col, Buttontag, Bluecontent, InputType, Select,Selecttag,Inputbox ,Links,Totall} from "../../../components/dashboard/pharmacies/pharmaciesstyle"
import context from "../../../resources/string"
import { useRef, useState } from "react";
import PharmacyNames from "./PharmacyName";
import Footer from "../../common/footer";
import { Pop } from "../../common/popup";
import { Link } from "react-router-dom";
import { Modal, Overlay, ModalContent, Popuphead, ButtonTag, Close, Buttons, PopupContent ,Buttonsno} from '../../common/popupstyle'
import Dummy from "./dummy";
import Closepop from "../../../assets/images/close.png"


function Pharmacies() {

  

    const valid = useRef();
    const [iserror,setiserror]= useState({});

//  const handleClick = () => {


//     setiserror(validate(valid.current.value))
//  }
//    const validate = (valid) => {
//     const err={};
    
//     if (valid === '') {
//     err.valid='please enter the positive number';
//     }
//    return err;
//    }


    const yearplan = useRef();
    const [value, setValue] = useState("");
    
    const [modal, setModal] = useState(false);
    const [empty, isEmpty] = useState(false);
    const toggleModal = () => {
        if (yearplan.current.value === 'Next Year')
            setModal(!modal);
    };

    const hours = useRef();
    const all = useRef();
    const standard = useRef();
    const prefer = useRef();

    const [shown, isShown] = useState(false);
    const handleSubmit = event => {
        setiserror(validate(valid.current.value))

        if (hours.current.checked === true && (all.current.checked === true || standard.current.checked === true ||
            prefer.current.checked === true)) {
            isShown(current => !current);
        }
    }
    const validate = (valid) => {
        const err={};
        
        if (valid === '') {
        err.valid='please enter the pharmacy name';
        }
       return err;
       }
    return (
        <Totall>

            <Nav color="white">{context.Navcontent}</Nav>
            <Bluebox>
                <Bluecontent>
                    <Coverage>
                       <p> {context.Coveragearea}</p>
                       <p>  {context.Plancoverage}</p>
                        <Selecttag onChange={toggleModal} ref={yearplan}>
                            <option>Current Year</option>
                            <option>Next Year</option>
                        </Selecttag>
                        <>
                            {modal && (
                                <Modal>
                                    <Overlay onClick={toggleModal} ></Overlay>
                                    <ModalContent>
                                        <Close>
                                            <Popuphead>You are Choosing Next Year as Plan Coverage </Popuphead>
                                            <img src={Closepop} onClick={toggleModal} alt="close" />
                                        </Close>
                                        <PopupContent>
                                            <p>By continuing this, You may Loose already added details of drugslist. </p>
                                            <h5>Do you want to Continue?</h5>
                                        </PopupContent>
                                        <ButtonTag>
                                            <Buttons onClick={toggleModal}>Yes</Buttons>
                                            <Buttons className="buttons" onClick={toggleModal}>No</Buttons>
                                        </ButtonTag>
                                    </ModalContent>
                                </Modal>
                            )}
                        </>
                    </Coverage>

                    <Question>
                        {context.Pharmquestion}
                    </Question>
                    <Whitebox>
                        <Combothree>
                            <Titlebox>
                                <h3>Pharmacy Name</h3>
                                <Inputbox type='text' ref={valid} ></Inputbox>
                                <p>{iserror.valid}</p>
                            </Titlebox>
                            <Titlebox>
                                <h3>Search Radius</h3>
                                <Select>
                                    <option>1 Mile</option>
                                    <option>5 Mile</option>
                                    <option>15 Mile</option>
                                    <option>30 Mile</option>
                                    <option>50 Mile</option>
                                </Select>
                            </Titlebox>
                            <Titlebox>
                                <h3>Pharmacy Type</h3>
                                <InputType>

                                    <Select id="type">
                                        <option value="all">All</option>
                                        <option value="hospital">Hospital</option>
                                        <option value="clinical">Clinical</option>
                                        <option value="consulting">Consulting</option>
                                        <option value="industrial">Industrial</option>
                                    </Select>
                                </InputType>
                            </Titlebox>
                        </Combothree>
                        <Downcombothree>
                            <Downcombotwo>
                                <h4>Extended Hours</h4>
                                <Row>
                                    <input type="checkbox" ref={hours} id="vehicle1" name="vehicle1" value="Bike" />
                                    <label htmlFor="vehicle1"> 24-Hour Pharmacy</label>
                                </Row>
                            </Downcombotwo>
                            <Downcombotwo>
                                <h4>cost Share</h4>
                                <Col>
                                    <Row>
                                        <input type="radio" n ref={all} id="html" name="fav_language" value="HTML" />
                                        <label htmlFor="html">All</label>
                                    </Row>
                                    <Row>
                                        <input type="radio" ref={standard} id="html" name="fav_language" value="HTML" />
                                        <label htmlFor="html">Standard cost Share</label>
                                    </Row>
                                    <Row>
                                        <input type="radio" ref={prefer} id="html" name="fav_language" value="HTML" />
                                        <label htmlFor="html">Prefferd cost Share</label>
                                    </Row>
                                </Col>
                            </Downcombotwo>
                            <Links to='PharmacyNames'>  <Buttontag type="submit" value="Submit" onClick={handleSubmit} >Search Pharmacy</Buttontag></Links>
                            {/* <Dummy/> */}

                        </Downcombothree>


                    </Whitebox>
                    <Search>

                    </Search>

                    <Let>
                        {context.pharmacyCount}
                    </Let>
                </Bluecontent>
            </Bluebox>
            {/* <PharmacyNames/> */}
            {shown && <PharmacyNames />}
            <Footer />
        </Totall>
    );
}

export default Pharmacies;