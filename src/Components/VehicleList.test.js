import { render, screen } from '@testing-library/react';
import VehicleList from './VehicleList'

test('renders learn react link', () => {
  render(<VehicleList />);
  const linkElement = screen.getByText(/toyota/i);
  expect(linkElement).toBeInTheDocument();
});