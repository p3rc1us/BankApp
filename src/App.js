import './App.css';
import User1 from './components/User1';
import clientsData from './clients.json'

function App() {
    return (
    <div className="App">
      <br />
      <User1 clients={clientsData.client1}></User1>
      <User1 clients={clientsData.client2}></User1>
    </div>
    
  );
}

export default App;
