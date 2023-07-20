class Shape {
  constructor(text, color, textcolor) {
    this.text = text;
    this.color = color;
    this.textcolor = textcolor;
  }
  renderShape() {
    return this.svgString;
  }
}

class Triangle extends Shape {
  constructor(text, color, textcolor) {
    super(text, color, textcolor);
  }
  renderShape() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150,60 90,190 210,190" fill="${this.color.trim()}" />
        <text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" font-size="25" fill="${this.textcolor.trim()}">
        ${this.text.trim()}</text>
        </svg>`;
  }
}

class Circle extends Shape {
  constructor(text, color, textcolor) {
    super(text, color, textcolor);
  }
  renderShape() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="50" fill="${this.color.trim()}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="25" fill="${this.textcolor.trim()}">
        ${this.text.trim()}</text>
        </svg>`;
  }
}

class Square extends Shape {
  constructor(text, color, textcolor) {
    super(text, color, textcolor);
  }
  renderShape() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="110" y="60" width="80" height="80" fill="${this.color.trim()}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="25" fill="${this.textcolor.trim()}">
        ${this.text.trim()}</text>
        </svg>`;
  }
}
module.exports = {Triangle, Circle, Square};
