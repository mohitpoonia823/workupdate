import { render, screen } from '@testing-library/react'
import Greeting from './Greeting'
import userEvent from '@testing-library/user-event';

describe('Greeting component', () => {
    test('renders hello world', () => { 
        //Arrange
        render(<Greeting/>)
        
    
        //Act
    
    
    
        //Asseert
       const helloWrldElement = screen.getByText('hello world');
       expect(helloWrldElement).toBeInTheDocument();
    })

    test('good to see you if the button was not clicked', () => {
        render  (<Greeting/>)
        const outputElement = screen.getByText('good to see you', {exact: false});
       expect(outputElement).toBeInTheDocument();
    });

    test('render "changed!" if the button was  clicked', () => {

        render  (<Greeting/>)

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        const outputElement = screen.getByText('Changed!' );
       expect(outputElement).toBeInTheDocument();
    });
})
