import React, { useState } from 'react';


function User1(props) {

    const [inputVisible, setInputVisible]  = useState(false)

    const [inputValue, setInputValue] = useState('')

    const handelInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            const amountToWithdraw = parseFloat(inputValue);
            if(!isNaN(amountToWithdraw)) {
                const newBalance = props.user.balance - amountToWithdraw;
                props.user.balance = newBalance

                setInputValue('');
                setInputVisible(false)
                }
            
            }
            
        }


    const handleWithdraw = () => {
        console.log("im withdrawing");

        setInputVisible(!inputVisible)
    }

    return (
        <fieldset className='userinfo'>
            <h2>Client's Name:{props.user.name}</h2>
            <h2>${props.user.balance}</h2>
            <h2>{props.user.accountNumber}</h2>
            <button type='button' id='addbtn'>Deposit</button> <button type='button' id='addbtn' onClick={handleWithdraw}>Withdraw</button> <button type='add' id='addbtn'>Edit</button>
            {inputVisible && (<input 
            type="number" 
            value={inputValue}
            onChange={handelInputChange}
            onKeyDown={handleKeyDown}
             id="inputAmount" 
             className={inputVisible ? 'visible' : 'hidden'}>

             </input>)}

            {}
        </fieldset>
    )
}

export default User1;