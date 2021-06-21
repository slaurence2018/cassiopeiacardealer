import { render, screen } from '@testing-library/react';
import VehicleDetail from './VehicleDetail'

test('render a vehicle detail', () => {
  render(<VehicleDetail make={"tesla"}/>);

  expect(screen.getByText("tesla")).toBeInTheDocument()
});
