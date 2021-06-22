import { render, screen } from '@testing-library/react';
import Header from './Header'

test('render the header', () => {
    render(<Header />);

    expect(screen.getByText("CASSIOPEIA CAR DEALER")).toBeInTheDocument()
});
