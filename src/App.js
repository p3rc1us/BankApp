import './App.css';
import User1 from './components/User1';


function App() {

  const bankEmployee = {
    name: "John Smith",
    age: 45,
    position: "Account Manager",
    accountNumber: "1234  5678"
  }

  const address = "123 4 pamela st.";

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <br />
      <User1 user={bankEmployee} address={address}></User1>
    </div>
  );
}

export default App;
