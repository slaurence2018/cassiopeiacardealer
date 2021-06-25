import VehicleSummary from './VehicleSummary'
import { useEffect, useState, useCallback } from 'react'
import {FixedSizeList} from 'react-window'

const VehicleList = (props) => {
  const [data, setData] = useState([])

  useEffect(() => {

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

    const fetchData = async () => {
      const result = await fetch("http://localhost:5000/api/vehicles");
      const json = await result.json()
      let data = json.filter((dataItem) => isDataItemDisplayed(dataItem) === true)
      setData(data);
    };

    fetchData();

  }, [props]);

  const CreateVehicleSummary = useCallback(({index, style}) => {
    const dataItem =  data[index]
      return (
        <div style={style}>
        <VehicleSummary key={dataItem.id} {...dataItem} />
        </div>
      );
  }, [data])

  return (
    <FixedSizeList
      height={500}
      width={500}
      itemSize={220}
      itemCount={data.length}
    >
      { CreateVehicleSummary }
    </FixedSizeList>

  )



};



export default VehicleList