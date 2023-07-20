const inquirer = require("inquirer");
const fs = require("fs");
const {Triangle, Circle, Square} = require("./lib/shapes.js");
inquirer
  .prompt([
    
    {
      type: "input",
      message: "What 3 characters would you like to use?(Must be letters)",
      validate: (input) => {
        if (input.length > 0 && input.length <= 3 && /^[A-Za-z]+$/) {
          return true;
        } else {
          return Promise.reject("Invalid Input");
        }
      },
      name: "text",
    },
    {
      type: "input",
      message: "What color text would you like? (note:It can be color or hexidecimal)",
      validate: (input) => {
        if (input.length > 0 && input.length >= 3 && input) {
          return true;
        } else {
          return Promise.reject("Invalid Input");
        }
      },
      name: "textColor",
    },
    {
      type: "list",
      message: "What shape would you like your logo to be from the list below?.",
      choices: ["Triangle", "Circle", "Square"],
      name: "logoShape",
    },
    {
      type: "input",
      message: "What color would you like your logo?(note:It can be color or hexidecimal)",
      validate: (input) => {
        if (input.length > 0) {
          return true;
        } else {
          return Promise.reject("Invalid Input");
        }
      },
      name: "logoColor",
    },
  ])
  .then((data) => {
    const shapeClasses = {
      Triangle: Triangle,
      Circle: Circle,
      Square: Square,
    };

    const ShapeClass = shapeClasses[data.logoShape];
    if (ShapeClass) {
      const shape = new ShapeClass(
        data.text,
        data.logoColor,
        data.textColor 
      );
      const svgContent = shape.renderShape();
      fs.writeFile(`examples/project-logo.svg`, svgContent, (err) => {
        if (err) {
          console.error("An error has occurred:", err);
        } else {
          console.info("Generated logo.svg!");
        }
      });
    } else {
      console.error("Invalid shape selected.");
    }
  });
