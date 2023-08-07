import * as Yup from 'yup';


function fieldsFindTableForm (prefix) {
    const pref = prefix ? (prefix + ".") : "ft.";

    return {
        inputFields: {
            table: {
                name: pref + "table",
                type: 'radio',
            },
            date: { name: pref + "date", 
                    type: "select", 
                    placeholder: "Pick a date...", 
                    id: "ft-dates", 
                },
            startTime: { name: pref + "startTime", 
                        type: "select", 
                        placeholder: "Pick a start time...",
                        id: "ft-times",
                },
            sittingOptions: { name: pref + "sittingOptions", 
                            type: "select", 
                            placeholder: "Sitting options...",
                            options:[
                                {label: "Indoor", value: "Indoor"},
                                {label: "Outdoor", value: "Outdoor"}],
                    },
    
            numOfGuests: {  name: pref + "numOfGuests", 
                            type: "number", 
                            placeholder: "Number of guests...",
                            min: "1",
                            max: "100"
                    },
            occasion:{  name: pref + "occasion",
                        type: "select", 
                        placeholder: 'Occasion...', 
                        options: [
                            { value: 'Birthday', label: 'Birthday' },
                            { value: 'Engagement', label: 'Engagement' },
                            { value: 'Anniversary', label: 'Anniversary' }],
                    },
            specialRequest: {   name: pref + "specialRequest", 
                                placeholder: "Add special request...",
                    },
        },
        validationSchema: Yup.object({
            [prefix]: Yup.object().shape({
                    date: Yup.object().shape({value: Yup.string().required("Choose a booking date")}),
                    startTime: Yup.object().shape({value: Yup.string().required("Choose a time. The field is required in order to pick up a table.")}),
                    table: Yup.string().required("Choose a table"),
                    numOfGuests: Yup.number().min(1,()=>"Wrong number of guest").max(100,()=>"The number of guests should not be more than 100")
                })
                ,
           
         }),
          ftNames: {
            table: {
                infoName: "Table"
            },
            date: { 
                    infoName: "Date",
                },
            startTime: { 
                        infoName: "Time",
                },
            sittingOptions: { 
                            infoName: "Sitting options",
                    },
                
            numOfGuests: {  
                            infoName: "Number of guests",
                    },
            occasion:{  
                        infoName: "Occasion" 
                    },
            specialRequest: {   
                                infoName: "Special Requests"
                    },
          }
    }
};

export default fieldsFindTableForm;
