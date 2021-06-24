import { render, waitFor, screen } from '@testing-library/react';
import VehicleList from './VehicleList'

test('test vehicleList populated with cars', async () => {
  const car1 = {make:"honda", model:"civic", year:"1990", id:"1", price:"49.95"}
  const car2 = {make:"toyota", model:"prius", year:"2010", id:"2", price:"49.95"}

  jest.spyOn(window, "fetch").mockResolvedValue({
    json: async () => ([car1,car2]),
  });


  let testFilters = {model: "", make: "", year: ""}

  render(<VehicleList filters={testFilters}/>);

  await waitFor(() => expect(screen.getByText("Make: honda")).toBeInTheDocument())
  await waitFor(() => expect(screen.getByText("Model: civic")).toBeInTheDocument())
  await waitFor(() => expect(screen.getByText("Year: 1990")).toBeInTheDocument())

  await waitFor(() => expect(screen.getByText("Make: toyota")).toBeInTheDocument())
  await waitFor(() => expect(screen.getByText("Model: prius")).toBeInTheDocument())
  await waitFor(() => expect(screen.getByText("Year: 2010")).toBeInTheDocument())

})

test('test filter works', async () => {
  const car1 = {make:"honda", model:"civic", year:"1990", id:"1", price:"49.95"}
  const car2 = {make:"toyota", model:"prius", year:"2010", id:"2", price:"49.95"}

  jest.spyOn(window, "fetch").mockResolvedValue({
    json: async () => ([car1,car2]),
  });


  let testFilters = {model: "", make: "toyota", year: ""}

  render(<VehicleList filters={testFilters}/>);

  await waitFor(() => expect(screen.queryByText("Make: honda")).not.toBeInTheDocument())
  await waitFor(() => expect(screen.queryByText("Model: civic")).not.toBeInTheDocument())
  await waitFor(() => expect(screen.queryByText("Year: 1990")).not.toBeInTheDocument())

  await waitFor(() => expect(screen.getByText("Make: toyota")).toBeInTheDocument())
  await waitFor(() => expect(screen.getByText("Model: prius")).toBeInTheDocument())
  await waitFor(() => expect(screen.getByText("Year: 2010")).toBeInTheDocument())

})
