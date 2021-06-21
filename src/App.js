import './App.css';
import VehicleList from './Components/VehicleList'
import carData from './carData'

function App() {
  return (
    <div className="App">
      <div>
        <VehicleList data={carData} />
      </div>
    </div>
  );
};

export default App;
