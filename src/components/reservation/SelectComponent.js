import Select from 'react-select';
import { Field } from 'formik';



const SelectComponent = (props) => {

    const themeColors = (theme) => ({
    ...theme,
    borderRadius: 0,
    colors: {
      ...theme.colors,
      primary: '#EE9972',
    },
  });

const styleOption = {
    control: (styles, state) => ({
        ...styles,
        borderColor: state.isFocused ? '#EE9972' : 'transparent',
        backgroundColor: "#EDEFEE",
        padding: "10px 5px",
        ':hover': {
            backgroundColor: "#FBDABB",
            borderColor: "transparent"
        }
      }),
    placeholder: (styles, state) => ({ ...styles, ...{
        color: state.isDisabled ? '#999' : '#666',
    } }),
    option: (styles, data) => {
                let addStyles = {};
                let addStylesSpec = {};
                if (data.isSelected) {
                    addStylesSpec = {
                        color: "#fff",
                        backgroundColor: "#EE9972",
                        fontWeight: "bold"
                    }
                }
                if(data.children == "Reset") {
                    addStyles = {color: "#a50000", 
                                fontWeight: "bold",
                                ':hover': {
                                    ...styles[':hover'],
                                    backgroundColor: "#a50000",
                                    color: "#fff"}}  
                } else {
                    addStyles = {   
                                ':hover': {
                                    ...styles[':hover'],
                                    backgroundColor: "#FBDABB",
                                    color: '#333',
                                    fontWeight: "normal"
                                    },
                                ':active': {
                                    ...styles[':active'],/*"#f4ce14"*/
                                    color: "#fff",
                                    backgroundColor: "#f4ce14",
                                    fontWeight: "bold",
                                    },
                                
                                }  
                }
                return ({
                    ...styles,
                    ...addStyles,
                    ...addStylesSpec
                })
            }
}



    return(

    <Field name={props.name} >
        { ( {form, field, meta} ) => {

            const handleChange = val => {
                form.setFieldValue(props.name, val);
                if(val) {
                    props.setState && props.setState(val.value);
                    //console.log(val.value);
                } else {
                    props.setState && props.setState(null);
                }
            }

            return(
                    <Select 
                        {...field}
                        theme={themeColors}
                        styles={styleOption}
                        isDisabled={props.options && props.options.length === 0}
                        options={props.options}
                        placeholder={props.placeholder}
                        id={props.id}
                        isClearable
                        onBlur={() => form.setFieldTouched(props.name, true)}
                        onChange={handleChange}
                    />     
            ) 
            }
        }     
    </Field>


    )
};
export default SelectComponent;