import './App.css';
import VehicleList from './Components/VehicleList'
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import SearchForm from "./Components/SearchForm"
import {useState} from 'react'
function App() {
  const [filters, setFiltersList] = useState({model: "", make: "", year: ""});
  return (
    <div className="App">
      <Header />
      <SearchForm setFiltersList={setFiltersList} filters={filters}/>
      <div>
        <VehicleList filters={filters}/>
      </div>
      <Footer />
    </div>

  );
};

export default App;
