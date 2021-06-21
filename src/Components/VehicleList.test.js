import { render, screen } from '@testing-library/react';
import VehicleList from './VehicleList'

test('renders learn react link', () => {
  render(<VehicleList />);
  const expected ='toyota'
  const inputData ='{'
  const linkElement = screen.getByText(/vehicle list/i);
  expect(linkElement).toBeInTheDocument();
});