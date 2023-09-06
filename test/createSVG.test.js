// todo: create jest test code
const createSVG = require('../js/createSVG.js');
const {Circle, Triangle, Square} = require('../js/shape.js')

describe('createSVG', () => {
    it('should return a piece of html equivalent to the newly created object from the user input on inquirer', () => {
        let square = `<rect x="70" y="20" width="160px" rx="10px" ry="10px" height="160px" fill="green" />`;
        let mockSquare = new Square("green");
        expect(mockSquare.render()).toEqual(square);
    })

    it('should return a piece of html equivalent to the newly created object from the user input on inquirer', () => {
        let triangle = `<polyline points="150,20 70,180, 230,180" fill="green" />`;
        let mockTriangle = new Triangle("green");
        expect(mockTriangle.render()).toEqual(triangle);
    })

    it('should return a piece of html equivalent to the newly created object from the user input on inquirer', () => {
        let circle = `<circle cx="150" cy="100" r="80" fill="green" />`;
        let mockCircle = new Circle("green");
        expect(mockCircle.render()).toEqual(circle);
    })
    
})