import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';


function App() {
  return (
    <div>
      <header>
        <div className=" text-red-400 p-4 rounded-lg">
      Tailwind CSS is working! 🎨
    </div>
      </header>
      <div>
        <Counter/>
      </div>
    </div>
  );
}

export default App;
