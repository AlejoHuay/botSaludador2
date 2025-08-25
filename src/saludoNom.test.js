import saludar from "./saludoNom.js";

describe("saludoNom", () => {
  it("debería saludar por nombre", () => {
    expect(saludar("Alejo")).toBe("hola Alejo");
  });
});