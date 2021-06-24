import { render, screen } from '@testing-library/react';
import VehicleSummary from './VehicleSummary'

test('render a vehicle detail', () => {
  render(<VehicleSummary make={"toyota"} model={"camry"} fromYear={"1990"} id={"1"} />);

  expect(screen.getByText("Make: toyota")).toBeInTheDocument()
  expect(screen.getByText("Model: camry")).toBeInTheDocument()
  expect(screen.getByText("From Year: 1990")).toBeInTheDocument()
});
