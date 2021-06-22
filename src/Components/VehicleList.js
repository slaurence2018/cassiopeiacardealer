import VehicleDetail from './VehicleDetail'
import { useEffect, useState } from 'react'
//import api from '../api'
//import utils from '../utils'

const VehicleList = (props) => {
  const [data, setData] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:5000/api/vehicles");
      const json = await result.json()
      setData(json);
    };

    fetchData();

  }, []);

  return (

    <div className="App">{
      data.map((dataItem) => {
        return (
          <VehicleDetail {...dataItem} />
        );
      })
    }
    </div>

  )



};



export default VehicleList