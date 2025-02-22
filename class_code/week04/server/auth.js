
const auth = (req, res, next) => {
    if(req.query.username === "Stan") {
        next();
    } else {
        res.send("Access not allowed")
 //       res.redirect("http://localhost:8090/")
    }

   
  };
  
  export default auth;
  