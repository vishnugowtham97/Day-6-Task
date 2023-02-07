class circle {
    constructor (radius = 1.0, color = 'red') {
        this.radius = radius;
        this.color = color;
    }
    getRadius(){
    return this.radius;
    }
    setRadius(radius) {
    this.radius = radius;
    }
    getColor() {
    return this.color;
    }
    setColor(color) {
    this.color = color;
    }
    getArea(){
    return Math.PI * this.radius * this.radius;
    }
    getCircumstence(){
    return 2 * Math.PI * this.radius;
    }
    }
    const Circle = new circle();   
console.log(`Radius: ${Circle.getRadius()}`);
console.log(`Color: ${Circle.getColor()}`);
console.log(`Circumference: ${Circle.getCircumstence()}`);
console.log(`Area: ${Circle.getArea()}`);
