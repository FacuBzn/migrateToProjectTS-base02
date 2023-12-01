import { getAge } from "../../src/plugins/get-age.plugin";

describe("getAge", () => {

  it("should return 0 if birthdate is today", () => {
    const birthdate = new Date().toISOString().split("T")[0];
    expect(getAge(birthdate)).toEqual(0);
  });

  it("should return the age of a person", () => {
    const birthdate = '1985-10-21';
    const age = getAge(birthdate);

    expect( typeof age ).toBe('number')
  });

  it("should return current age", () => {
    const birthdate = '1985-10-21';
    const age = getAge(birthdate);
    const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
    expect( age ).toBe( calculatedAge );
  });
  
  it("should return 0 if birthdate is in the future", () => {
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);
    const birthdate = '1995-10-15';
    const age = getAge(birthdate);
    expect( age ).toBe( 0 );
  });
  



});