const inquirer = require("inquirer")
const {Circle,Triangle,Square} = require("./lib/shapes.js")
const fs = require("fs")

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

inquirer.prompt(promptquestions).then(res=>{
    console.log(res);
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