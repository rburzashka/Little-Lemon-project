 function dateStr(n) {
    var nextDate = new Date(Date.now() + n*86400000);
    return nextDate.toLocaleDateString();
 }
 const fetchedDataTable = [
    {
        date: (()=> {
            return dateStr(0);
        })(),
        tables: [
            { tableId: 1, tableName: 'Aqua', sittingOption: 'outdoor', numberOfSeats: 4, availableTimes: [], 
                src: "/bingImages/Aqua-4-outdoor.jpg"}, //'12.00', '12.30', '13.00', '17.00', '19.00'
            { tableId: 2, tableName: 'Wheat', sittingOption: 'indoor', numberOfSeats: 6, availableTimes: ['10.00', '10.30', '11.00', '14.00', '16.00'],
                src:"/bingImages/wheat-6-indoor.jpg" }, 
            { tableId: 3, tableName: 'Indigo', sittingOption: 'indoor', numberOfSeats: 4, availableTimes: ['11.30', '12.00', '13.30', '18.00', '20.00'],
                src:"/bingImages/Indigo-2-indoor.jpg" }, 
            { tableId: 4, tableName: 'Teal', sittingOption: 'outdoor', numberOfSeats: 4, availableTimes: ['10.30', '11.00', '12.30', '15.00', '17.30'],
                src:"/bingImages/Teal-4-outdoor.jpg" }, 
            { tableId: 5, tableName: 'Green', sittingOption: 'indoor', numberOfSeats: 4, availableTimes: ['10.00', '11.30', '13.00', '16.00', '19.30'],
                src:"/bingImages/green-4-indoor.jpg" }, 
            { tableId: 6, tableName: 'Colorful', sittingOption: 'outdoor', numberOfSeats: 6, availableTimes: ['10.00', '12.30', '13.00', '15.00', '21.00'],
                src:"/bingImages/colorful-5-indoor.jpg" }, 
            { tableId: 7, tableName: 'Brown', sittingOption: 'indoor', numberOfSeats: 3, availableTimes: ['10.30', '11.30', '14.00', '16.30', '18.30'],
                src:"/bingImages/brown-3-indoor.jpg" }, 
            { tableId: 8, tableName: 'Lime', sittingOption: 'outdoor', numberOfSeats: 4, availableTimes: ['11.00', '12.00', '14.30', '17.30', '20.30'],
                src:"/bingImages/Lime-4-outdoor.jpg" }, 
            { tableId: 9, tableName: 'Mustard', sittingOption: 'outdoor', numberOfSeats: 2, availableTimes: ['10.00', '11.00', '13.30', '15.30', '18.00'],
                src:"/bingImages/Mustard-2-outdoor.jpg" }, 
            { tableId: 10, tableName: 'Peach', sittingOption: 'outdoor', numberOfSeats: 2, availableTimes: ['11.30', '12.30', '14.00', '16.00', '19.00'],
                src:"/bingImages/Peach-2-outdoor.jpg" }, 
            { tableId: 11, tableName: 'Maroon', sittingOption: 'indoor', numberOfSeats: 6, availableTimes: ['10.30', '12.00', '13.30', '17.00'],
                src: "/bingImages/Maroon-6-indoor.jpg"}
        ]
    },
    {
        date: (()=> {
            return dateStr(1);
        })(),
        tables: [
            { tableId: 1, tableName: 'Aqua', sittingOption: 'outdoor', numberOfSeats: 4, availableTimes: ['11.00', '11.30', '12.00', '18.00', '20.00'], 
                src: "/bingImages/Aqua-4-outdoor.jpg"},
            { tableId: 2, tableName: 'Wheat', sittingOption: 'indoor', numberOfSeats: 6, availableTimes: ['10.30', '11.30', '14.30', '15.30', '17.00'],
                src:"/bingImages/wheat-6-indoor.jpg"  },
            { tableId: 3, tableName: 'Indigo', sittingOption: 'indoor', numberOfSeats: 4, availableTimes: ['10.00', '12.30', '13.00', '16.00', '19.00'],
                src:"/bingImages/Indigo-2-indoor.jpg"  },
            { tableId: 4, tableName: 'Teal', sittingOption: 'outdoor', numberOfSeats: 4, availableTimes: ['10.00', '10.30', '13.30', '15.00', '18.30'],
                src:"/bingImages/Teal-4-outdoor.jpg"  },
            { tableId: 5, tableName: 'Green', sittingOption: 'indoor', numberOfSeats: 4, availableTimes: ['11.30', '12.00', '14.00', '17.00', '20.30'],
                src:"/bingImages/green-4-indoor.jpg"  },
            { tableId: 6, tableName: 'Colorful', sittingOption: 'outdoor', numberOfSeats: 6, availableTimes: ['10.30', '11.00', '13.00', '15.30', '19.30'],
                src:"/bingImages/colorful-5-indoor.jpg"  },
            { tableId: 7, tableName: 'Brown', sittingOption: 'indoor', numberOfSeats: 3, availableTimes: ['11.00', '12.00', '14.30', '16.00', '18.00'],
                src:"/bingImages/brown-3-indoor.jpg"  },
            { tableId: 8, tableName: 'Lime', sittingOption: 'outdoor', numberOfSeats: 4, availableTimes: ['10.00', '11.30', '13.30', '16.30','21.00'],
                src:"/bingImages/Lime-4-outdoor.jpg" },
            { tableId: 9, tableName: 'Mustard', sittingOption: 'outdoor', numberOfSeats: 2, availableTimes: ['10.30', '12.30', '15.00', '17.30', '19.00'],
                src:"/bingImages/Mustard-2-outdoor.jpg" }, 
            { tableId: 10, tableName: 'Peach', sittingOption: 'outdoor', numberOfSeats: 2, availableTimes: ['11.00', '13.00', '14.00', '16.30', '18.30'],
                src:"/bingImages/Peach-2-outdoor.jpg" }, 
            { tableId: 11, tableName: 'Maroon', sittingOption: 'indoor', numberOfSeats: 6, availableTimes: ['10.00', '11.00', '12.00', '15.00', '20.00'],
                src: "/bingImages/Maroon-6-indoor.jpg"}, ]
    },
    {
        date: (()=> {
            return dateStr(2);
        })(),
        tables: [
            { tableId: 1, tableName: 'Aqua', sittingOption: 'outdoor', numberOfSeats: 4, availableTimes: ['11.00', '11.30', '12.00', '18.00', '20.00'], 
                src: "/bingImages/Aqua-4-outdoor.jpg"},
            { tableId: 2, tableName: 'Wheat', sittingOption: 'indoor', numberOfSeats: 6, availableTimes: ['10.30', '11.30', '14.30', '15.30', '17.00'],
                src:"/bingImages/wheat-6-indoor.jpg"  },
            { tableId: 3, tableName: 'Indigo', sittingOption: 'indoor', numberOfSeats: 4, availableTimes: ['10.00', '12.30', '13.00', '16.00', '19.00'],
                src:"/bingImages/Indigo-2-indoor.jpg"  },
            { tableId: 4, tableName: 'Teal', sittingOption: 'outdoor', numberOfSeats: 4, availableTimes: ['10.00', '10.30', '13.30', '15.00', '18.30'],
                src:"/bingImages/Teal-4-outdoor.jpg"  },
            { tableId: 5, tableName: 'Green', sittingOption: 'indoor', numberOfSeats: 4, availableTimes: ['11.30', '12.00', '14.00', '17.00', '20.30'],
                src:"/bingImages/green-4-indoor.jpg"  },
            { tableId: 6, tableName: 'Colorful', sittingOption: 'outdoor', numberOfSeats: 6, availableTimes: ['10.30', '11.00', '13.00', '15.30', '19.30'],
                src:"/bingImages/colorful-5-indoor.jpg"  },
            { tableId: 7, tableName: 'Brown', sittingOption: 'indoor', numberOfSeats: 3, availableTimes: ['11.00', '12.00', '14.30', '16.00', '18.00'],
                src:"/bingImages/brown-3-indoor.jpg"  },
            { tableId: 8, tableName: 'Lime', sittingOption: 'outdoor', numberOfSeats: 4, availableTimes: ['10.00', '11.30', '13.30', '16.30','21.00'],
                src:"/bingImages/Lime-4-outdoor.jpg"},    
            { tableId: 9, tableName: 'Mustard', sittingOption: 'outdoor', numberOfSeats: 2, availableTimes: ['10.30', '12.30', '15.00', '17.30', '19.00'],
                src:"/bingImages/Mustard-2-outdoor.jpg" }, 
            { tableId: 10, tableName: 'Peach', sittingOption: 'outdoor', numberOfSeats: 2, availableTimes: ['11.00', '13.00', '14.00', '16.30', '18.30'],
                src:"/bingImages/Peach-2-outdoor.jpg" }, 
            { tableId: 11, tableName: 'Maroon', sittingOption: 'indoor', numberOfSeats: 6, availableTimes: ['10.00', '11.00', '12.00', '15.00', '20.00'],
                src: "/bingImages/Maroon-6-indoor.jpg"}, ]
    },
    {
        date: (()=> {
            return dateStr(3);
        })(),
        tables: [
            { tableId: 1, tableName: 'Aqua', sittingOption: 'outdoor', numberOfSeats: 4, availableTimes: ['10.30', '11.00', '13.00', '16.00', '18.00'],
                src: "/bingImages/Aqua-4-outdoor.jpg" }, 
            { tableId: 2, tableName: 'Wheat', sittingOption: 'indoor', numberOfSeats: 6, availableTimes: ['10.00', '12.00', '14.00', '17.00', '19.30'],
                src:"/bingImages/wheat-6-indoor.jpg" }, 
            { tableId: 3, tableName: 'Indigo', sittingOption: 'indoor', numberOfSeats: 4, availableTimes: ['11.30', '12.30', '15.30', '18.30', '20.30'],
                src:"/bingImages/Indigo-2-indoor.jpg" }, 
            { tableId: 4, tableName: 'Teal', sittingOption: 'outdoor', numberOfSeats: 4, availableTimes: ['10.00', '11.30', '13.30', '16.30','21.00'],
                src:"/bingImages/Teal-4-outdoor.jpg"},
            { tableId: 5, tableName: 'Green', sittingOption: 'indoor', numberOfSeats: 4, availableTimes: ['10.30', '11.00', '12.00', '15.00', '19.00'],
                src:"/bingImages/green-4-indoor.jpg" }, 
            { tableId: 6, tableName: 'Colorful', sittingOption: 'outdoor', numberOfSeats: 6, availableTimes: ['11.00', '12.30', '14.30', '17.30', '20.00'],
                src:"/bingImages/colorful-5-indoor.jpg" }, 
            { tableId: 7, tableName: 'Brown', sittingOption: 'indoor', numberOfSeats: 3, availableTimes: ['10.00', '11.00', '13.00', '16.00', '18.30'],
                src:"/bingImages/brown-3-indoor.jpg"}, 
            { tableId: 8, tableName: 'Lime', sittingOption: 'outdoor', numberOfSeats: 4, availableTimes: ['10.30', '12.00', '14.00', '17.00', '19.30'],
                src:"/bingImages/Lime-4-outdoor.jpg" }, 
            { tableId: 9, tableName: 'Mustard', sittingOption: 'outdoor', numberOfSeats: 2, availableTimes: ['11.30', '13.30', '15.30', '18.00'],
                src:"/bingImages/Mustard-2-outdoor.jpg"},
            { tableId: 10, tableName: 'Peach', sittingOption: 'outdoor', numberOfSeats: 2, availableTimes: ['10.00', '12.30', '14.30', '16.30', '19.00'],
                src:"/bingImages/Peach-2-outdoor.jpg" }, 
            { tableId: 11, tableName: 'Maroon', sittingOption: 'indoor', numberOfSeats: 6, availableTimes: ['11.00', '13.00', '15.00', '18.00', '20.30'],
                src: "/bingImages/Maroon-6-indoor.jpg"}
        ]
    },
    {
        date: (()=> {
            return dateStr(4);
        })(),
        tables: []
    },
]

