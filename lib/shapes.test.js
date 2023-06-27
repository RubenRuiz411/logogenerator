// allows clases from other file to be used in tests
const {Circle, Triangle, Square} = require('./shapes')

// tests triangle with paramters given in "new Triangle" and tests with what it should be when function is done properly
describe("Triangle",()=>{
    it("Should render a new triangle shape with applied properties ", () => {
        const triangle = new Triangle ("black", "ccc", "white");
        const expectationVariable = `<svg width="500" height="400" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="250,60 100,400 400,400" class"triangle" fill="black"/><text x="250" y="300" font-size="60" text-anchor="middle" fill="white">ccc</text></svg>`
        expect(triangle.render()).toEqual(expectationVariable);
    })
})

// tests circle with paramters given in "new Triangle" and tests with what it should be when function is done properly
describe("Circle",()=>{
    it("Should render a new circle shape with applied properties ", () => {
        const circle = new Circle ("black", "ccc", "white");
        const expectationVariable = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="black"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ccc</text></svg>`
        expect(circle.render()).toEqual(expectationVariable);
    })
})

// tests square with paramters given in "new Triangle" and tests with what it should be when function is done properly
describe("Square",()=>{
    it("Should render a new square shape with applied properties ", () => {
        const square = new Square ("black", "ccc", "white");
        const expectationVariable = `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="300" x="15" y="15" fill="black"/><text x="150" y="175" font-size="60" text-anchor="middle" fill="white">ccc</text></svg>`
        expect(square.render()).toEqual(expectationVariable);
    })
})