const {Triangle, Circle, Square} = require('./shapes.js');

describe("Triangle", () => {
  it("show the right properties", () => {
    const triangle = new Triangle("text", "color", "textcolor");
    expect(triangle.color).toBe("color");
    expect(triangle.text).toBe("text");
    expect(triangle.textcolor).toBe("textcolor");

    const svgContent = triangle.renderShape();
    expect(svgContent).toContain("<polygon");
    expect(svgContent).toContain('fill="color"');
    expect(svgContent).toContain("text");
    expect(svgContent).toContain('fill="textcolor"');
  });
});

describe("Circle", () => {
  it("show the right properties", () => {
    const circle = new Circle("text", "color", "textcolor");
    expect(circle.text).toBe("text");
    expect(circle.color).toBe("color");
    expect(circle.textcolor).toBe("textcolor");

    const svgContent = circle.renderShape();
    expect(svgContent).toContain("<circle");
    expect(svgContent).toContain('fill="color"');
    expect(svgContent).toContain("text");
    expect(svgContent).toContain('fill="textcolor"');
  });
});


describe("Square", () => {
  it("show the right properties", () => {
    const square = new Square("text", "color", "textcolor");
    expect(square.text).toBe("text");
    expect(square.color).toBe("color");
    expect(square.textcolor).toBe("textcolor");
    const svgContent = square.renderShape();

    expect(svgContent).toContain("<square");
    expect(svgContent).toContain('fill="color"');
    expect(svgContent).toContain("text");
    expect(svgContent).toContain('fill="textcolor"');
  });
});
