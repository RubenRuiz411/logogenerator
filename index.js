// installs inquirer
const inquirer = require("inquirer")
// allows use of classes in other shapes.js file
const {Circle,Triangle,Square} = require("./lib/shapes.js")
// allows use of file system
const fs = require("fs")

// questions for inquirer prompt
const promptquestions = [
    {
        type: "list",
        message: "What shape would you like?",
        choices: ["Circle", "Triangle", "Square"],
        name: "shape"
    },
    {
        type: "input",
        message: "What color do you want your shape?",
        name: "shapecolor"
    },
    {
        type: "input",
        message: "What text do you want?",
        name: "shapetext"
    },
    {
        type: "input",
        message: "What color do you want for your text?",
        name: "textcolor"
    }
];

// inquirer function that prompts questions to user then runs function from pre-built classes then write a new file with selected parameters and properties
inquirer.prompt(promptquestions).then(res=>{
    let shape;
    if(res.shape==="Circle"){
        shape=new Circle(res.shapecolor,res.shapetext,res.textcolor)
    };
    if(res.shape==="Triangle"){
        shape=new Triangle(res.shapecolor,res.shapetext,res.textcolor)
    };
    if(res.shape==="Square"){
        shape=new Square(res.shapecolor,res.shapetext,res.textcolor)
    };
    fs.writeFileSync("./examples/logo.svg",shape.render())
})