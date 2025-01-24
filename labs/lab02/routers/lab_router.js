import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to the lab router")
})

// /name -> /lab/name
router.get("/name", (req, res) => {
    res.send("Stanniss Rahl")
})

router.get("/greeting", (req, res) => {
    res.send("Hello, I am Stan")
})

router.get("/add/:x/:y", (req, res) => {
    let x = parseFloat(req.params.x);
    let y = parseFloat(req.params.y);
    res.send(`${x+y}`)
})

router.get("/calculate/:a/:b/:operation", (req, res) => {
    let a = parseFloat(req.params.a);
    let b = parseFloat(req.params.b);
    let c = req.params.operation;

    switch (c) {
        case "+":  
            res.send(`${a+b}`);
            break;
        
        case "-":
            res.send(`${a-b}`);
            break;

        case "*":
            res.send(`${a*b}`);
            break;

        case "/":
            res.send(`${a/b}`);
            break;

         case "&":
            res.send("wrong operation");
            break;

    }

})



export default router;