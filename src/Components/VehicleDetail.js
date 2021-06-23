import Card  from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'


const VehicleDetail = (props) => {

  return (
    <Container >
    <Card border="secondary">
      <Card.Header style={{ color: '#1e81b0', fontWeight: 'bold', fontSize: 18}}>${props.price}</Card.Header>
      <div key={props.id} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 10, padding: 5, }}>
        <div >
          <img src={`/images/car.png`} width={100} height={100} alt="car" />
        </div>
        <div align={"left"} >
          <p>Make: {props.make}</p>
          <p>Model: {props.model}</p>
          <p>Year: {props.year}</p>
        </div>
        <div>
          <button className="buy">Buy</button>
          <p><a href="/">Detail</a></p>
        </div>
      </div>

    </Card>
    </Container>
  )

}
export default VehicleDetail