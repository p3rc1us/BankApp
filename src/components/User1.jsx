import React, { useState } from 'react';


function User1(props) {

    const [inputVisible, setInputVisible]  = useState(false)

    const [inputVisibleDeposit, setInputVisibleDeposit] = useState(false)

    const [inputValue, setInputValue] = useState('')

    const [inputDeposit, setInputDeposit] = useState('')

    const inputChangeWithdraw = (event) => {
        setInputValue(event.target.value);
    };

    const inputChangeDeposit =  (event) => {
        setInputDeposit(event.target.value);
    }

const keydownWithdraw = (event) => {
            if (event.keyCode === 13) {
                const amountToWithdraw = parseFloat(inputValue);
                if (!isNaN(amountToWithdraw)) {
                    if (amountToWithdraw > props.user.balance) {
                        alert("You have insufficient balance");
                    } else {
                        const newBalance = props.user.balance - amountToWithdraw;
                        props.user.balance = newBalance;
        
                        setInputValue('');
                        setInputVisible(false);
                    }
                }
            }
        }

const keydownDeposit = (event) => {
    if (event.keyCode === 13){
        const amountToDeposit = parseFloat(inputDeposit);
        if (!isNaN(amountToDeposit) && amountToDeposit > 0) {
            const newBalance = props.user.balance + amountToDeposit;
            props.user.balance = newBalance;

            setInputDeposit('')
            setInputVisibleDeposit(false);
        }
    }
}

    const handleWithdraw = () => {
        console.log("im withdrawing");

        setInputVisible(true)
    }
    const handleDeposit = () => {
        console.log("im depositing");

        setInputVisibleDeposit(true)
    }


    return (
        <fieldset className='userinfo'>
            <h2>Client's Name:{props.user.name}</h2>
            <h2>${props.user.balance}</h2>
            <h2>{props.user.accountNumber}</h2>
            <button type='button' id='addbtn' onClick={handleDeposit}>Deposit</button> <button type='button' id='addbtn' onClick={handleWithdraw}>Withdraw</button> <button type='add' id='addbtn'>Edit</button>
{/* deposit */}
            {inputVisibleDeposit && 
            (<input 
            type="number" 
            value={inputDeposit}
            onChange={inputChangeDeposit}
            onKeyDown={keydownDeposit}
             id="inputAmount" 
             className={inputVisibleDeposit ? 'visible' : 'hidden'}
             placeholder='Deposit Amount'>

             </input>)}

 {/* withdraw */}
            {inputVisible && (<input 
            type="number" 
            value={inputValue}
            onChange={inputChangeWithdraw}
            onKeyDown={keydownWithdraw}
             id="inputAmount" 
             className={inputVisible ? 'visible' : 'hidden'}
             placeholder='Withdraw Amount'>

             </input>)}

            {}
        </fieldset>
    )
}

export default User1;