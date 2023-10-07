import React, { useState } from 'react';
// import Transfer from './Transfer';
import clientsData from '../clients.json'

function User1(props) {
/* these are the input visibilities */
    const clients = Object.values(clientsData);

    const [inputVisible, setInputVisible]  = useState(false)

    const [inputVisibleDeposit, setInputVisibleDeposit] = useState(false)
    
    const [inputVisibleEdit, setInputVisibleEdit] = useState(false)

/* changing the values from what we input */

    const [inputValue, setInputValue] = useState('')

    const [inputDeposit, setInputDeposit] = useState('')

    const [receiver, setReceiver] = useState("");

    const [inputEdit, setInputEdit] = useState('')
    
    const [transferAmount, setTransferAmount] = useState('');

    const [balanceUpdate, setbalanceUpdate] = useState('');

    





/* ----------------------------- transfer -------------------*/


    // const [recipientName, setRecipientName] = useState('')
    // const [transferAmount, setTransferAmount] = useState(0)

    // const handleTransfer = () => {
    //     if (!recipientName || transferAmount <= 0) {
    //       alert("Invalid Input");
    //       return;
    //     }
    
    //     let sender, recipient;

    //     // Access the client data from props.clients
    //     if (props.clients.name === "John Smith") {
    //         sender = props.clients;
    //         recipient = props.client2; // Access client2 from props
    //     }
    //     if (transferAmount > recipient.balance) {
    //       alert('Insufficient balance for transfer');
    //       return;
    //     }
    
    //     // Calculate new balances and update them as needed
    //     const senderBalanceAfterTransfer = props.clients.balance - transferAmount;
    //     const recipientBalanceAfterTransfer = recipient.balance + transferAmount;

    //     props.clients.balance = senderBalanceAfterTransfer;
    //     recipient.balance = recipientBalanceAfterTransfer;
    //     // Update balances and re-render components
    //     // Reset input fields
    //     setRecipientName('');
    //     setTransferAmount(0);
    //   }
     // const inputChangeTransfer = (event) => {
    //     setRecipientName(event.target.value)
    // }




/* to connect what we input to the setState */
    const editOnChange = (event) => {
        setInputEdit(event.target.value);
    };

    const inputChangeWithdraw = (event) => {
        setInputValue(event.target.value);
    };

    const inputChangeDeposit =  (event) => {
        setInputDeposit(event.target.value);
    };

    const receiverOnChange = (event) => {
        setReceiver(event.target.value);
    };
      
    const transferOnChange = (event) => {
          setTransferAmount(event.target.value); 
    };

   

/* keydowns */
    const keydownWithdraw = (event) => {
        if (event.keyCode === 13) {
            const amountToWithdraw = parseFloat(inputValue);
                if (!isNaN(amountToWithdraw)) {
                    if (amountToWithdraw > props.clients.balance) {
                        alert("You have insufficient balance");
                        } else {
                            const newBalance = props.clients.balance - amountToWithdraw;
                            props.clients.balance = newBalance;
            
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
                const newBalance = props.clients.balance + amountToDeposit;
                props.clients.balance = newBalance;

                setInputDeposit('')
                setInputVisibleDeposit(false);
            } else {
                alert('Please enter a valid number');
            }
        }
    }

    const findReceiver = () => {
        const foundReceiver = clients.find((element) => {
          return element.name === receiver;
        });
      
        if (Number(transferAmount) > props.clients.balance) {
        //   const newBalance = props.clients.balance - Number(transferAmount);
          alert(`Insufficient funds in your account`);
        }else if(foundReceiver === undefined){
          alert("Receiver doesn't exist");


        } else {
            
            foundReceiver.balance = foundReceiver.balance + Number(transferAmount);
          props.clients.balance = props.clients.balance - Number(transferAmount);
          setTransferAmount('');
          setReceiver('');
          setbalanceUpdate(balanceUpdate);
          
          
          console.log(`deducted balance is ${props.clients.balance}. Added ${Number(transferAmount)} to ${foundReceiver.name}, ${foundReceiver.balance} `)
        
        }
        
      };



    const keydownEdit  = (event) => {
        const editedName = inputEdit;
        if (event.keyCode === 13 && editedName.trim() !== "" && /^[A-Za-z]+\s[A-Za-z]+$/.test(editedName)) {
            
            props.clients.name = editedName

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

    const handleButtonClick = () => {
        // Call both functions here
        console.log("I'm transferring");
        setbalanceUpdate(props.clients.balance);
        
      };


    return (
        <fieldset className='userinfo'>
            <h2>Client's Name:{props.clients.name}</h2>
            <h2>${props.clients.balance}</h2>
            <h2>{props.clients.accountNumber}</h2>
            <button type='button' id='addbtn' onClick={handleDeposit}>Deposit</button>{' '}
            <button type='button' id='addbtn' onClick={handleWithdraw}>Withdraw</button>{' '}
            {/* <button type='button' id='addbtn' onClick={findReceiver}>Transfer</button>{' '} */}
            <button type='button' id='addbtn' onClick={handleEdit}>Edit</button>{' '}
            <button type='button' id='addbtn' onClick={handleButtonClick}>Refresh</button>{' '}
            
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

{/* Transfer */}

            {/* <input
            type="text"
            placeholder="Recipient's Name"
            value={recipientName}
            onChange={inputChangeTransfer}
            ></input>
            
            <input
            type="number"
            value={transferAmount}
            onChange={(e) => setTransferAmount(parseInt(e.target.value))}
            ></input> */}


{/*---------------------------------Transfer------------------------------------ */}
<br />
<input
    id="inputAmount"
      type="text"
      value={receiver}
      onChange={receiverOnChange}
    />
    <input
    id="inputAmount"
      type="text"
      value={transferAmount}
      onChange={transferOnChange}
    />
    <button type='button' id='addbtn' onClick={findReceiver}>Transfer</button>






            
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

            {/* <button onClick={handleTransfer}>Transfer</button> */}
            {/* <Transfer></Transfer> */}

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