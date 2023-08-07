import React, {useContext, Fragment} from "react";
import FormsContext from "./Context";
import { Formik, Form, Field } from "formik";

const FormSubmitReservation = ({prefixes, children}) => {

        const context = useContext(FormsContext);
        const {formData} = context;

        const  handleSubmit = (e) => {
            e.preventDefault();
            console.log(e);
        }

    return (
    <>
        <form id="submit-reservation" 
            className="test" 
            name="reservation" 
            onSubmit={(handleSubmit)}> 


        {
            ( Object.keys(formData).length > 0 ) && 
            prefixes.map( (prefix) => { 

                return(
                    formData[prefix] && Object.keys(formData[prefix]).map((data) => {

                        if(typeof formData[prefix][data] == "object" && formData[prefix][data] != null) {
                            return ( //???
                                Object.keys(formData[prefix][data]).map((key) => {
                                    return (key != "label") && 
                                    <input 
                                        key={[prefix] + [data]}
                                        type="hidden" 
                                        name={[prefix] +  "." + [data]} value={formData[prefix][data][key]}/>
                                })
                            )
                        }

                        return (
                            <Fragment key={[prefix] + [data]}>
                            
                            <input type="hidden" name={[prefix] + "." + [data]} value={formData[prefix][data]} />
                            </Fragment>
                        )
                    })
                )
            
            })
        }

            <div className="form-btns ">
                <div>
                    <h2 className="title">Payment module - TO DO</h2>
                </div>


                <button 
                    type="submit"  
                    className='btn-form submit '
                    >
                        <span>Submit</span>
                </button>
            </div>
        </form>

        <h1 className="title">Reservation details</h1> 
        <div id="tab-wrapper">{children}</div>
    </>
    )
}

export default FormSubmitReservation;