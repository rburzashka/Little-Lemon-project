import * as Yup from 'yup';

function fieldsOmenu(prefix) {

        const pref = prefix ? (prefix + ".") : "om.";

        return {
                inputFields: {
                    nameFormik: "occasionalMenu",
                    menu: {  name: pref + "occasionalMenu", 
                            type: "checkbox", 
                    },
                },
                validationSchema: Yup.object().shape({
                    [prefix]: Yup.object({})}),
                ftNames: {
                    occasionalMenu: {infoName: 'Menu '},
                  }
            }
};

export default fieldsOmenu;