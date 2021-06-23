import ShoppingCartItem from './ShoppingCartItem'
import { useState, useEffect } from 'react'

const VehicleList = (props) => {
  const [data, setData] = useState([])


  useEffect(() => {
    setData([
      {id:"18116d9e-841c-4a6d-a953-9a025e7efc94",make:"Honda",model:"Civic",year:"2010",image:"https://via.placeholder.com/200",coloR:"Black",price:"49.96",available:true},
      {id:"18116d9e-841c-4a6d-a953-9a025e7efc95",make:"Honda",model:"Civic",year:"2011",image:"https://via.placeholder.com/200",coloR:"Black",price:"49.96",available:true}]
    )
    return
  }, []);

  let handleRemoveItem = (id) => {
    setData(data.filter((dataItem) => id !== dataItem.id))
  }


  return (
    <div className="App" >{
      data.map((dataItem) => {
        return (
          <ShoppingCartItem {...dataItem} removeItem={() => {
              handleRemoveItem(dataItem.id)
          }}/>
        );
      })
    }
    </div>

  )



};



export default VehicleList