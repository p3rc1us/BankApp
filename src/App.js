import './App.css';
import User1 from './components/User1';
import clientsData from './clients.json'
// import { useState } from 'react';


function App() {

  const clients = Object.values(clientsData);

// const [receiver, setReceiver] = useState("");
// const [transferAmount, setTransferAmount] = useState(0);

// const receiverOnChange = (event) => {
//   setReceiver(event.target.value);
// };

// const findReceiver = () => {
//   const foundReceiver = clients.find((element) => {
//     return element.name === receiver;
//   });

//   if (foundReceiver !== undefined) {
//     foundReceiver.balance = foundReceiver.balance + transferAmount;
//   } else {
//     alert("Receiver doesn't exist");
//   }
// };

return (
  <div className="App">
    {/* <br />
    <input
      type="text"
      value={receiver}
      onChange={receiverOnChange}
    />
    <input
      type="text"
      value={transferAmount}
      onChange={receiverOnChange}
    />
    <button onClick={findReceiver}>Transfer</button> */}


{clients.map((client) => {
        return (
          <User1 clients={client}></User1>
          
          )
        }
      )
    }


    </div>   
  );
}

export default App;
