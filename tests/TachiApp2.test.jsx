import { render, screen } from "@testing-library/react"
import { TachiApp } from "../src/TachiApp"

describe('Pruebas en TachiApp', () => {
    const title = 'hola soy Tachi';
    const subTitle = 'Soy un subtitulo';

    test('debe de hacer mach con el snapshot', () => {
        const { container } = render( <TachiApp title={ title }/>)
        expect( container ).toMatchSnapshot();
    });
    
    test('debe de mostrar el mensaje "Hola soy Tachi"', () => {
        render( <TachiApp title={ title }/>)
        expect( screen.getByText(title) ).toBeTruthy();
    });

    test('debe de mostrar el titulo en un h1', () => {
        render( <TachiApp title={ title }/>)
        expect( screen.getByRole('heading',{ level: 1}).innerHTML ).toContain( title );
    });

    test('debe de mostrat el subtitilo enviado por props', () => {
        render( 
            <TachiApp 
                title={ title }
                subTitle={ subTitle}
            />);
        expect( screen.getAllByText( subTitle ).length ).toBe(2);
    });
    
});