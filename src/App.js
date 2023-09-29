import './App.css';
import User1 from './components/User1';


function App() {

  const client1 = {
    name: "John Smith",
    balance: 50000,
    accountNumber: "1234 5678"
  }

  return (
    <div className="App">
      <br />
      <User1 user={client1}></User1>
    </div>
  );
}

export default App;
