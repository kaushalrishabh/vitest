import { render, screen } from "@testing-library/react";
import user from '@testing-library/user-event';
import Counter from ".";

describe('Counter', () => {
    test('Renders correctly', () => {
        render(<Counter />);
        const counterElement = screen.getByRole('heading');
        expect(counterElement).toBeInTheDocument();
        const incrementBtn = screen.getByRole('button', {
            name: "Increment"
        })
        expect(incrementBtn).toBeInTheDocument();
    })
    test('Renders counter as 0 successfully', () => {
        render(<Counter />);
        const counterElement = screen.getByRole('heading');
        expect(counterElement).toHaveTextContent('0');
    })
    // user click functionality
    test('Renders count of 1 after clicking increment button', async () => {
        user.setup();
        render(<Counter />);
        const incrementBtnElement = screen.getByRole('button', {
            name: "Increment"
        })
        await user.click(incrementBtnElement)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('1')
    })
    // user double click functionality
    test('Renders count of 2 after clicking increment button twice', async () => {
        user.setup();
        render(<Counter/>);
        const incrementBtnElement = screen.getByRole('button', {
            name: 'Increment'
        });
        await user.dblClick(incrementBtnElement)
        // await user.click(incrementBtnElement)
        const counterElement = screen.getByRole('heading')
        expect(counterElement).toHaveTextContent('2')
    });
    // user input and then click functionality
    test('Renders a count of 10 after clicking set button', async () => {
        user.setup();
        render(<Counter />);
        const inputElement = screen.getByRole('spinbutton');
        await user.type(inputElement, '10')
        expect(inputElement).toHaveValue(10)
        const setElement = screen.getByRole('button',{
            name: 'Set'
        })
        await user.click(setElement)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('10')
    });
    // user focus functionality
    test('Elements are focused in correct order', async () => {
        user.setup();
        render(<Counter />);
        const incrementBtn = screen.getByRole('button', { 
            name: 'Increment'
        })
        const inputElement = screen.getByRole('spinbutton')
        const setBtn = screen.getByRole('button', {
            name: 'Set'
        })
        await user.tab();
        expect(incrementBtn).toHaveFocus();
        await user.tab();
        expect(inputElement).toHaveFocus();
        await user.tab();
        expect(setBtn).toHaveFocus();
    })
    
});
