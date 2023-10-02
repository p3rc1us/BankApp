import './App.css';
import User1 from './components/User1';

function App() {

  const client1 = {
    name: "John Smith",
    balance: 50000,
    accountNumber: "2594474013447193"
  }

  const client2 = {
    name: "Elon Musk",
    balance: 5000000,
    accountNumber: "4916654547879717"
  }

  return (
    <div className="App">
      <br />
      <User1 user={client1}></User1>
      <User1 user={client2}></User1>
    </div>
    
  );
}

export default App;
