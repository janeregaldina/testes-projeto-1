import { describe, it, expect } from "vitest";
import div from "../src/div.js";

describe("divisão", () => {
  it("deve dividir dois números", () => {
    expect(div(10, 2)).toBe(5);
  });

  it("deve lidar com divisão comum", () => {
    expect(div(9, 3)).toBe(3);
  });
});