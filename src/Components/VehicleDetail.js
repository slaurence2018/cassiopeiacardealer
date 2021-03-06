import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
const VehicleDetail = (props) => {

    return (
        <Container >
            <Card border="secondary">
                <Card.Header style={{ color: '#1e81b0', fontWeight: 'bold', fontSize: 18 }}>${props.price}</Card.Header>
                <div key={props.id} style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 10, padding: 5, }}>
                    <div>
                        <div >
                            <img src={`/images/car.png`} width={100} height={100} alt="car" />
                        </div>
                        <div>
                            <button className="buy">Contact</button>
                        </div>
                    </div>
                    <div align={"left"} >
                        <p>Make: {props.make}</p>
                        <p>Model: {props.model}</p>
                        <p>Year: {props.year}</p>
                        <p>Color: {props.color}</p>
                    </div>

                </div>

            </Card>
        </Container>
    )


}

export default VehicleDetail