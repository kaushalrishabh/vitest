import { render, screen } from "@testing-library/react";
import Guest from ".";

test('Should Return Hello Guest if no name is passed', () => {
    render(<Guest/>)
    const textElement = screen.getByText('Hello Guest');
    expect(textElement).toBeInTheDocument()
});

// Prop name example
test('Should Return Hello Name if name is passed', () => {
    render(<Guest name="John" />)
    const textElement = screen.getByText('Hello John');
    expect(textElement).toBeInTheDocument()
});
