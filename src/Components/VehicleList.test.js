import { render, screen } from '@testing-library/react';
import VehicleList from './VehicleList'

test('renders learn react link', () => {
  const car1 = {carMake:"honda", model:"civic", year:"1990", id:"1"}
  const car2 = {carMake:"toyota", model:"prius", year:"2010", id:"2"}

  let inputData = [car1,car2]
  render(<VehicleList data={inputData}/>);

  expect(screen.getByText("honda")).toBeInTheDocument()
  expect(screen.getByText("civic")).toBeInTheDocument()
  expect(screen.getByText("1990")).toBeInTheDocument()

  expect(screen.getByText("toyota")).toBeInTheDocument()
  expect(screen.getByText("prius")).toBeInTheDocument()
  expect(screen.getByText("2010")).toBeInTheDocument()

});