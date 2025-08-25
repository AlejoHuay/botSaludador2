import saludar from "./saludoNomHoragenEdad.js";

describe("saludoNomHoragenEdad", () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2025-01-01T09:00:00")); // mañana
  });
  afterAll(() => {
    jest.useRealTimers();
  });

  it("para M y edad > 30 debería incluir 'señor'", () => {
    const out = saludar("Alejo", "M", 35);
    expect(out).toContain("señor");
  });

  it("para F y edad > 30 debería incluir 'señora'", () => {
    const out = saludar("María", "F", 40);
    expect(out).toContain("señora");
  });

  it("para edad <= 30 no debería incluir tratamiento señor/señora", () => {
    const outM = saludar("Leo", "M", 25);
    const outF = saludar("Ana", "F", 30);
    expect(outM).not.toContain("señor");
    expect(outF).not.toContain("señora");
  });
});
