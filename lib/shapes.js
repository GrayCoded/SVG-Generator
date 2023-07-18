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
        <text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="${this.textcolor.trim()}">
        </svg>`;
  }
}

class Circle extends Shape {
  constructor(text, color, textcolor) {
    super(text, color, textcolor);
  }
  renderShape() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="25" cy="75" r="20"  fill="${this.color.trim()}" />
        <text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="${this.textcolor.trim()}">
        ${this.text}
        </svg>`;
  }
}

class Square extends Shape {
  constructor(text, color, textcolor) {
    super(text, color, textcolor);
  }
  renderShape() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <square x="60" y="10" rx="10" ry="10" width="30" height="30"  fill="${this.color.trim()}" />
        <text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="${this.textcolor.trim()}">
        </svg>`;
  }
}
module.exports = { Shape, Triangle, Circle, Square };
