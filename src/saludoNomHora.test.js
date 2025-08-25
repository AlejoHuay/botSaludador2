import saludar from "./saludoNomHora.js";

describe("saludoNomHora", () => {
  beforeAll(() => { //beforeAll y afterAll → solo una vez para toda la suite (describe).
    jest.useFakeTimers(); // A partir de ahora no uses el reloj real del sistema, usa un reloj simulado controlado por Jest.
  });
  afterAll(() => {
    jest.useRealTimers(); // Al final de la suite de pruebas deja de simular, usa el reloj real otra vez.
  });

  it("debería saludar en la mañana (Buenos días)", () => {
    jest.setSystemTime(new Date("2025-01-01T09:00:00")); // Haz como si la fecha actual fuera tal fecha y tal hora 09:00, Funciona solo en modo fake timers.
    expect(saludar("Alejo")).toBe("Buenos dias, Alejo");
  });

  it("debería saludar en la tarde (Buenas tardes)", () => {
    jest.setSystemTime(new Date("2025-01-01T15:00:00")); // 15:00
    expect(saludar("Alejo")).toBe("Buenas tardes, Alejo");
  });

  it("debería saludar en la noche (Buenas noches)", () => {
    jest.setSystemTime(new Date("2025-01-01T21:00:00")); // 21:00
    
    //toBe -> más estricto, asegura que la cadena sea exactamente lo que esperas.
    expect(saludar("Alejo")).toBe("Buenas noches, Alejo");

    //toContain -> más flexible, asegura solo que esté la parte importante. Con const si pensamos hacer varios .toContain 
    //const out = saludar("Alejo");
    //expect(out).toContain("noches");

    // con una sola espectativa 
    //expect(saludar("Alejo")).toContain("noches");
  });
});