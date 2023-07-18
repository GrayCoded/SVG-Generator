const inquirer = require("inquirer");
const fs = require("fs");
const { Shape, Triangle, Circle, Square } = require("./lib/shapes.js");

inquirer.prompt = [
  {
    type: "input",
    message: "What would is the name of the logo?/n",
    name: "title",
  },
  {
    type: "input",
    message: "What 3 characters would you like to use for your SVG?/n",
    validate: (input) => {
      if (input.length > 0 && input.length <= 3) {
        return true;
      } else {
        return Promise.reject("Invalid Input");
      }
    },
    name: "text",
  },
  {
    type: "input",
    message: "what color would you like your text?/n",
    validate: (input) => {
      if (input.length > 0) {
        return true;
      } else {
        return Promise.reject("Invalid Input");
      }
    },
    name: "textColor",
  },
  {
    type: "list",
    message: "what shape would you prefer?/n",
    choices: ["Triangle", "Circle", "Square"],
    name: "logoShape",
  },
  {
    type: "input",
    message: "what color would you like your logo?/n",
    validate: (input) => {
      if (input.length > 0) {
        return true;
      } else {
        return Promise.reject("Invalid Input");
      }
    },
    name: "logoColor",
  },
]
  .then((data) => {
    let shape;
    switch (data.logoShape) {
      case "Triangle":
        shape = new Triangle(data.text, data.color, data.textcolor);
        break;

      case "Circle":
        shape = new Circle(data.text, data.color, data.textcolor);
        break;

      case "Square":
        shape = new Square(data.text, data.color, data.textcolor);
        break;
    }
    const svgContent = shape.renderShape();
    fs.writeFile(`examples/logo.svg`, svgContent, (err) => {
      err
        ? console.error("An error has occurred,", err)
        : console.info("Generated logo.svg!");
    });
  })
  .catch((error) => {
    console.error("An error occurer,", error);
  });
