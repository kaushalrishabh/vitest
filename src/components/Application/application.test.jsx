import { render, screen } from "@testing-library/react";
import Application from "./index";

describe('Application', () => {
   test('Renders correctly', () => {
        render(<Application />);
        // Form components testing example
        const pageHeading = screen.getByRole('heading', {
            level: 1
        });
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole('heading', {
            level: 2
        });
        expect(sectionHeading).toBeInTheDocument();

        const paraElement = screen.getByText('All Fields are Mandatory');
        expect(paraElement).toBeInTheDocument();

        const closeElement = screen.getByTitle('close');
        expect(closeElement).toBeInTheDocument();

        const imgElement = screen.getByAltText('a person with a laptop');
        expect(imgElement).toBeInTheDocument();

        const testElement = screen.getByTestId('custom-element');
        expect(testElement).toBeInTheDocument();

        const nameElement = screen.getByRole('textbox', {
            name: 'Name'
        });
        expect(nameElement).toBeInTheDocument();

        const nameElement2 = screen.getByLabelText('Name', {
            selector: 'input'
        });
        expect(nameElement2).toBeInTheDocument();

        const nameElement3 = screen.getByPlaceholderText('Fullname');
        expect(nameElement3).toBeInTheDocument();

        const nameElement4 = screen.getByDisplayValue('John');
        expect(nameElement4).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', {
            name: 'Bio'
        });
        expect(bioElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole('combobox')
        expect(jobLocationElement).toBeInTheDocument();

        const termElement = screen.getByRole('checkbox')
        expect(termElement).toBeInTheDocument();

        const submitBtnElement = screen.getByRole('button')
        expect(submitBtnElement).toBeInTheDocument();

        const termsElement = screen.getByLabelText('I agree to the terms and conditions')
        expect(termsElement).toBeInTheDocument();
   });

});
