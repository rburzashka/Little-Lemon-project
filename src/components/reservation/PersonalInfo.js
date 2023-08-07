import React, {useContext, useState} from 'react';
import { 
    Formik, Form, Field, ErrorMessage } from 'formik';

import getInitialValues from './utils/get-initial-values';

import FormsContext from './Context';

export default function PersonalInfo () { //{formData, setFormData, prefix, fieldsEntryData}

    const context = useContext(FormsContext);
    
    const {formData, setFormData, prefix, fieldsDescriptions } = context;

    const fieldsEntryData = fieldsDescriptions[prefix];

    const initialValues = formData[prefix] ?  formData :  getInitialValues(fieldsEntryData, prefix);

    const initDataState = {
        isSubmited: formData[prefix] != null
       }

    const [data, 
           setData] = useState(initDataState); 

    const  handleSubmit = (values, func) => {

            setFormData((prev) => ({...prev, ...values}));
            func.setSubmitting(false);
            setData((prev) => {
                return {
                    ...prev,
                    ...{isSubmited: true}
                }
            });
        }
    
    const handleReset = (values, func) => {
        setData((prev) => {
            return {
                ...prev,
                ...{isSubmited: false}
            }
        });

        setFormData((prev) => (
            {...prev, 
            ...{[prefix]: null}}));
    }

    return (
        <Formik 
                initialValues={ initialValues }
                validationSchema={fieldsEntryData.validationSchema}
                onSubmit={handleSubmit} 
                onReset={handleReset}
                >

        {({ values, error, touched, isSubmitting, isValid, dirty, 
                setFieldValue, handleChange }) => (
            <Form id="find-table" className="test">

                { !data.isSubmited && 
                <>
                <div className="wrapper-fields">

                    <div className="field">
                        <Field {...fieldsEntryData.inputFields.firstName} 
                                className="text-field" 
                        />
                        
                        <ErrorMessage name={fieldsEntryData.inputFields.firstName.name}>
                            {(msg) => <p className="field-error">{msg}</p>}
                        </ErrorMessage>
                    </div>
                

                    <div className="field">
                        <Field {...fieldsEntryData.inputFields.lastName} 
                        className="text-field"/>
                        
                        <ErrorMessage name={fieldsEntryData.inputFields.lastName.name}>
                            {(msg) => <p className="field-error">{msg}</p>}
                        </ErrorMessage>
                    </div>

                    <div className="field">
                        <Field {...fieldsEntryData.inputFields.phone} 
                        className="text-field" />
                        
                        <ErrorMessage name={fieldsEntryData.inputFields.phone.name}>
                            {(msg) => <p className="field-error">{msg}</p>}
                        </ErrorMessage>
                    </div>

                    <div className="field">
                        <Field {...fieldsEntryData.inputFields.email} 
                        className="text-field" />
                        
                        <ErrorMessage name={fieldsEntryData.inputFields.email.name}>
                            {(msg) => <p className="field-error">{msg}</p>}
                        </ErrorMessage>
                    </div>
                </div>

                <div className="wrapper-fields pref">
                        <div className="field">
                            <label>
                                <span><Field {...fieldsEntryData.inputFields.reminders} className="checkbox" /></span>
                                <span>{fieldsEntryData.ftNames.reminders.infoName}</span>
                            </label>
                            <ErrorMessage name={fieldsEntryData.inputFields.reminders.name} >
                                {(msg) => <p className="field-error">{msg}</p>}
                            </ErrorMessage>
                        </div>
                        <div className="field">
                            <label>
                                <span><Field {...fieldsEntryData.inputFields.offers} className="checkbox"/></span>
                                <span>{fieldsEntryData.ftNames.offers.infoName}</span>
                            </label>
                            <ErrorMessage name={fieldsEntryData.inputFields.offers.name}>
                                {(msg) => <p className="field-error">{msg}</p>}
                            </ErrorMessage>
                        </div>
                    </div>
                </>
                }

                <div className={"form-btns " + (data.isSubmited ? 'submited' : '')}>
                    { !data.isSubmited && <button 
                        type="submit"  
                        disabled={isSubmitting}
                        className={ 'btn-form submit ' + (isValid && dirty ? '' : 'disabled')}
                         >
                            <span>Save</span>
                    </button>}

                    {data.isSubmited && 
                    <button className='btn-form reset' type="reset"><span>Reset</span></button>}
                </div>
            </Form>
        )}
        </Formik>
    )
}