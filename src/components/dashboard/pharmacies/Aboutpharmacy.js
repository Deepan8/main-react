import { useLocation } from "react-router-dom"
import { details, explain } from "../../../resources/string";
import {
    PharmacyName, Pharm, Planing, Tag, TagContent, PreferOptions, StandardOptions, Div,
    Information, P, H4, Fillup
} from "./Aboutpharmacystyle"
import { pharmacydetails } from "../../../resources/string";
import {prefercost} from "../../../resources/string";
import {standardcost} from "../../../resources/string";


export default function About() {
    const { state } = useLocation();
    return (
        <>
            {pharmacydetails.map((pharmacy) => {
                return (
                    <>
                        {state.id === pharmacy.id  && (
                            <>
                        <Pharm>
                            <PharmacyName>{pharmacy.name}</PharmacyName>
                           
                            <Div>
                                <Planing>
                                    <div>
                                        <H4>{explain.extHours}</H4>
                                        <P>{explain.time}</P>
                                    </div>
                                    <div>
                                        <H4>{explain.tt}</H4>
                                        <P>{explain.ttCount}</P>
                                    </div>
                                </Planing>
                            </Div>
                            <Div>
                                <>
                                <h3>{explain.pharmType}</h3>
                                <Tag>
                                        <TagContent>{details.home}</TagContent>
                                        <TagContent>{details.retail}</TagContent>
                                        <TagContent>{details.specialty}</TagContent>
                                        <TagContent>{details.care}</TagContent>
                                </Tag>
                                    <Fillup>
                                        <li>{explain.fillup}</li>
                                        <li>{explain.pricing}</li>
                                    </Fillup>
                                </>
                                <>
                                    <h3>{explain.prefer}</h3>
                                    <PreferOptions>
                                    {prefercost.map((item,i) => {
                                                   return(
                                                    <li>{item.name}</li>
                                                   )
                                                })}
                                    </PreferOptions>
                                </>
                                <>
                                    <h3>{explain.standard}</h3>
                                    <StandardOptions>
                                    {standardcost.map((item,i) => {
                                                   return(
                                                    <li>{item.name}</li>
                                                   )
                                                })}
                                    </StandardOptions>
                                </>
                            </Div>
                            <Div>
                                <>
                                    <P>{explain.dueDate}</P>
                                    <P>{explain.lastUpdate}</P>
                                </>
                            </Div>
                            <Div>
                                <Information>
                                    <h3>{explain.importantinfo}</h3>
                                    <P>{explain.info}</P>
                                </Information>
                            </Div>
                        </Pharm>

                        </> 
                        )
            }
            </> )
         }
            ) } </>

       ) }