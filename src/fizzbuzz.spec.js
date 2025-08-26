import convertirFizzBuzz from "./fizzbuzz";

describe("Fizzbuzz", () => {
  /*
  it("deberia convertir un numero que no es multiplo de 3 ni 5", () => {
    expect(convertirFizzBuzz(1)).toEqual("1");
  });

  it("deberia convertir cualquier numero que no es multiplo de 3 ni 5", () => {
    expect(convertirFizzBuzz(4)).toEqual("4");
  });

  it("deberia convertir un multiplo de 3 a Fizz", () => {
    expect(convertirFizzBuzz(3)).toEqual("Fizz");
  });

  it("deberia convertir cualquier multiplo de 3 a Fizz", () => {
    expect(convertirFizzBuzz(9)).toEqual("Fizz");
  });

  it("deberia convertir un multiplo de 5 a Buzz", () => {
    expect(convertirFizzBuzz(5)).toEqual("Buzz");
  });*/

  it("deberia convertir cualquier numero multiplo de 5 a Buzz", () => {
    expect(convertirFizzBuzz(15)).toEqual("Buzz");
  });

});