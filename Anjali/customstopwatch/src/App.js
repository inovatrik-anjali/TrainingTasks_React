import logo from './logo.svg';
import './App.css';
import Stopwatch from './component/Stopwatch';

function App() {
  return (
    <div>
      <header>
        <div className=" text-red-400 p-4 rounded-lg">
      Tailwind CSS is working! 🎨
    </div>
      </header>
      <div>
        <Stopwatch/>
      </div>
    </div>
  );
}

export default App;
