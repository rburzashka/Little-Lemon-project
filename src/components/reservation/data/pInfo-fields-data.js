import * as Yup from 'yup';

function fieldsInfoForm(prefix) {

        const pref = prefix ? (prefix + ".") : "ui.";

        return {
                inputFields: {
            
                    firstName: {  name: pref + "firstName", 
                                    type: "text", 
                                    placeholder: "First name..."
                            },
                    lastName: {  name: pref + "lastName", 
                            type: "text", 
                            placeholder: "Last name..."
                    },
                    email: {  name: pref + "email", 
                            type: "email", 
                            placeholder: "Email..."
                    },
                    phone: {  name: pref + "phone", 
                            type: "tel", 
                            placeholder: "Phone number..."
                    },
                    reminders: {  name: pref + "reminders", 
                            type: "checkbox", 
                    },
                    offers: {  name: pref + "offers", 
                            type: "checkbox", 
                    },
                },
                validationSchema: Yup.object().shape({
                    [prefix]: Yup.object({
                        firstName: Yup.string().required("Required").min(3, "Must be at least 3 characters"),
                        lastName: Yup.string().required("Required").min(5, "Must be at least 5 characters"),
                        phone: Yup.string()
                            .matches(/^\+?[1-9]\d{0,3}([-, ]?\d{0,2}){0,4}([-, ]?\d{1,5})?$/, 'Invalid phone number')
                            .required('Phone number is required'),
                        email: Yup.string().email('Invalid email')
                            .required('Email is required'),
                    })
                        ,
                    
                  }),
                  ftNames: {
                    firstName: {infoName: 'First name '},
                    lastName: {infoName: 'Last name '},
                    phone: {infoName: 'Phone number'},
                    email: {infoName: 'Email'},
                    reminders: {infoName: 'I want to get reminders about my reservation', hidden: true },
                    offers: {infoName: 'I want to receive offers and news by email', hidden: true}
                  }
            }
};

export default fieldsInfoForm;