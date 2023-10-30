import { Navbar } from './Components/Navbar/Navbar';
import './App.css';
import ReactDom from "react-dom";
import {
  BrowserRouter,
  Route,
  Link
} from "react-browser-router";
import { Router } from 'react-router';


function App() {
  return (
    <div className="App">
      <BrowserRouter />
      <Navbar />
      <Router />
      <Route path="/" component={Home}/>
      <Route path="./" component={Shop}/>
      <Route path="/" component={Mens}/>
      <Route path="/" component={Women}/>


    </div>
  );
}

export default App;
