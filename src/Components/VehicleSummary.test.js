import { render, screen } from '@testing-library/react';
import VehicleSummary from './VehicleSummary'

test('render a vehicle detail', () => {
  render(<VehicleSummary carMake={"toyota"} model={"camry"} year={"1990"} id={"1"} />);

  expect(screen.getByText("toyota")).toBeInTheDocument()
  expect(screen.getByText("camry")).toBeInTheDocument()
  expect(screen.getByText("1990")).toBeInTheDocument()
});
