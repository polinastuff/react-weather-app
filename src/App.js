import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
       < Weather defaultCity="Berlin"/> 
      <footer>
        <a
          href="https://github.com/polinastuff/react-weather-app"
          target="_blank" rel="noreferrer"
          >Open-source code</a
        >
         {" "}by Polina Domnina
      </footer>
      </div>
    </div>
  );}


