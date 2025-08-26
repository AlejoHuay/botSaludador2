import {sumar, dividir, restar} from "./calculadora.js";

describe("Calculadora", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });

  it("deberia dividir dos numeros", () => {
    expect(dividir(8, 4)).toEqual(2);
  });

  it("deberia restar dos numeros", () => {
    expect(restar(8, 4)).toEqual(4);
  });  
});


