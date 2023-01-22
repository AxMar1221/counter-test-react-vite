import { getByTestId, render } from "@testing-library/react"
import { TachiApp } from "../src/TachiApp"

describe('Pruebas en TachiApp', () => {

    // test('debe de hacer mach con el snapshot', () => {
    //     const title = 'Hola soy Tachi'
    //     const { container } =  render( <TachiApp title={ title }/>)

    //     expect( container ).toMatchSnapshot();
    // });

    test('debe de mostrar el título en un h1', () => {
        const title = 'Hola soy Tachi'
        const { container, getByText, getByTestId } =  render( <TachiApp title={ title }/>)
        expect( getByText(title) ).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect( h1.innerHTML ).toContain( title );
        expect( getByTestId('test-title').innerHTML ).toContain(title);
    })

    test('debe de mostrar el subtilo enviado por props', () => {
        const title = 'Hola soy Tachi'
        const subTitle = 'Soy un subtitulo'
        const { getAllByText } =  render( 
            <TachiApp 
                title={ title }
                subTitle={ subTitle }
            />)
        // expect( getByText(subTitle) ).toBeTruthy();
        expect( getAllByText(subTitle).length ).toBe(2);
    });
    
});