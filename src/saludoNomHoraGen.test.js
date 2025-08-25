import saludar from "./saludoNomHoraGen.js";

describe("saludoNomHoraGen", () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2025-01-01T09:00:00")); // mañana
  });
  afterAll(() => {
    jest.useRealTimers();
  });

  it("debería usar 'mi estimado' para M", () => {
    const out = saludar("Alejo", "M");
    expect(out).toContain("estimado");
    expect(out).toContain("Alejo");
  });

  it("debería usar 'mi estimada' para F", () => {
    const out = saludar("María", "F");
    expect(out).toContain("estimada");
    expect(out).toContain("María");
  });
});