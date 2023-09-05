// todo: code function to create the svg file
const App = require('../index.js');
const {Circle, Triangle, Square} = require('./shape.js')
const assembleFile = require('./assembleFile.js')


function createSVG(shape, shapeColor, text, textColor){
    let selectedShape;

    if (shape == "Triangle"){
        selectedShape = new Triangle(shapeColor)
    } else if (shape == 'Circle'){
        selectedShape = new Circle(shapeColor)
    } else if (shape == 'Square'){
        selectedShape = new Square(shapeColor)
    }

    assembleFile(text, textColor, selectedShape)
}
module.exports = createSVG;