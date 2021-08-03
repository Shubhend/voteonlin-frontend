import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/header';
import Indexpage from "./Pages";
import Details from "./Pages/detail";
import Footer from './Component/Footer/footer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Header/>

        <Router>
        <Switch>
            <Route path="/about">
                <Details />
            </Route>
            <Route path="/details" exact>
               <Details/>
            </Route>
            <Route path="/">
                <Indexpage/>
            </Route>
        </Switch>
        </Router>
    <Footer/>




    </div>





  );
}

export default App;
