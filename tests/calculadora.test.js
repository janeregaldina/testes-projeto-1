import { describe, it, expect } from "vitest";
import calculadora from "../src/calculadora.js";

describe("calculadora", () => {
  it("deve somar", () => {
    expect(calculadora.soma(2, 3)).toBe(5);
  });

  it("deve subtrair", () => {
    expect(calculadora.subtracao(5, 2)).toBe(3);
  });

  it("deve multiplicar", () => {
    expect(calculadora.multiplicacao(3, 4)).toBe(12);
  });

  it("deve dividir", () => {
    expect(calculadora.divisao(10, 2)).toBe(5);
  });
});