import { describe, it, expect } from "vitest";
import sum from "../src/sum.js";

describe("soma", () => {
  it("deve somar dois números", () => {
    expect(sum(2, 3)).toBe(5);
  });
});