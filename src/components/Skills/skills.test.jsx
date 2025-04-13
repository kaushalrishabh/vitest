import { logRoles, render, screen } from "@testing-library/react";
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
    test("Renders the Login Button", () => {
        render(<Skills skills={skill} />);
        const LoginBtn = screen.getByRole('button', {
            name: 'Login'
        })
        expect(LoginBtn).toBeInTheDocument();
    })
    // QueryBy Role method
    test('Should not render Start Learning button', () => {
        render(<Skills skills={skill} />)
        const startLearningBtn = screen.queryByRole('button', {
            name: 'Start Learning'
        })
        expect(startLearningBtn).not.toBeInTheDocument();
    })
    // findByRole method
    test("Start Learning button is evenually displayed", async () => {
        const view = render(<Skills skills={skill} />);
        // Use to print out all the roles in DOM tree
        // logRoles(view.container)
        const startLearningButton = await screen.findByRole('button', {
            name: "Start Learning"
        },{
            timeout: 2000
        })
        expect(startLearningButton).toBeInTheDocument();
    })


});
