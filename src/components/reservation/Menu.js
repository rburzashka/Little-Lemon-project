import React, {Fragment, useContext, useState} from "react";
import FormsContext from './Context';
import { 
    Formik, Form, Field } from 'formik';

const Menu = () => {

    const context = useContext(FormsContext);

    const { formData,
            setFormData, 
            prefix, 
            fieldsDescriptions,
            setSelectedDishes,
            isOccasion,
            extract} = context;

    const menu = extract.getMenu(isOccasion);

    const fieldsEntryData = fieldsDescriptions[prefix];

    const initDataState = {
        isSubmited: formData[prefix] != null
       }

    const [data, 
           setData] = useState(initDataState);

    const  handleSubmit = (values, func) => {

        setFormData((prev) => ({...prev, ...values}));

        const dishes = menu.filter((item) => {
            
            const x = values[prefix][fieldsEntryData.inputFields.nameFormik].find((v)=>{
                return v == item.id
            });

            return x != null;
        });
        setSelectedDishes(()=>(dishes));

        func.setSubmitting(false);
        setData((prev) => {
            return {
                ...prev,
                ...{isSubmited: true}
            }
        });

        //TODO
        //set data for displaying
    }
    
    const handleReset = (values, func) => {
        setData((prev) => {
            return {
                ...prev,
                ...{isSubmited: false}
            }
        });

        setSelectedDishes(null);

        setFormData((prev) => (
            {...prev, 
            ...{[prefix]: null}}));
    }

    const initialValues = {[prefix] : {
        [fieldsEntryData.inputFields.nameFormik]: []
      } }

    return (
        <>
        

        <Formik 
            initialValues={ initialValues }
            //validationSchema={fieldsEntryData.validationSchema}
            onSubmit={handleSubmit} 
            onReset={handleReset}>

            {({ values, error, touched, isSubmitting, isValid, dirty, setFieldValue }) => (
            <Form id="occasional-menu" className="test"> 
            { !data.isSubmited &&
            <section className="wrapper-fields wrapper-item" role="group" aria-labelledby="checkbox-group">
            { menu.map( (item, index) => { return (
                <Fragment key={item.id} >
                        <div className="field-menu">
                            <label htmlFor={"item-" + item.id} >
                                <div className="menu-image">
                                    <span><img src={item.image} alt="menu"/></span>
                                    <span>
                                        <Field 
                                            {...fieldsEntryData.inputFields.menu}
                                            id={"item-" + item.id}
                                            className="checkbox"
                                            value={item.id.toString()} />
                                            <span className="price">{item.price}</span>
                                    </span>
                                </div>

                                <div className="item-description" >
                                    <div>
                                        <h2 className="item-title" >{item.title}</h2>
                                    </div>
                                    <div className="item-text">
                                        <p>{item.description}</p>
                                    </div>

                                </div>
                            </label>
                        </div>
                         </Fragment>
                    ) } )
            }
            </section>
            }
            <div className={"form-btns " + (data.isSubmited ? 'submited' : '')}>
                    { !data.isSubmited && <button 
                        type="submit"  
                        disabled={isSubmitting}
                        className={ 'btn-form submit ' + (isValid && dirty ? '' : 'disabled')}
                         >
                            <span>Add to reservation</span>
                    </button>}

                    {data.isSubmited && 
                    <button className='btn-form reset' type="reset"><span>Reset</span></button>}
            </div>
            </Form>
            )}
        </Formik>
        
        </>
    )
}

export default Menu;