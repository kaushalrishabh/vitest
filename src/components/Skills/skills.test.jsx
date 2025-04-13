import { render, screen } from "@testing-library/react";
import Skills from ".";

describe('Skills', () => {
    const skill = ['HTML', 'CSS', 'Javascript'];

    test('Renders Correctly', () => {
        render(<Skills skills={skill} />)
        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument();
    })
    // getAllByRole example
    test('Renders a list of skills', () =>{
        render(<Skills skills={skill} />);
        const listItemElements = screen.getAllByRole('listitem')
        expect(listItemElements).toHaveLength(skill.length)
    })

});
