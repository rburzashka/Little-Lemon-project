const getInitialValues = (entryData, prefix) => {
    let initialValues = {
        [prefix]: {}
    }
    Object.keys(entryData.inputFields).forEach((key) => {
        if (key.type && key.type == "select") {
            initialValues[prefix][key] = null;
        } else {
            initialValues[prefix][key] = 
                entryData.inputFields[key].value ?  entryData.inputFields[key].value :  ""
        }
        
    });
  return {
    ...initialValues
    }
}

export default getInitialValues;