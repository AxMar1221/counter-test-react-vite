import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await', () => {
  
    // test('getImagen debe de retorner un URL de la imagen', async() => {
    //     const url = await getImagen();
    //     console.log(url)
    //     expect( typeof url ).toBe('string')
    // });

    test('getImagen debe de retorner un error si no hya API-Key', async() => {
        const resp = await getImagen();
        expect( resp ).toBe('No se encontro imagen')
    });
    
})
