import './App.css';
import VehicleList from './Components/VehicleList'
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import SearchForm from "./Components/SearchForm"
import { useEffect, useState } from 'react'

function App() {
  /** Fetch Vehicles  */
  const [data, setData] = useState([])
  const [vehicles, setVehicleList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:5000/api/vehicles");
      const json = await result.json()
      setData(json);
      setVehicleList(json);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <section id="search">
            <SearchForm setVehicleList={setVehicleList} data={data} vehicles={vehicles} />
          </section>
          <section id="vehicles">
            <VehicleList vehicles={vehicles} />
          </section>
        </main>
        <Footer />

      </div>
    </>
  );

};

export default App;
