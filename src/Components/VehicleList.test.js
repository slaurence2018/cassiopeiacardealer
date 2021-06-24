import { render, waitFor, screen } from '@testing-library/react';
import VehicleList from './VehicleList'

test('test vehicleList populated with cars', async () => {
  const car1 = {make:"honda", model:"civic", year:"1990", id:"1", price:"49.95"}
  const car2 = {make:"toyota", model:"prius", year:"2010", id:"2", price:"49.95"}

  jest.spyOn(window, "fetch").mockResolvedValue({
    json: async () => ([car1,car2]),
  });


  let testFilters = {model: "", make: "", fromYear: "", toYear:""}

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


  let testFilters = {model: "", make: "toyota", fromYear: "", toYear: ""}

  render(<VehicleList filters={testFilters}/>);

  await waitFor(() => expect(screen.queryByText("Make: honda")).not.toBeInTheDocument())
  await waitFor(() => expect(screen.queryByText("Model: civic")).not.toBeInTheDocument())
  await waitFor(() => expect(screen.queryByText("Year: 1990")).not.toBeInTheDocument())

  await waitFor(() => expect(screen.getByText("Make: toyota")).toBeInTheDocument())
  await waitFor(() => expect(screen.getByText("Model: prius")).toBeInTheDocument())
  await waitFor(() => expect(screen.getByText("Year: 2010")).toBeInTheDocument())

})


test('test filter works with partial phrases', async () => {
  const car1 = {make:"honda", model:"civic", year:"1990", id:"1", price:"49.95"}
  const car2 = {make:"toyota", model:"prius", year:"2010", id:"2", price:"49.95"}

  jest.spyOn(window, "fetch").mockResolvedValue({
    json: async () => ([car1,car2]),
  });


  let testFilters = {model: "", make: "toy", fromYear: "", toYear: ""}

  render(<VehicleList filters={testFilters}/>);

  await waitFor(() => expect(screen.queryByText("Make: honda")).not.toBeInTheDocument())
  await waitFor(() => expect(screen.queryByText("Model: civic")).not.toBeInTheDocument())
  await waitFor(() => expect(screen.queryByText("Year: 1990")).not.toBeInTheDocument())

  await waitFor(() => expect(screen.getByText("Make: toyota")).toBeInTheDocument())
  await waitFor(() => expect(screen.getByText("Model: prius")).toBeInTheDocument())
  await waitFor(() => expect(screen.getByText("Year: 2010")).toBeInTheDocument())

})

test('test filter works from year', async () => {
  const car1 = {make:"honda", model:"civic", year:"1990", id:"1", price:"49.95"}
  const car2 = {make:"toyota", model:"prius", year:"2010", id:"2", price:"49.95"}

  jest.spyOn(window, "fetch").mockResolvedValue({
    json: async () => ([car1,car2]),
  });


  let testFilters = {model: "", make: "", fromYear: "2000", toYear: ""}

  render(<VehicleList filters={testFilters}/>);

  await waitFor(() => expect(screen.queryByText("Make: honda")).not.toBeInTheDocument())
  await waitFor(() => expect(screen.queryByText("Model: civic")).not.toBeInTheDocument())
  await waitFor(() => expect(screen.queryByText("Year: 1990")).not.toBeInTheDocument())

  await waitFor(() => expect(screen.getByText("Make: toyota")).toBeInTheDocument())
  await waitFor(() => expect(screen.getByText("Model: prius")).toBeInTheDocument())
  await waitFor(() => expect(screen.getByText("Year: 2010")).toBeInTheDocument())

})

test('test filter works to year', async () => {
  const car1 = {make:"honda", model:"civic", year:"1990", id:"1", price:"49.95"}
  const car2 = {make:"toyota", model:"prius", year:"2010", id:"2", price:"49.95"}

  jest.spyOn(window, "fetch").mockResolvedValue({
    json: async () => ([car1,car2]),
  });


  let testFilters = {model: "", make: "", fromYear: "", toYear: "1999"}

  render(<VehicleList filters={testFilters}/>);

  await waitFor(() => expect(screen.getByText("Make: honda")).toBeInTheDocument())
  await waitFor(() => expect(screen.getByText("Model: civic")).toBeInTheDocument())
  await waitFor(() => expect(screen.getByText("Year: 1990")).toBeInTheDocument())

  await waitFor(() => expect(screen.queryByText("Make: toyota")).not.toBeInTheDocument())
  await waitFor(() => expect(screen.queryByText("Model: prius")).not.toBeInTheDocument())
  await waitFor(() => expect(screen.queryByText("Year: 2010")).not.toBeInTheDocument())

})

test('test filter works with from and to year', async () => {
  const car1 = {make:"honda", model:"civic", year:"1990", id:"1", price:"49.95"}
  const car2 = {make:"toyota", model:"prius", year:"2010", id:"2", price:"49.95"}
  const car3 = {make:"ford", model:"escort", year:"2020", id:"3", price:"49.95"}

  jest.spyOn(window, "fetch").mockResolvedValue({
    json: async () => ([car1,car2]),
  });


  let testFilters = {model: "", make: "", fromYear: "2000", toYear: "2015"}

  render(<VehicleList filters={testFilters}/>);

  await waitFor(() => expect(screen.queryByText("Make: honda")).not.toBeInTheDocument())
  await waitFor(() => expect(screen.queryByText("Model: civic")).not.toBeInTheDocument())
  await waitFor(() => expect(screen.queryByText("Year: 1990")).not.toBeInTheDocument())

  await waitFor(() => expect(screen.getByText("Make: toyota")).toBeInTheDocument())
  await waitFor(() => expect(screen.getByText("Model: prius")).toBeInTheDocument())
  await waitFor(() => expect(screen.getByText("Year: 2010")).toBeInTheDocument())

  await waitFor(() => expect(screen.queryByText("Make: ford")).not.toBeInTheDocument())
  await waitFor(() => expect(screen.queryByText("Model: escort")).not.toBeInTheDocument())
  await waitFor(() => expect(screen.queryByText("Year: 2020")).not.toBeInTheDocument())

})
