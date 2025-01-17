const http = require("http");
const fs = require("fs");

const bookstore = http.createServer((req, res) => {
    if(req.url === "/") {
        let webpage = fs.readFileSync("homepage.html")
        res.end(webpage)

    } else if(req.url === "/homepage") {
        let webpage = fs.readFileSync("homepage.html")
        res.end(webpage)

    } else if(req.url === "/about") {} 
      else if (req.url === "/contact_us") {}
        
      else if (req.url === "/login") {}
        
     else if (req.url === "/fetch_data") {}
       
     else {
        res.end("Error 404 - page not found.")
    }
    
});

let PORT = 7000;
bookstore.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})