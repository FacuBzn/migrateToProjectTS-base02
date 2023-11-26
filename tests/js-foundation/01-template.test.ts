import { emailTemplate } from "../../src/js-foundation/01-template";

describe('Email Template', () => {

  // test 01
  it('should contain a greeting', () => {
    expect(emailTemplate).toContain('Hi, ');
  });
  // test 02
  it('should contain a {{name}} and {{orderId}}', () => {
    expect(emailTemplate).toMatch(/{{name}}/);
    expect(emailTemplate).toMatch(/{{orderId}}/);

    expect(emailTemplate).toContain('{{name}}');
    expect(emailTemplate).toContain('{{orderId}}');
  });

});

