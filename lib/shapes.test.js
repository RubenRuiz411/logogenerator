const {Circle, Triangle, Square} = require('./shapes')

describe("Triangle",()=>{
    it("Should display a triangle with appropriate color", () => {
        const color = "red";
        const triangle = new Triangle ("", color, "");
        const expectationVariable = `<svg width="500" height="400" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="250,60 100,400 400,400" class"triangle" fill="${color}"/><text x="250" y="300" font-size="60" text-anchor="middle" fill="black">test</text></svg>`
        expect(triangle.render()).toEqual(expectationVariable);
    })
})