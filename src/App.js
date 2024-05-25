import logo from './logo.svg';
import './App.css';

function App() {

  const name = 'Teboho';
  const handleNameChange = () =>{
    const names = ['Bob', 'Kevin','Dave'];
    const int = Math.floor(Math.random() * names.length);

    return names[int];
  }
    

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          hello {handleNameChange()}!
        </p>


       
      </header>
    </div>
  );
}

export default App;
