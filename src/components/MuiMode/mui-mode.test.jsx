import { screen } from "@testing-library/react";
import { MuiMode } from ".";
import { render } from "../../test-utils";
// testing components wrapped in providers
describe('MUI Mode', () => {
    test('Renders theme correctly', () => {
        render(<MuiMode />);
        const headingElement = screen.getByRole('heading')
        expect(headingElement).toHaveTextContent("dark mode")
    });
    
});
