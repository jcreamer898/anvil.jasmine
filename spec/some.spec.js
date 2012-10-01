describe("A suite", function() {
    it("contains spec with an expectation", function() {
        var add = function( x, y ) {
            return x + y;
        };
        expect( true ).toBe( true );
        expect( add( 2,2 ) ).toBe( 4 );
    });
});