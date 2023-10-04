import React, { useState } from 'react';


function User1(props) {

    const [inputVisible, setInputVisible]  = useState(false)

    const [inputVisibleDeposit, setInputVisibleDeposit] = useState(false)

    const [inputValue, setInputValue] = useState('')

    const [inputDeposit, setInputDeposit] = useState('')

    const [inputVisibleEdit, setInputVisibleEdit] = useState(false)

    const [inputEdit, setInputEdit] = useState('')


    const editOnChange = (event) => {
    setInputEdit(event.target.value);
    };

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
            } else {
                alert('Please enter a valid number');
            }
        }
    }

    const keydownEdit  = (event) => {
        const editedName = inputEdit;
        if (event.keyCode === 13 && editedName.trim() !== "" && /^[A-Za-z]+\s[A-Za-z]+$/.test(editedName)) {
            
            props.user.name = editedName

            setInputEdit('')
            setInputVisibleEdit(false)
        }
    }

// disappearing buttons line 75-97 //
    const handleWithdraw = () => {
        console.log("im withdrawing");

        setInputVisible(!inputVisible)
        setInputVisibleDeposit(false)
        setInputVisibleEdit(false)
    }
    const handleDeposit = () => {
        console.log("im depositing");

        setInputVisibleDeposit(!inputVisibleDeposit)
        setInputVisible(false)
        setInputVisibleEdit(false)
    }

    const handleEdit = () => {
        console.log("I'm editing");

        setInputVisibleEdit(!inputVisibleEdit)
        setInputVisible(false)
        setInputVisibleDeposit(false)
    }


    return (
        <fieldset className='userinfo'>
            <h2>Client's Name:{props.user.name}</h2>
            <h2>${props.user.balance}</h2>
            <h2>{props.user.accountNumber}</h2>
            <button type='button' id='addbtn' onClick={handleDeposit}>Deposit</button>{' '}
            <button type='button' id='addbtn' onClick={handleWithdraw}>Withdraw</button>{' '}
            <button type='button' id='addbtn'>Transfer</button>{' '}
            <button type='button' id='addbtn' onClick={handleEdit}>Edit</button>{' '}
            
{/* deposit */}
            {' '}
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

{/* edit name of client */}
            {inputVisibleEdit && (<input
            type="text"
            value={inputEdit}
            onChange={editOnChange}
            onKeyDown={keydownEdit}
            id="inputAmount"
            className={inputVisibleEdit ? 'visible' : 'hidden'}
            placeholder="Confirm Client's Name">

            </input>) }
            
            

        </fieldset>
    )
}

export default User1;

/* checklist
• app should have a page to display all users (can be a table where the name and balance are visible)   ✓✓✓✓✓✓✓✓✓
• app should have a page for creating a user using email and password 
• app should have a page for deposit/withdraw/transfer (can be separate or in one page)                 ✓✓✓✓✓✓✓✓✓
• all design features will depend on YOUR IDEAS.                                                        ✓✓✓✓✓✓✓✓✓
• wrong_arguments (e.g. amount cannot be negative, name cannot start with a number)                     ✓✓✓✓✓✓✓✓✓
• user_already_exists ('Den' == 'den')
• user_does_not_exists ('Den' == 'den')
• not_enough_money                                                                                      ✓✓✓✓✓✓✓✓✓
• sender_does_not_exists
• receiver_does_not_exists
*/