import './App.css';
import User1 from './components/User1';
import clientsData from './clients.json'



function App() {

  const clients = Object.values(clientsData);

return (
  <div className="App">

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
