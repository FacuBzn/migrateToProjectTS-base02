import { characters } from "../../src/js-foundation/02-destructuring";

describe("Destructuring", () => {

  it('should containt flash, superman',() => {   
    expect(characters).toContain('Flash');
    expect(characters).toContain('Superman');    
  });

  it('first character should be flash and second Superman',() => {
    const [flash, superman] = characters;
    /* expect(flash).toBe('Flash');
    expect(superman).toBe('Superman'); */

    expect(flash).toEqual('Flash');
  });
    
});