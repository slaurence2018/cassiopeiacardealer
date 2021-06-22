import { render, screen } from '@testing-library/react';
import Footer from './Footer'

test('render the header', () => {
    render(<Footer />);

    expect(screen.getByText("Location | Contact")).toBeInTheDocument()
    expect(screen.getByText("Cassiopeia Car Dealer 2020")).toBeInTheDocument()
});