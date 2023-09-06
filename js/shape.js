class Shape {
    constructor(shapeColor){
        this.shapeColor = shapeColor;

    }
} 

class Square extends Shape{
    render() {
        return `<rect x="70" y="20" width="160px" rx="10px" ry="10px" height="160px" fill="${this.shapeColor}" />`
        };
}

class Triangle extends Shape{
    render(){
        return `<polyline points="150,20 70,180, 230,180" fill="${this.shapeColor}" />`
        };
}

class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
        }
}
module.exports = {Circle, Triangle, Square}