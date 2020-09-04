const { TestScheduler } = require("jest");

const THREE = require("three");
const gsap = require("gsap");

describe("Checking Modules", () => {
  test("ThreeJS available", () => {
    expect(THREE).toBeDefined();
  });

  test("GreenSock available", () => {
    expect(gsap).toBeDefined();
  });
});
