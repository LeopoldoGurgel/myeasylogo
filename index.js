// To do: Import inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');

// todo: fs.then make all the command line questions to build the logo then call the function to build the logo and save it to the SVGs folder

inquirer
.createPromptModule([
    {
        type: 'confirm',
        message: 'Welcome to MyEasyLogo app. You will be prompted'
    },
    {
        type: 'list',
        message: 'What shape do you want yuour logo to have?',
        choices: ['Triangle','Swaure', 'Circle']
    },
    {
        type: 'input',
        message: 'What color do you want the shape to be?'
    },
    {
        type: 'input',
        message: 'Enter 3 characters to be you logo text.',
        name: 'logoText'
    },

])
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered