import { describe, it, expect } from "vitest";
import mul from "../src/mul.js";

describe("multiplicação", () => {
  it("deve multiplicar dois números", () => {
    expect(mul(3, 4)).toBe(12);
  });

  it("deve multiplicar por zero", () => {
    expect(mul(5, 0)).toBe(0);
  });
});