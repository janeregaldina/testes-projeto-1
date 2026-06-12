import { describe, it, expect } from "vitest";
import sub from "../src/sub.js";

describe("subtração", () => {
  it("deve subtrair dois números", () => {
    expect(sub(10, 4)).toBe(6);
  });
});