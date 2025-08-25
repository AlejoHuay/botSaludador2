import saludar from "./saludoNomHoraGenEdadIdioma.js";

describe("saludoNomHoraGenEdadIdioma", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  afterAll(() => {
    jest.useRealTimers();
  });

  it("ES: mañana + M + >30 incluye 'Buenos' y 'señor'", () => {
    jest.setSystemTime(new Date("2025-01-01T09:00:00")); // mañana
    const out = saludar("Alejo", "M", 31, "es");
    expect(out).toContain("Buenos");
    expect(out).toContain("señor");
    expect(out).toContain("Alejo");
  });

  it("EN: tarde + F + >30 incluye 'Good afternoon' y 'Ms'", () => {
    jest.setSystemTime(new Date("2025-01-01T15:00:00")); // tarde
    const out = saludar("Mary", "F", 45, "en");
    expect(out).toContain("Good afternoon");
    expect(out).toContain("Ms ");
    expect(out).toContain("Mary");
  });

  it("EN: noche + M + <=30 no debe incluir Mr/Ms", () => {
    jest.setSystemTime(new Date("2025-01-01T21:00:00")); // noche
    const out = saludar("John", "M", 28, "en");
    expect(out).toContain("Good evening");
    expect(out).not.toContain("Mr ");
    expect(out).not.toContain("Ms ");
  });
});

//1. Instalar dependencias de desarrollo 
//npm install --save-dev jest babel-jest @babel/preset-env

//2. En la raíz del proyecto .babelrc, asegúrate de tener este archivo:
//{
  //"presets": [
    //["@babel/preset-env", { "targets": { "node": "current" } }]
  //]
//}

//3. En tu package.json, dentro de "scripts", remplaza //"test": "node ./script/tddScript.js", por:
//"scripts": {
  //"test": "jest",
  //"test:watch": "jest --watch",
  //"test:cov": "jest --coverage"
//}
