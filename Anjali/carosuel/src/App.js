import logo from './logo.svg';
import './App.css';
import ImageCarousel from './components/ImageCarousel';

function App() {
  return (
    <div>
      <header>
        <div className=" text-red-400 p-4 rounded-lg">
      Tailwind CSS is working now
    </div>
      </header>
      <div>
        <ImageCarousel/>
      </div>
    </div>
  );
}

export default App;
