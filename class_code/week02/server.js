const http = require("http")
const app = http.createServer((req, res) => {
    if(req.url === "/home") {
        res.end("hello from Home")
    } else if(req.url === "/about") {
        res.end("About us page ")
    } else if (req.url === "/contact_us") {
        res.end("Thanks for contacting us")
    } else if (req.url === "/login") {
        res.end("Login to your account")
    } else if (req.url === "/fetch_data") {
        res.end("data is available")
    } else {
        res.end("Page not found. Try again")
    }
    
})
app.listen(8000)