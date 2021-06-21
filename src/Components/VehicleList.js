import VehicleDetail from './VehicleDetail'



const VehicleList = (props) => (
  props.data.map((data) =>  {
    return (
      <VehicleDetail id={data.id} carMake={data.carMake} model={data.model} year={data.year}/>
    );
  })
);

export default VehicleList