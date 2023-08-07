function getDateTimeValueLabels (values, extractAvailableTimes) {
    
    const emptyEl = [];

    if (typeof(values) == "undefined") {
        return emptyEl;
    }

    let valueLabel = [];

    //for (let index = 0; index < values.length; index++) {
        //valueLabel.push({ value: values[index], label: values[index] });
        
    //}

    valueLabel = values.map((v) => { 
        return { value: v, label: v }
    });

    if (valueLabel.length == 0) {
        return emptyEl;
    } else {
        valueLabel.push({ value: 0, label: "Reset" });
    }

    return valueLabel;
}

function extractAvailableTimes (date = null, time = null, sitOpt = null) {

    if (date === '' || date == null) {

        return;
    }

    extractAvailableTimes(date, time, sitOpt);
    
}
