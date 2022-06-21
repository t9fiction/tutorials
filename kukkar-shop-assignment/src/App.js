import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/store';

function App() {
  const { web3, accounts, contract } = useAppSelector((state) => state.reducer)
  return (
    <div className="App">
      <header className="App-header">
      HOME
      </header>
    </div>
  );
}

export default App;
