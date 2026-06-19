import {render, screen, fireEvent} from '@testing-library/react';
import Counter from './Counter';

test('Counter increments when button is clicked', () => {
    render(<Counter />);
    const button = screen.getByText('Increment');
    fireEvent.click(button);
    const counter = screen.getByText('Counter: 1');
    expect(counter).toBeInTheDocument();
    fireEvent.click(button);
    const counterAfterSecondClick = screen.getByText('Counter: 2');
    expect(counterAfterSecondClick).toBeInTheDocument();
});
