import './App.css';
import VehicleList from './Components/VehicleList'
import carData from './carData'
import Footer from "./Components/Footer"
import Header from "./Components/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <VehicleList data={carData} />
      </div>
      <Footer />
    </div>

  );
};

export default App;
