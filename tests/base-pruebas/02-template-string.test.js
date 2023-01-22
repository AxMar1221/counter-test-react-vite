import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Preubas en 02-template-string', () => {
  
    test('getSaludo debe de retornar "Hola Tachi"', ()=> {
        const name = 'Tachi';
        const message = getSaludo( name );

        expect( message ).toBe(`Hola ${name}`);
    })
})
