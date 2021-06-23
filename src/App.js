import './App.css';
import VehicleList from './Components/VehicleList'
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import SearchForm from "./Components/SearchForm"

import {useState} from 'react'
function App() {
  const [filters, setFiltersList] = useState({model: "", make: "", year: ""});
  return (
    <div className="content" >
      <Header />
      <main>
        <section id="search">
          <SearchForm setFiltersList={setFiltersList} filters={filters}/>
        </section>
        <section id="vehicles" >
          <VehicleList filters={filters}/>
        </section>
      </main>
      <Footer />
    </div>

  );
};

export default App;
