import './App.css';
import {Spinner} from 'react-bootstrap'
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import SearchForm from "./Components/SearchForm"
import {Suspense, useState, lazy} from "react";
const VehicleList =  lazy(() =>  import( './Components/VehicleList'));



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
            <Suspense fallback={<Spinner animation="border" />}>
          <VehicleList filters={filters}/>
          </Suspense>
        </section>
      </main>
      <Footer />
    </div>

  );
};

export default App;
