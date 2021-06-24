import VehicleSummary from './VehicleSummary'
import { useEffect, useState } from 'react'

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


  const isDataItemDisplayed = (dataItem) => {
    let isItemDisplayed = true

    if (!dataItem.model.toString().toLowerCase().includes(props.filters.model.toString().toLowerCase())
      && props.filters.model.toString() !== "") {
      isItemDisplayed = false
    }
    if (!dataItem.make.toString().toLowerCase().includes(props.filters.make.toString().toLowerCase())
      && props.filters.make.toString() !== "") {
      isItemDisplayed = false
    }
    if (parseInt(dataItem.year) < parseInt(props.filters.fromYear)
      && props.filters.fromYear.toString() !== "") {
      isItemDisplayed = false
    }
    if (parseInt(dataItem.year) > parseInt(props.filters.toYear)
        && props.filters.toYear.toString() !== "") {
      isItemDisplayed = false
    }

    return isItemDisplayed
  }

  return (
    <div className="App" >{
      data.filter((dataItem) => isDataItemDisplayed(dataItem) === true).map(dataItem => {
        return (
          <VehicleSummary key={dataItem.id} {...dataItem} />
        );
      })
    }
    </div>

  )



};



export default VehicleList