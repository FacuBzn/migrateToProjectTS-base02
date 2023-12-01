import { getUUID } from "../../src/plugins/get-id.plugin";

describe("getUUID", () => {

  it("should return a uuid", () => {
    const uuid = getUUID();
    expect( typeof uuid ).toBe('string')
    expect( uuid ).toMatch(/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/)
    expect( uuid ).toHaveLength(36)
  });





});

