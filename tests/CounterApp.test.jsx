import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en componente CounterApp', () => {

    const valueInitial = 21;

    test('debeb de hacer mach con el snapshot', () => {
      const { container } = render( <CounterApp value={ valueInitial }/>)
      expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar el valor unicial de 12 en CounterApp', () => {
      render( <CounterApp value={ 12 } />);
      expect( screen.getByText(12) ).toBeTruthy();
    });

    test('debe de incrementar con el boton +1', () => {
        render( <CounterApp value={ valueInitial } />);
        fireEvent.click( screen.getByText('+1'))
        expect( screen.getByText('22')).toBeTruthy();
    });
    test('debe de decrementar con el boton -1', () => {
        render( <CounterApp value={ valueInitial } />);
        fireEvent.click( screen.getByText('-1'))
        expect( screen.getByText('20')).toBeTruthy();
    });
    test('debeb de funcionar el reset', () => {
        render( <CounterApp value={ 12 } />);
        fireEvent.click( screen.getByText('-1'))
        fireEvent.click( screen.getByText('+1'))
        fireEvent.click( screen.getByText('-1'))
        // fireEvent.click( screen.getByText('Reset'))
        fireEvent.click( screen.getByRole('button', {name:'btn-reset'}))
        expect( screen.getByText( 12 )).toBeTruthy();
    })
    
})
