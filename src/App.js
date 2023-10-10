import './App.css';
import User1 from './components/User1';
import clientsData from './clients.json';
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import Calendar from 'react-calendar';

import { GlobalProvider } from './context/GlobalState';

function App() {

  const [selectedDate, setSelectedDate] = useState(new Date());

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
{/*add budgetapp down here*/}
<div className="budget-container">
  <GlobalProvider>
    <Header />
    <div className="container">
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </div>
  </GlobalProvider>
</div>

</div>



  );
}

export default App;




