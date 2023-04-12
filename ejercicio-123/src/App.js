import './App.css';
import ContactosList from './components/container/ContactosList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Users List</h1>
        <ContactosList />
      </header>
    </div>
  );
}

export default App;
