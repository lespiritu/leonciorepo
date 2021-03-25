import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home, Gallery, Projects, Contact, NotExitPage} from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/gallery" element = {<Gallery/>}/>
        <Route path="/projects" element = {<Projects/>}/>
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="*" element = {<NotExitPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
