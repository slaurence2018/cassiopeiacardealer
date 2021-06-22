import './App.css';
import VehicleList from './Components/VehicleList'
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import SearchForm from "./Components/SearchForm"
import {useState} from 'react'
function App() {
  const [filtersList, setFiltersList] = useState(["original"]);
  return (
    <div className="App">
      <Header />
      <SearchForm setFiltersList={setFiltersList} filtersList={filtersList}/>
      <div>
        <VehicleList filtersList={filtersList}/>
      </div>
      <Footer />
    </div>

  );
};

export default App;
