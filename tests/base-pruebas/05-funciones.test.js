import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";


describe('Pruebas en 05-funciones', () => {

    test('getUser debe de retornar un objeto', () => {

        const testUser = {
            uid: 'A&M2112',
            username: 'Ax&Mar_21_12'
        };

        const user = getUser();
        console.log(user)

        expect( testUser ).toEqual( user );
    })

    test('getUsuarioActivo debe de retornar un bjeto', () => {
      const name = 'Tachi';

      const userActivo = getUsuarioActivo( name );
      console.log(userActivo)

      expect( userActivo ).toStrictEqual({
        uid: 'A&M2112',
        username: name
      });
    })
    
  
})










