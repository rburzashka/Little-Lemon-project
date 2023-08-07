function extractData (fetchedDataTable, occasionalMenu) {

    function dateStr(n) {
        var nextDate = new Date(Date.now() + n*86400000);
        return nextDate.toLocaleDateString();
     }

    const extract = {
 
        initValues: function initValues () {
            var dateTimes = {
                dates:[],
                times:["10.00", "10.30", "11.00", "11.30", "12.00", "12.30", 
                        "13.00", "13.30", "14.00", "14.30", "15.00", "15.30",
                        "16.00", "16.30", "17.00", "17.30", "18.00", "18.30", 
                        "19.00", "19.30", "20.00", "20.30", "21.00", "21.30",]
            }
        
    
            for (let index = 0; index < fetchedDataTable.length; index++) {
                dateTimes.dates.push(dateStr(index))
            }
    
            return dateTimes;
        
        },
    
        extractAvailableTimes: (date = '', sittingOption = '') =>{
            if (date == null || date.length == 0) {
                console.log("Missing date in extractAvailableTimes");
                return [];
            }
            
            let dataTables = fetchedDataTable;
            let dataTable = [];
            let times = [];
        
            if(date !== null) {
                dataTables = dataTables.filter((dtable)=>{
                    return dtable.date === date;
                });
            }
        
            if (sittingOption === null || sittingOption.length == 0) {
                sittingOption = 0;
            } else {
                sittingOption = sittingOption.toLowerCase();
            }
        
            for (dataTable of dataTables) {
                if (sittingOption === 0) {
                    dataTable.tables.forEach((tables) => {
                        times = times.concat(tables.availableTimes);
                    });
                } else {
                    dataTable.tables.forEach((tables) => {
                        if(tables.sittingOption === sittingOption) {
                            times = times.concat(tables.availableTimes);
                        }  
                    });
                }
            }
            
            
            
            if (times === null || times.length == 0) {
                return [];
            }
        
            times = times.sort();
        
            let t = times[0];
        
            times = times.filter(el => {
                const isDiff = (el !== t);
                if(isDiff) {
                    t = el;
                }
                return isDiff;
            });
            return times;
        },
        getTables: (date = "", time = "", sittingOption = '') => {
            if (date == null || date.length == 0) {
                console.log("Missing date in getTables");
                return [];
            }
        
            if (sittingOption === null || sittingOption.length == 0) {
                sittingOption = 0;
            } else {
                sittingOption = sittingOption.toLowerCase();
            }
            
            let tables = [];
        
            const dataTable = fetchedDataTable;
        
            for (let opt of dataTable) {
                if (opt.date === date) {
                    
                    if (time !== null && time.length > 4) {
                        tables = opt.tables.filter((t) => {
        
                            const timeFound = t.availableTimes.find((tTimes) => {
                                return tTimes === time;
                            });
            
                            return typeof(timeFound) != "undefined";
                        });
                    } else {
                        //TODO filter those with not empty arr
                        tables = opt.tables.filter((t) => {
        
                            const timeFound = t.availableTimes.find((tTimes) => {
                                return tTimes.length > 0
                            });
            
                            return timeFound;
                        });
                    }
                    
                    if (sittingOption !== 0) {
                        tables = tables.filter((t) => {
                            return t.sittingOption == sittingOption;
                        });
                    }
        
                    break;
                }
        
            };
        
            return tables;
        },
        getMenu: (isOccasion) => {
            if (isOccasion) {
                return occasionalMenu.filter((item) => {
                    return item.tag == "occasion";
                });
            } else {
                return occasionalMenu;
            }
        }
    };

    return extract;

}

export default extractData;