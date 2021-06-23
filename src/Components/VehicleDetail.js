
const VehicleDetail = (props) => {

  return (
    <div key={props.id} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
      <div> <img src={`/images/car.png`} width={100} height={100} alt="car" /></div>
      <div>
        <h3>{props.make}</h3>
        <p>{props.model}</p>
        <p>{props.year}</p>
      </div>
      <div>
        <button className="buy">Buy</button>
        <p><a href="/">Detail</a></p>
      </div>
    </div>
  )

}
export default VehicleDetail

