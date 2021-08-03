import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/header';
import Indexpage from "./Pages";
import Footer from './Component/Footer/footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <Indexpage/>
    <Footer/>
    </div>
  );
}

export default App;
