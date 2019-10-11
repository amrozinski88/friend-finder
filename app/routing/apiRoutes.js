const friendsArray = require("../data/friends")
module.exports = app => {
    app.get("/api/friends", (req, res) => {
        res.json(friendsArray)
    })

    app.post("/api/friends", (req, res) => {
        console.log("post")
        const { name, photo, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10 } = req.body
        const answerArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
        let differenceArray = []

        for (let i = 0; i < friendsArray.length; i++) {
            let totalDifference = 0
            for (let j = 0; j < friendsArray[i].scores.length; j++) {
                totalDifference = totalDifference + Math.abs(friendsArray[i].scores[j] - answerArray[j])

            }
            differenceArray.push(totalDifference)
        }
        for (i = 0; i < differenceArray.length; i++) {
            if (differenceArray[i] === Math.min(...differenceArray)) {
                res.json({
                    name: friendsArray[i].name,
                    photo: friendsArray[i].photo
                })
            }
        }
    })
}