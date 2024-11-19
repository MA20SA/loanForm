import React from 'react';

const Modal = ({isVisible, errorMessage=null}) => {
    if(isVisible)//to make modal visible or not we use props
    {
        return (
            <div id="modal">
                <div id="modal-content">
                    <h2 style={{color : errorMessage ? "red" : "green"}}>
                        {errorMessage != null ?
                        errorMessage :
                        "The Form Has Been Submitted Successfully" }
                    </h2>
                </div>
            </div>
        );
    }
    else{
        return (<></>);
    }
};

export default Modal;