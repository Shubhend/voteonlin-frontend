import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/header';
import Indexpage from "./Pages";
import Details from "./Pages/detail";
import Footer from './Component/Footer/footer';
import About from './Pages/about';
import Search from "./Pages/search";
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
            <Route path="/about" exact>
                <About />
            </Route>
            <Route path="/details" exact>
               <Details/>
            </Route>
            <Route path="/" exact>
                <Indexpage/>
            </Route>
            <Route path="/search" exact>
                <Search/>
            </Route>



        </Switch>
        </Router>
    <Footer/>




    </div>





  );
}

export default App;
