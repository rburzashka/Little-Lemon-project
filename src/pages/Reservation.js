import React, { useState  } from "react";

import FindTable from "../components/reservation/FindTable";
import PersonalInfo from "../components/reservation/PersonalInfo";
import Menu from "../components/reservation/Menu";

import TabsReview from "../components/reservation/TabsReview";
import TabView from "../components/reservation/TabView";
import FormSubmitReservation from "../components/reservation/SubmitReservation";
import NavTab from "../components/reservation/NavTab";
import NavTabButton from "../components/reservation/NavTabButton";

import fieldsFindTableForm from "../components/reservation/data/ft-fields-data";
import fieldsInfoForm from "../components/reservation/data/pInfo-fields-data";
import fieldsOmenu from "../components/reservation/data/menu-fields-data"

import FormsContext from '../components/reservation/Context';

import extractData from "../utils/extract-data";

import '../sass/reserve-table.scss';
// fetch data 
//submit - send to and get responce 



export default function ReserveTable () {

    const [fetchedDataTable, occasionalMenu] = window.fetchAPI();

    const extract = extractData(fetchedDataTable, occasionalMenu ); 

    const prefixes = [
        "ft", "om", "ui"
    ];

    const prefixFinalTab = "payment";
    
    const mandatory_prefixes = [
        "ft", "ui"
    ];

    let fieldsDescriptions = {
        [prefixes[0]]: fieldsFindTableForm(prefixes[0]),
        [prefixes[2]]: fieldsInfoForm(prefixes[2]),
        [prefixes[1]]: fieldsOmenu(prefixes[1])
    }

    const [formData, 
           setFormData] = useState({}); 

    const [selectedTable, 
            setSelectedTable] = useState({}); 

    const [selectedDishes, 
        setSelectedDishes] = useState({}); 

    const [isOccasion, 
        setIsOccasion] = useState(false); 

    const [tabData, setTabData] = useState({
                                    currentTab: 1,
                                    prefix: prefixes[0]
                                }); 
    
    const onClickHandleTabSwitch = (tabNumber, p) => {
        setTabData( (prev) => ({
            ...prev, 
            ...{currentTab: tabNumber},
            ...{prefix: p}
            }));
    }

    function isReadyForPayment () {
        return mandatory_prefixes.every( (m_prefix) => {
            return typeof formData[m_prefix] !== "undefined" && formData[m_prefix] !== null;
        })
    }

    return (
        <main id="main" className="reserve-table">

            <section className="content-wrapper">
                <FormsContext.Provider value={
                    {formData: formData ,
                    setFormData ,
                    prefix: tabData.prefix,
                    fieldsDescriptions,
                    selectedTable,
                    setSelectedTable,
                    isReadyForPayment,
                    setSelectedDishes,
                    selectedDishes,
                    isOccasion,
                    setIsOccasion,
                    extract
                    }
                }>

                <NavTab 
                    className="reservation-nav">
                   { (commonProps = {onClick: onClickHandleTabSwitch,
                            currentTab: tabData.currentTab,
                            }) => {
                        return (
                            <>
                            <NavTabButton 
                                tabNum={1} 
                                prefix={prefixes[0]} 
                                className="find"
                                {...commonProps}
                            >Find</NavTabButton>

                            <NavTabButton 
                                tabNum={2} 
                                prefix={prefixes[1]} 
                                className="menu"
                                {...commonProps}
                            >Menu</NavTabButton>

                            <NavTabButton 
                                tabNum={3} 
                                prefix={prefixes[2]} 
                                className="info"
                                {...commonProps}
                            >Info</NavTabButton>

                            <NavTabButton 
                                tabNum={4} 
                                prefix={prefixFinalTab} 
                                className={"payment" }
                                {...commonProps}
                                submitTab={true}
                            >Payment</NavTabButton>
                            </>
                        )
                    }
                }
                </NavTab>

                
                {tabData.currentTab === 1 && 
                <>
                    <TabView currentTabPrefix={prefixes[0]} 
                            displayTable={true}>
                        <h2 className="title">Table</h2>
                    </TabView>
                    <FindTable />

                </>
                }
                
                {tabData.currentTab === 2 && 
                    <>
                    <TabView currentTabPrefix={prefixes[1]} >
                        <h2 className="title">Occasional menu</h2>
                    </TabView>
                    <Menu />
                    </>
                }

                {tabData.currentTab === 3 && 
                    <>
                        <TabView currentTabPrefix={prefixes[2]} >
                            <h2 className="title">Your details</h2>
                        </TabView>
                        <PersonalInfo />
                        
                    </>
                    
                }

                 {(tabData.prefix == prefixFinalTab ) && 
                    <FormSubmitReservation prefixes={prefixes} >

                        <TabsReview>
                            
                            <TabView currentTabPrefix={prefixes[0]} 
                                    displayTable={true}>
                                <h2 className="title">Table</h2>
                            </TabView>

                            
                            <TabView currentTabPrefix={prefixes[1]} >
                                <h2 className="title">Occasional menu</h2>
                            </TabView>

                            <TabView currentTabPrefix={prefixes[2]} >
                                <h2 className="title">Your details</h2>
                            </TabView>

                        </TabsReview>

                    </FormSubmitReservation>
                    
                 }   
                </FormsContext.Provider>
            </section>
            
            
        </main>
    );
}