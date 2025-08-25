import saludar from "./saludoSimple.js";

describe("saludoSimple", () => {
  it("debería retornar 'hola'", () => {
    expect(saludar()).toBe("hola");
  });
});
