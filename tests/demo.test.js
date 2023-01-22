describe('PRuebas en >DemoComponent/>', () => {
    
    test('Esta prueba no debe de fallar', ()=> {
        
        // inicialización
        const message1 = 'Hola Tachi!!@œ'
        
        // estímulo
        const message2 = message1.trim();
        
        // Observar el comportamiento... esperado
        expect( message1 ).toBe( message2 );
    })
})