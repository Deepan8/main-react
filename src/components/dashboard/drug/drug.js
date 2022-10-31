import React from "react";
import { Nav, Bluebox, Coverage, Let, Question, SearchBar, Input, Button, Invalid, Datasearch, Totall } from "../../../components/dashboard/drug/drugstyle"
import { useState } from "react";
import context from "../../../resources/string"
import Closepop from "../../../assets/images/close.png"
import Hydroco from "./Hydro/hydro";
import { useNavigate } from "react-router-dom";
import Footer from "../../common/footer";
import { Modal, Overlay, ModalContent, Popuphead, ButtonTag, Close, Buttons, PopupContent } from '../popupstyle'
import { useRef } from "react";
import { pharmacyName } from "../Search/search_animal";
import Errorpage from "../pharmacies/errorpage/err";
import { data } from "../../../datas/data";
export const Searching = React.createContext();
function Drug() {



        const yearplan = useRef();
        const [value, setValue] = useState("");
        const [shown, isShown] = useState(false);
        const [modal, setModal] = useState(false);
        const [empty, isEmpty] = useState(false);
        const toggleModal = () => {
            if (yearplan.current.value === 'Next Year')
                setModal(!modal);
        };

        const navigate = useNavigate();

       const handleClick = event => {
        if (pharmacyName.includes(value)) {
                isShown(true);
              
            }


            else {
                // isEmpty(true);
                // isShown(false);
                navigate("/Errorpage");
            }


        }
        const handleSubmit = event => {
            yearplan.current.value = 'Current Year';
            setModal(!modal);
        }

        const onChange = (event) => {
                     setValue(event.target.value);
                     isShown(false);
                 };

        const onSearch = (searchTerm) => {
            setValue(searchTerm);


        };

        return (
            <Searching.Provider value={value}>
            <Totall>

                <Nav>{context.Navcontent}</Nav>
                <Bluebox>
                    <Coverage>
                        {context.Coveragearea}
                        {context.Plancoverage}
                        <select onChange={toggleModal} ref={yearplan}>

                            <option>Current Year</option>
                            <option>Next Year</option>
                        </select>
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
                    <Let>
                        {context.Letsbe}
                    </Let>
                    <Question>
                        {context.Drugquestion}
                    </Question>
                    <SearchBar>
                        <Input type="text" value={value} onChange={onChange}></Input>
                        <Datasearch>
                            {data
                                .filter((item) => {
                                    const searchTerm = value.toLowerCase();
                                    const searchValue = item.search_value.toLowerCase();

                                    return (
                                        searchTerm &&
                                        searchValue.startsWith(searchTerm) &&
                                        searchValue !== searchTerm
                                    );
                                })
                                .map((item) => (
                                    <div onClick={() => onSearch(item.search_value)}
                                        key={item.search_value} >
                                        {item.search_value}
                                    </div>
                                ))}
                        </Datasearch>
                        <Button onClick={handleClick} >Search</Button>

                    </SearchBar>


                </Bluebox>





               {shown && <Hydroco /> }

                {empty && <Errorpage />}

                {/* {empty && ( <Link to='/Errorpage'></Link> )} */}
                <Footer />
            </Totall>
            </Searching.Provider>
        );
    }
//     const navigate = useNavigate();
//     const yearplan = useRef();
//     const [value, setValue] = useState("");
//     const [shown, isShown] = useState(false);
//     const [modal, setModal] = useState(false);

//     const toggleModal = () => {
//         if (yearplan.current.value === 'Next Year')
//             setModal(!modal);
//     };
//     const handleClick = event => {
//         if (pharmacyName.includes(value)) {
//             isShown(true);
//         }
//         else {
//             navigate('/error')
//         }
//     }
//     const handleSubmit = event => {
//         yearplan.current.value = 'Current Year';
//         setModal(!modal);
//     }
//     const onChange = (event) => {
//         setValue(event.target.value);
//         isShown(false);
//     };
//     const onSearch = (searchTerm) => {
//         setValue(searchTerm);
//     };
//     return (
//         <>
//             <Searching.Provider value={value}>
//                 <Nav>{context.Navcontent}</Nav>
//              <Bluebox>
//                   <Coverage>
//                      {context.Coveragearea}
//                      {context.Plancoverage}
//                      <select onChange={toggleModal} ref={yearplan}>

//                          <option>Current Year</option>
//                         <option>Next Year</option>
//                     </select>
//                         <>
//                             {modal && (
//                                 <Modal>
//                                     <Overlay onClick={toggleModal} ></Overlay>
//                                     <ModalContent>
//                                         <Close>
//                                             <Popuphead>You are Choosing Next Year as Plan Coverage </Popuphead>
//                                             <img src={images.close} onClick={toggleModal} alt="close" />
//                                         </Close>
//                                         <PopupContent>
//                                             <p>By continuing this, You may Loose already added details of drugslist. </p>
//                                             <H4>Do you want to Continue?</H4>
//                                         </PopupContent>
//                                         <ButtonTag>
//                                             <Buttons onClick={toggleModal}>Yes</Buttons>
//                                             <Buttons onClick={handleSubmit}>No</Buttons>
//                                         </ButtonTag>
//                                     </ModalContent>
//                                 </Modal>
//                             )}
//                         </>
//                     </Coverage>
//                  </Bluebox>
//                  <Let>
//                         {context.Letsbe}
//                     </Let>
//                     <Question>
//                         {context.Drugquestion}
//                     </Question>
//                  <SearchBar >
//                     <Input type="text"
//                         value={value}
//                         onChange={onChange}
//                     />
//                     <Button onClick={handleClick} >Search</Button>
//                  </SearchBar>
//             </Search>
//             <SearchItems >
//                 {data
//                     .filter((item) => {
//                         const searchTerm = value.toLowerCase();
//                         const searchValue = item.search_value.toLowerCase();

//                         return (
//                             searchTerm &&
//                             searchValue.startsWith(searchTerm) &&
//                             searchValue !== searchTerm
//                         );
//                     })
//                     .map((item) => (
//                         <div onClick={() => onSearch(item.search_value)}
//                             key={item.search_value} >
//                             {item.search_value}
//                         </div>
//                     ))}
//             </SearchItems>
//             {shown && <Hydroco />}
//             <Footer />
//         </Searching.Provider>
//      </>
//     )
// }

export default Drug;