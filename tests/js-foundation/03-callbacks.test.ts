import { getUserById } from '../../src/js-foundation/03-callbacks';

describe("Callbacks", () => {

  it("getUserById should return an error if user does not exist", (done) => {
    const id = 10;
    getUserById(id, (err, user) => {
      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();
      done();
    });
  }, 10000);

  it('should return john doe', (done) => {
  
    const id = 1;
    getUserById(id, (err, user) => {
      expect(err).toBeUndefined();
      expect(user).toStrictEqual({
        id, 
        name: 'John Doe' 
      });
      done();
    });
  });

});


