import Hero from './Components/Hero';
// import Section from './Components/Section';
import Mission from './Components/Mission';
import Roadmap from './Components/Roadmap';
import Tokonomics from './Components/Tokonomics';
import Team from './Components/Team';

import Navbar from './Components/Navbar';
// import Partners from './Components/Partners';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  return (
    <div className="App">
       <Navbar />

      <Hero />

      <Mission />
      <Roadmap />
      <Tokonomics />
      {/* <Presale /> */}
      <Team />
      {/* <Partners /> */}
      <Toaster />
      
    </div>
  );
}

export default App;
