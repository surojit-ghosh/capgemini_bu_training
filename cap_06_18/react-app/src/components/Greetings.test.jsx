import { render, screen } from '@testing-library/react';
import Greetings from './Greetings';

describe('Greetings', () => {
    test('renders Greetings component with prop', () => {
        render(<Greetings name="Varsha" />);
        const headingElement = screen.getByText(/Hello Varsha!/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('renders button in Greetings component', () => {
        render(<Greetings name="Varsha" />);
        const buttonElement = screen.getByText(/Click Me/i);
        expect(buttonElement).toBeInTheDocument();
    });
});
