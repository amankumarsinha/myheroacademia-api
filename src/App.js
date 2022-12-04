
import './App.css';
import Hero from "./components/hero";

function App() {
   const heros = ["1","2"];
  return (
    <div>{
    heros.map((h)=>(
      <Hero />
      ))}</div>
  );
}

export default App;
