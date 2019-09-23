const friendsArray = require("../data/friends")
module.exports = app=>{
    app.get("/api/friends",(req,res)=>{
        res.json(friendsArray)
    })

    app.post("/api/friends",(req,res)=>{
        res.send(req.body)
    })
}