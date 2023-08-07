import React, {useContext} from "react";
import FormsContext from "./Context";

const NavTabButton = (props) => {
    const {
        tabNum, prefix, currentTab, className = '', onClick, submitTab, children} = props;

        const context = useContext(FormsContext);
        const {isReadyForPayment} =  context;

        let d = !isReadyForPayment() && submitTab;

    return (
        <button className={(currentTab == tabNum ? 
            'current-tab ' : '') + className + (d ? ' disabled' : '')} 
                        onClick={() => onClick(tabNum, prefix)} 
                        type="button" 
                        disabled={d}
                        >
                <span>{children}</span>
        </button>
    )
}

export default NavTabButton;