import './App.css';
import User1 from './components/User1';
import clientsData from './clients.json';
import React, { useState } from 'react';

function App() {

  const clients = Object.values(clientsData);
/////////////////////////////////////////////////////////////
let clientProfile = clients;
const [clientInfo, setClientInfo] = useState(clientProfile);
const [formsVisible, setFormsVisible]  = useState(false);

const initialState = {
  name: "",
  balance: "",
  accountNumber: ""
};

const [formValue, setFormValue] = useState(initialState);

const handleChange = (e) => {
  setFormValue({ ...formValue, [e.target.name]: e.target.value});
};

const handleSubmit = (e) => {
  e.preventDefault();
  const updatedClientInfo = [...clientInfo, formValue]; 
  setClientInfo(updatedClientInfo);
  setFormValue(initialState);
  console.log(updatedClientInfo);
};

const addButtonClick = () => {
  
  setFormsVisible(!formsVisible);
  
};

return (
  <div className="App">
{clients.map((client) => {
        return (
          <User1 clients={client}></User1>  
      )
    }
  )
}

<button id='addClient' onClick={addButtonClick}>Add Client</button>
{formsVisible &&<section className='Forms'>
  <br />
  <h1>Add New Client</h1>
  <form onSubmit={handleSubmit} className='formContainer'>
    <div className='formSection'>
      <label htmlFor='name' >Name:</label><br />
      <input
      name="name"
      onChange={handleChange}
      value={formValue.name}
      className='formInput'
      />
    </div>
    <div className='formSection'>
      <label htmlFor='balance'>Balance:</label><br />
      <input
      name='balance'
      onChange={handleChange}
      value={formValue.balance}
      className='formInput'
      type='number'
      />
    </div>
    <div className='formSection'>
      <label htmlFor='accountNumber'>Account Number:</label><br />
      <input
      name='accountNumber'
      onChange={handleChange}
      value={formValue.accountNumber}
      className='formInput'
      type='number'
      />
      </div>
      <br />
      <button onClick={handleSubmit}className='submitButton'> Submit</button>
    </form>
</section>
}
  
</div>
  );
}

export default App;

/*
,
    "client4": {
      "name": "John Younger",
      "balance": 554212,
      "accountNumber": "0905542756421700"
    }
*/