const occasionalMenu = [
    {
        id: 100,
        category: "main-dishes",
        tag: "occasion",
        title: "Octopus with Panzanella salad",
        description: 'Grilled octopus from the waters of Gibraltar, certified "Japan Quality", served with original interpretation of Panzanella salad and slightly spicy sauce of roasted tomatoes (400 g); Allergens: mollusks, lactose, gluten',
        price: "$ 10.00",
        image: "https://th.bing.com/th/id/OIG.R5.4kp9CsB2uKYsm75up?pid=ImgGn"
    },
    {
        id: 101,
        category: "main-dishes",
        tag: "occasion",
        title: "Red Argentine shrimp",
        description: 'Red Argentine shrimp with homemade vegetable chips, zucchini and salicornia and mayonnaise with black garlic',
        price: "$ 11.00",
        image: "https://th.bing.com/th/id/OIG.qrPyFYibkOzXdXTT0qxE?pid=ImgGn"
    },
    {
        id: 50,
        category: "main-dishes",
        tag: "occasion",
        title: "Marinated chicken breast",
        description: 'Marinated breasts on a barbecue of free-range chickens in the farm "Sunny farm", garnished with zucchini, carrots and fresh potatoes (300 g)',
        price: "$ 12.00",
        image: "https://th.bing.com/th/id/OIG.rWO2Pyzn2krslf8gLAs8?pid=ImgGn"
    },
    {
        id: 366,
        category: "main-dishes",
        tag: "occasion",
        title: "Risotto with truffle",
        description: "300; Risotto with fresh Bulgarian truffle; Allergens: lactose (milk), eggs",
        price: "$ 13.00",
        image: "https://th.bing.com/th/id/OIG.Yl6PrnqfQUmBlOj7aoOl?pid=ImgGn"
    },
    {
        id: 720,
        category: "main-dishes",
        tag: "occasion",
        title: "Risotto with shrimp and parsley oil",
        description: "Risotto with homemade parsley butter, fresh red shrimp and hollandaise sauce with pistachios (300 g); Allergens: lactose (milk), eggs, nuts, crustaceans",
        price: "$ 14.00",
        image: "https://th.bing.com/th/id/OIG.jYxSEYs.fSfI2ofPtq3u?pid=ImgGn"
    },
    {
        id: 721,
        category: "main-dishes",
        tag: "ordinary",
        title: "Ordinary 1 Risotto with shrimp and parsley oil",
        description: "Ordinary 1 Risotto with homemade parsley butter, fresh red shrimp and hollandaise sauce with pistachios (300 g); Allergens: lactose (milk), eggs, nuts, crustaceans",
        price: "$ 5.00",
        image: "https://th.bing.com/th/id/OIG.jYxSEYs.fSfI2ofPtq3u?pid=ImgGn"
    },
    {
        id: 722,
        category: "main-dishes",
        tag: "ordinary",
        title: "Ordinary 2 Risotto with shrimp and parsley oil",
        description: "Ordinary 2 Risotto with homemade parsley butter, fresh red shrimp and hollandaise sauce with pistachios (300 g); Allergens: lactose (milk), eggs, nuts, crustaceans",
        price: "$ 6.00",
        image: "https://th.bing.com/th/id/OIG.jYxSEYs.fSfI2ofPtq3u?pid=ImgGn"
    },
    {
        id: 723,
        category: "main-dishes",
        tag: "ordinary",
        title: "Ordinary 3 Risotto with shrimp and parsley oil",
        description: "Ordinary 3 Risotto with homemade parsley butter, fresh red shrimp and hollandaise sauce with pistachios (300 g); Allergens: lactose (milk), eggs, nuts, crustaceans",
        price: "$ 5.50",
        image: "https://th.bing.com/th/id/OIG.jYxSEYs.fSfI2ofPtq3u?pid=ImgGn"
    },
];

function fetchAPI() {
    function funcs() {
 
        return {
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
        }
    }

    return [
        fetchedDataTable,
        occasionalMenu,
]

};

function submitAPI(formData) {
    return "OK";
}

