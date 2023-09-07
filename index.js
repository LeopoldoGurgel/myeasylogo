// To do: Import inquirer and fs
const inquirer = require('inquirer');
const createSVG = require('./js/createSVG.js')

// todo: fs.then make all the command line questions to build the logo then call the function to build the logo and save it to the SVGs folder

const App = inquirer
.prompt([
    {
        type: 'confirm',
        message: 'Welcome to MyEasyLogo app. You will be prompted with some questions in order to build your logo. Have in mind the shape of the logo, the three letters you want in it, the color the shape and the color of the letters. Got it?',
        name: 'intro'
    },
    {
        type: 'list',
        message: 'What shape do you want yuour logo to have?',
        choices: ['Triangle','Square', 'Circle'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'What color do you want the shape to be? (type a color name or a hexadecimal value)',
        name: 'shapeColor',
        validate: (value) => {
            if(value) {
                return true
            } else {
                return "I need a color to continue."
            }
        }
    },
    {
        type: 'input',
        message: 'Enter 3 characters to be you logo text.',
        name: 'text',
        validate: (value) => {
            if(value && /^.{1,3}$/.test(value)) {
                return true
            } else if(!value) {
                return "I need a text to continue."
            } else {
                return "Your text must have 3 or less characters."
            }
        }
    },
    {
        type: 'input',
        message: 'What color do you want your letters to be?',
        name: 'textColor',
        validate: (value) => {
            if(value) {
                return true
            } else {
                return "I need the text color to continue"
            }
        }
    }
])
.then(function(answers){
    createSVG(answers.shape, answers.shapeColor, answers.text, answers.textColor)
})
.catch((error) => {
    console.error(`Error: `, error)
})

module.exports = App;
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