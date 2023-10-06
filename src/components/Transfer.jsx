import React, { useState } from 'react';
import clientsData from './clients.json'

function Transfer() {

const clients = Object.values(clientsData);

const [receiver, setReceiver] = useState("");

const [transferAmount, setTransferAmount] = useState(0);

const receiverOnChange = (event) => {
  setReceiver(event.target.value);
};

const transferOnChange = (event) => {
    setTransferAmount(event.target.value); 
}

const findReceiver = () => {
  const foundReceiver = clients.find((element) => {
    return element.name === receiver;
  });

  if (foundReceiver !== undefined) {
    foundReceiver.balance = foundReceiver.balance + transferAmount;
  } else {
    alert("Receiver doesn't exist");
  }
};

return (
    <div className="App">
    <br />
    <input
      type="text"
      value={receiver}
      onChange={receiverOnChange}
    />
    <input
      type="text"
      value={transferAmount}
      onChange={transferOnChange}
    />
    <button onClick={findReceiver}>Transfer</button>
    </div>
)
}

export default Transfer