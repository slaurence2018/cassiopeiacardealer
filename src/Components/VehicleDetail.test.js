import { render, screen } from '@testing-library/react';
import VehicleDetail from './VehicleDetail'

test('render a vehicle detail', () => {
  render(<VehicleDetail carMake={"toyota"} model={"camry"} year={"1990"} id={"1"}/>);

  expect(screen.getByText("toyota")).toBeInTheDocument()
  expect(screen.getByText("camry")).toBeInTheDocument()
  expect(screen.getByText("1990")).toBeInTheDocument()
});
