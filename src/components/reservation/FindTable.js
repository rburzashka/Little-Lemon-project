import { 
        Formik, Form, Field, ErrorMessage } from 'formik';
    
import React, {Fragment, useState, useContext, useEffect} from 'react';
import SelectComponent from './SelectComponent';

import getInitialValues from './utils/get-initial-values';

import FormsContext from './Context';

/*     error touched, s, dirty, handleChange, handleBlur, handleSubmit, handleReset, 
    setFieldValue,
    darepicker react - https://reactdatepicker.com/



//TODO Disable Time and Sitting select component when date is not setted
//TODO Reset data.table on selecting diff sate or time
*/

const FindTable = () => {//{formData, setFormData, prefix, fieldsEntryData}

    const context = useContext(FormsContext);
    const { formData, 
            setFormData, 
            prefix, 
            fieldsDescriptions,
            setSelectedTable,
            setIsOccasion,
            extract } = context;

    const fieldsEntryData = fieldsDescriptions[prefix];

    let initValues = {};

    const [availableTables, setAvailableTables] = useState([]);
    const [data, setData] = useState({}); 

    const initialValues = getInitialValues(fieldsEntryData, prefix);

    useEffect( () => {
        initValues = extract.initValues();

        setData({
            dates: initValues.dates.map((prop, i) => ({ value: prop, label: prop })),
            times: initValues.times.map((prop, i) => ({ value: prop, label: prop })),
            selectedDate: null,
            selectedTime: null,
            selectedSittingOptions: null,
            selectedTable: {},
            isSubmited: formData[prefix] != null
           });
    }, []);

    function getDateTimeValueLabels (values) {
    
        const emptyEl = [];
    
        if (typeof(values) == "undefined") {
            return emptyEl;
        }
    
        let valueLabel = [];

    
        valueLabel = values.map((v) => { 
            return { value: v, label: v }
        });
    
        if (valueLabel.length == 0) {
            valueLabel =  emptyEl;
        }
    
        return valueLabel;
    }
    
    const  handleSubmit = (values, func) => {
/*
resetForm : f (nextState)
setErrors : f (errors)
setFieldError : f (field, value)
setFieldTouched : f ()
setFieldValue : f ()
setFormikState : f (stateOrCb)
setStatus : f (status)
setSubmitting : f (isSubmitting)
setTouched : f ()
setValues : f ()
submitForm : f ()
validateField : f ()
validateForm : f ()*/
        setFormData((prev) => ({...prev, ...values}));
        setSelectedTable(() => (data.selectedTable));
        const isOccasion = values[prefix].occasion && (values[prefix].occasion.value != '') ? true : false;
        setIsOccasion((prev) => (isOccasion));
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

        setAvailableTables([]);
        setSelectedTable(() => ({}));
        setFormData((prev) => (
                    {...prev, 
                    ...{[prefix]: null}}));

    }

    if (formData) {
//set findTableFields values
    }

    return (
        <>
        <Formik 
            initialValues={ initialValues }
            validationSchema={fieldsEntryData.validationSchema}
            onSubmit={handleSubmit} 
            onReset={handleReset}>

            {({ values, error, touched, isSubmitting, isValid, dirty, setFieldValue }) => (
            <Form id="find-table" className="test">

            { !data.isSubmited &&
            <div>
                <div className="wrapper-fields">
                    <div className="field">
                        
                        <SelectComponent
                            {...fieldsEntryData.inputFields.date}
                            options={data.dates}
                            setState={(val)=>{
                                
                                let t = extract.extractAvailableTimes(val, null);
                                let opt = getDateTimeValueLabels(t);

                                setData((prev)=>({
                                    ...prev, 
                                    ...{selectedDate: val,
                                        selectedTime: null,
                                        selectedSittingOptions: null,
                                        times: opt
                                }}));

                                setFieldValue(fieldsEntryData.inputFields.startTime.name, null);
                                setFieldValue(fieldsEntryData.inputFields.sittingOptions.name, null);

                                setAvailableTables((prev)=> extract.getTables(
                                    val, null, null));
                            }} />
                            <ErrorMessage name={fieldsEntryData.inputFields.date.name}>
                                {(msg) => <p className="field-error">{msg.value}</p>}
                            </ErrorMessage>
                    </div>

                    <div className="field">
                        <SelectComponent {...fieldsEntryData.inputFields.sittingOptions} 
                            options={fieldsEntryData.inputFields.sittingOptions.options}
                            setState={(val)=>{
                                let t = extract.extractAvailableTimes(data.selectedDate, val);
                                let opt = getDateTimeValueLabels(t);

                                setData((prev)=>({
                                    ...prev,
                                    ...{
                                        selectedTime: null,
                                        sittingOptions: val,
                                        times: opt
                                    }}));

                                    //??????
                                    setFieldValue(fieldsEntryData.inputFields.startTime.name, null);

                                setAvailableTables((prev)=> extract.getTables(
                                    data.selectedDate, null, val ));
                            }}/>
                    </div>

                    <div className="field">
                        
                        <SelectComponent 
                            {...fieldsEntryData.inputFields.startTime}
                            options={data.times} 
                            setState={(val)=>{
                                
                                setData((prev)=>({
                                    ...prev, 
                                    ...{selectedTime: val,
                                    }}));

                                setAvailableTables((prev)=> extract.getTables(
                                    data.selectedDate, val, data.selectedSittingOptions ));
                            }}/>

                        <ErrorMessage name={fieldsEntryData.inputFields.startTime.name}>
                            {(msg) => <p className="field-error">{msg.value}</p>}
                        </ErrorMessage>
                    </div>


                    <div className="field">
                        <Field {...fieldsEntryData.inputFields.numOfGuests} 
                                className="text-field"/>
                        <ErrorMessage name={fieldsEntryData.inputFields.numOfGuests.name}>
                            {(msg) => <p className="field-error">{msg}</p>}
                        </ErrorMessage>
                    </div>
                    
                    <div className="field">
                        <SelectComponent 
                            name={fieldsEntryData.inputFields.occasion.name} 
                            options={fieldsEntryData.inputFields.occasion.options} />
                    </div>
                    
                    <div  className="field">
                        <Field {...fieldsEntryData.inputFields.specialRequest} component="textarea"/>
                    </div>
                </div>


                { (data.selectedDate && (data.selectedTime === null) && dirty) && (availableTables.length !== 0) &&
                    <p className='message'>Pick a start time to be able to choose a table</p> }

                { (availableTables.length === 0) && dirty && 
                <p className='message'>There no available tables for today</p> }
                
                <div id="available-tables" className={data.selectedTime == null ? 'disabled' : ''}>
                    {
                        availableTables.map((t) => {return (
                            <section className={"wrapper-table " + (t.tableId == (data.selectedTable.tableId) ? 'checked' : '')} key={t.tableId}>
                            
                            <label htmlFor={"t-" + t.tableId}> 
                                
                                <span>
                                    <span className='opt'>{t.sittingOption}</span>  
                                    <span className='wrapper-image'>
                                        <img className="table-img" src={t.src} alt="Occasional menu"/>
                                    </span>
                                </span>

                                <span className='sit-opt'>

                                    <span>
                                        <Fragment key={t.tableId}>
                                            <Field {...fieldsEntryData.inputFields.table}
                                                id={"t-" + t.tableId}
                                                className={"btn-radio"}
                                                value={t.tableId}
                                                disabled={data.selectedTime == null ? true : false }
                                                onChange={ () => { 
                                                    setFieldValue(fieldsEntryData.inputFields.table.name, t.tableId);
                                                    setData((prev) => ({
                                                        ...prev,
                                                        selectedTable: t}));
                                                } }  
                                            />
                                        </Fragment>
                                    </span>
                                    <span className='seats-num'>{t.numberOfSeats}+ seats</span>
                                </span>
                                
                            </label>
                            

                            <div className='table-name'>
                                <h2 className='title'>{t.tableName}</h2>
                            </div>

                            <div className='hours'>
                                    {
                                    (data.selectedTime === '') && t.availableTimes.map((aT => {
                                            return (
                                                <Fragment key={aT}>
                                                <span>{aT}</span>
                                                </Fragment>
                                            )
                                        }))
                                    }
                                </div>
                            
                            </section>
                        )})
                    }

                </div>
                {(availableTables.length !== 0) &&  <p style={{"color": "#ce3a3a", "font-size": "0.8em"}}>Images were created with "Image Creator from Microsoft Designer"</p>}
                </div>
            }
                <div className={"form-btns " + (data.isSubmited ? 'submited' : '')}>
                    { !data.isSubmited && 
                        <button 
                            type="submit"  
                            disabled={isSubmitting}
                            className={ 'btn-form submit ' + (isValid && dirty ? '' : 'disabled')}
                         >
                            <span>Book table</span>
                    </button>}

                    {data.isSubmited && 
                    <button className='btn-form reset' type="reset"><span>Reset</span></button>}
                </div>
            </Form>
             )}
        </Formik>
        
        </>
    );
}
  export default FindTable;