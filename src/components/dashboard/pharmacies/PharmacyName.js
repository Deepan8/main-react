import {
    Available, ContactDistance, AddressContact, Contact, Heading, Img, P, PharmacyName,
    Tag, TagContent, Pharm, Links, Divsion,Detailedpharmacy
} from "./PharmacyNamestyle"
import { details } from '../../../resources/string'
import call from '../../../assets/images/telephone.png'
import location from '../../../assets/images/location.png'
import About from "./Aboutpharmacy"
import { useState } from "react"
import Pharmacies from "./pharmacies"
import { pharmacydetails } from "../../../resources/string"
import Footer from "../../common/footer"
export default function PharmacyNames() {

    
    const [shown, isShown] = useState(false);
    const handleSubmit = event => {
        isShown(true);
    }
    return (
<>

    <Divsion>
            <Available>
                <Heading>{details.avail}</Heading>
                {pharmacydetails.map((details, i) => {
                    return (

                        <Links onClick={handleSubmit} state={{ id: i }}>
                            <Pharm>
                                <PharmacyName>{details.name}</PharmacyName>
                                <AddressContact>
                                    <p>{details.address}</p>
                                    <ContactDistance>
                                        <Contact>
                                            <Img src={call} alt="contact" />
                                            <P>{details.phone}</P>
                                        </Contact>
                                        <Contact>
                                            <Img src={location} alt="location" />
                                            <P>{details.distance}</P>
                                        </Contact>
                                    </ContactDistance>
                                </AddressContact>
                                <TagContent>

                                    {details.tag.map((type) => {
                                        return <Tag>{type}</Tag>
                                    })}
                                </TagContent>

                            </Pharm>
                        </Links>
                      )
                    })}
                </Available>
                <Detailedpharmacy>
                    {shown && <About />}
                </Detailedpharmacy>
            </Divsion>
          
            </>
        )
    }
