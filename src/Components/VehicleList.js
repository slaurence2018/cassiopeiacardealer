import VehicleDetail from './VehicleDetail'

const VehicleList = (props) => {

  return (
    <div >{
      props.vehicles.map((dataItem) => {
        return (
          <VehicleDetail {...dataItem} />
        );
      })
    }
    </div>
  )

};



export default VehicleList