import saludar from "./saludoNomHora.js";

describe("saludoNomHora", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  afterAll(() => {
    jest.useRealTimers();
  });

  it("debería saludar en la mañana (Buenos días)", () => {
    jest.setSystemTime(new Date("2025-01-01T09:00:00")); // 09:00
    const out = saludar("Alejo");
    expect(out).toContain("Buenos"); // evita problemas de tildes
    expect(out).toContain("Alejo");
  });

  it("debería saludar en la tarde (Buenas tardes)", () => {
    jest.setSystemTime(new Date("2025-01-01T15:00:00")); // 15:00
    const out = saludar("Alejo");
    expect(out).toContain("tardes");
  });

  it("debería saludar en la noche (Buenas noches)", () => {
    jest.setSystemTime(new Date("2025-01-01T21:00:00")); // 21:00
    const out = saludar("Alejo");
    expect(out).toContain("noches");
  });
});