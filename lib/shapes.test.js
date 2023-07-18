const { Shape, Triangle, Circle, Square } = require("./shapes.js");

describe("Shape", () => {
  it("show the right properties", () => {
    const shape = new Shape("text", "color", "textcolor");
    expect(shape.text).toBe("text");
    expect(shape.color).toBe("color");
    expect(shape.textcolor).toBe("textcolor");
  });
});
