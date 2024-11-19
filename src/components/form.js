import React from 'react';
import Modal from "./modal";
import {useState} from "react";

const Form = () => {
    const [loanInputs, setLoanInputs] = useState(
        {
            name:"",
            phoneNumber: "",
            age: "",
            isEmployee: false,
            salaryRange: "",
        }
    );

    const [showModal, setShowModal] = useState(false);

    function handleFormSubmit(event){
        event.preventDefault();
        setErrorMessage(null);
        if(loanInputs.age <18 || loanInputs.age >100){
            setErrorMessage("The Age is not allowed")
        }
        else if(loanInputs.phoneNumber.length<10 || loanInputs.phoneNumber.length>12 ){
            setErrorMessage("Phone number Format is Incorrect");
        }
        setShowModal(true);
    }

    const btnIsDisabled =
        loanInputs.name === ""
        || loanInputs.age ===""
        || loanInputs.phoneNumber ==="";

    function handleDivClick(){
        if(showModal){
        setShowModal(false);
        }
    }
    const [errorMessage,setErrorMessage] = useState(null);

    return (
        <div onClick={handleDivClick}>
            <form className="form">
                <h1>Requesting a Loan</h1>
            <hr/>
            <div>
                <label>Name:</label>
                <br/>
                <input value={loanInputs.name} onChange={(event)=>{
                    setLoanInputs({...loanInputs, name:event.target.value})
                }} type="text"/>
            </div>

            <div>
                <label>Phone Number:</label>
                <br/>
                <input type="text" placeholder="059****"
                     value={loanInputs.phoneNumber} onChange={(event)=>{
                    setLoanInputs({...loanInputs, phoneNumber:event.target.value})} }/>
            </div>

            <div>
                <label>Age:</label>
                <br/>
                <input type="text"
                       value={loanInputs.age} onChange={(event)=>{
                    setLoanInputs({...loanInputs, age:event.target.value})}}/>
            </div>

            <div>
                <label>Are You an Employee?</label>
                <br/>
                <input type="checkbox" style={{width:"20px" , height:"20px"}}
                       checked={loanInputs.isEmployee}
                       onChange={(event)=>{
                           setLoanInputs({...loanInputs,isEmployee: event.target.checked})
                       }}
                />
            </div>

            <div>
                <label>Salary</label>
                <br/>
                <select
                        value={loanInputs.salaryRange}
                        onChange={(event)=>{
                            setLoanInputs({...loanInputs,salaryRange: event.target.value})
                        }}>
                    <option selected>less than 500$</option>
                    <option>between 500$ and 2000$</option>
                    <option>above 2000$</option>
                </select>
            </div>

            <button className={btnIsDisabled ? "disabled" : ""}// for styling-color-
                disabled={btnIsDisabled} //or we can put it in function and call it -clickable or not-
                type="submit"
                onClick={handleFormSubmit}
            >
                Submit
            </button>
        </form>

            <Modal  errorMessage={errorMessage} isVisible={showModal}/>
        </div>
    );
};

export default Form;