console.log(`i worked`);

$("#submitBtn").on("click", () => {

    const userAnswers = {
        name: $("#nameInput").val(),
        photo: $("#photoLink").val(),
        q1: Number($("#q1").val()),
        q2: Number($("#q2").val()),
        q3: Number($("#q3").val()),
        q4: Number($("#q4").val()),
        q5: Number($("#q5").val()),
        q6: Number($("#q6").val()),
        q7: Number($("#q7").val()),
        q8: Number($("#q8").val()),
        q9: Number($("#q9").val()),
        q10: $("#q10").val()
    }
    fetch("/api/friends", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userAnswers)
    }).then(response => response.json()).then(data => {
        $("#matchModal").modal("show");
        $("#matchName").text(data.name)
        $("#matchPhoto").attr("src",data.photo)
        console.log(data)
        console.log(data.name)
        console.log(data.photo)
    }).catch(error=>{
        console.log(error)
    });



});







