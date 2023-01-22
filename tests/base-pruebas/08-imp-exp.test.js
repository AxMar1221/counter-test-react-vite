import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {

    test('hetHeroeById debe de retornar un héroe por ID', () => {

        const id = 1;
        const hero = getHeroeById( id );
        console.log( hero )

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    });

    test('getHeroeById debe retornar undefine si no existe', () => {

        const id = 10;
        const hero = getHeroeById( id );
        console.log( hero )

        expect( hero ).toBeFalsy();
    });

    test('getHeroesByOwner debe retornar los heroes de DC', () => {

        const owner = 'DC'
        const heroe = getHeroesByOwner( owner);
        console.log( heroe )

        expect( heroe.length ).toBe( 3 );
        expect( heroe ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);

        expect( heroe ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ))
    });
    
    test('getHeroeById debe retornar los heroes de Marvel', () => {

        const owner = 'Marvel'
        const heroe = getHeroesByOwner( owner )
        console.log(heroe)
        expect( heroe.length ).toBe( 2 );
        expect( heroe ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ))

    });
    
})
