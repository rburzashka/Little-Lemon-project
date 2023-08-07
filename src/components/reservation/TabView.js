import { Fragment, useContext } from 'react';
import FormsContext from './Context';

const TabView = ({currentTabPrefix, displayTable, children}) => { //

const context = useContext(FormsContext);

const tab = context.formData[currentTabPrefix];
const info = context.fieldsDescriptions[currentTabPrefix].ftNames;
const table = context.selectedTable;
const prefix = context.prefix;
const selectedDishes = context.selectedDishes;


    if (tab == null) {
        return;
    }

    const details =  Object.keys(tab).map((el) => { 
        if (!tab.hasOwnProperty(el) || tab[el] == null) { 
            //console.log("----------------------", el);
            return;
        }

        if (!info[el] || info[el].hidden) {
            //console.log("----------------------", el);
            return;
        }

        if (typeof tab[el] == "object" && tab[el].hasOwnProperty("value") ) {
            return (
                <p key={prefix + el} className="field-view"> 
                    <span>{info[el].infoName}</span>
                    <span>{tab[el].value} </span>
                </p>
            );
            
        } else if (typeof tab[el] == "string") {
            return (
                <p key={prefix + el}  className="field-view">
                    <span>{info[el].infoName}</span>
                    <span>{tab[el]}</span>
                </p>
            );
            
        } else if (typeof tab[el] == "object") {//array
            return (
                <div key={prefix + el}  className={"field-view "}>
                    {
                        
                        selectedDishes.map((item) => {
                            return (
                                <Fragment key={prefix + item.id}>
                                <div className={'selected-menu ' + prefix} >

                                    <div className='image'>
                                        <img src={item.image} alt="" />
                                    </div>

                                    <div className="desccription">
                                        <h2 className='title'>{item.title}</h2>
                                        <p> Price: <span>{item.price}</span></p> 
                                        <p>{item.description}</p>
                                    </div>
                                    
                                </div>
                                </Fragment>
                                
                            )
                        })
                    }
                </div>
            );
        }
    
    });

    return (
        <>
        
        <section className="tab-view-wrapper">
                { children }
                <div className='details'>
                    <div>
                        { details }
                    </div>
                {
                    displayTable &&
                    <div id='selected-table'>
                        <div className='table-info'>
                            <div className="text">
                                <h2 className='title'>{table.tableName}</h2>
                                <p> Sitting option: <span>{table.sittingOption}</span></p> 
                                <p>Number of seats: <span>{table.numberOfSeats}</span></p>
                            </div>
                            <div className='image'><img src={table.src} alt="" /></div>
                        </div>
                        
                    </div>
                }
                </div>
        </section>
        </>
    );
  
}

export default TabView;