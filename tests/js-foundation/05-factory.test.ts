import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe("Factory", () => {

  const getUUID = () => '12345';
  const getAge = () => 30;


  it("should return a function", () => {
    const makePerson = buildMakePerson({getUUID: getUUID, getAge: getAge});
    expect(typeof makePerson).toBe('function');
  });

  it("should return a person", () => {
    const makePerson = buildMakePerson({getUUID: getUUID, getAge: getAge});
    const person = makePerson({name:'John Doe', birthdate:'1995-10-22'});

    expect(person).toEqual({
      id: '12345',
      name: 'John Doe',
      birthdate: '1995-10-22',
      age: 30
    });

  });

});

