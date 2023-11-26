import { getPokemonById } from "../../src/js-foundation/06-promises";

describe("Promise", () => {

  it("should return a pokemon", async () => { 
    const id = 1;   
    const pokemonName = await getPokemonById(id);
    expect( pokemonName ).toBe( 'bulbasaur' ); 
    });

  it("should return an error if pokemon does not exist", async () => {
    const pokemonId = 100000;

    try {
      await getPokemonById(pokemonId);
      expect( true ).toBeFalsy();

    } catch (error) {
      if (error instanceof Error){
        expect( error.message ).toBe(`Pokemon ${pokemonId} no existe`);
      } else {
        fail('Se esperaba un error de tipo Error');
      }
    }         
  });

});





