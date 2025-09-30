import logo from './logo.svg';
import './App.css';
import SimpleDinoGame from './components/game';

function App() {
  return (
    <div>
      <header>
        <div className=" text-red-400 p-4 rounded-lg">
      Tailwind CSS is working! 🎨
    </div>
      </header>
      <SimpleDinoGame/>
    </div>
  );
}

export default App;
