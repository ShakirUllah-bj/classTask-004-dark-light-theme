// document.getElementById("toggleBtn").addEventListener("click", function() {

//     var btn = document.getElementById("toggleBtn");

//     if (document.body.style.backgroundColor === "white") {
//         document.body.style.backgroundColor = "black";
//         btn.style.backgroundColor = "white";
//         btn.style.color = "black";
//         btn.innerText = 'Day';
//     } else {
//         document.body.style.backgroundColor = "white";
//         btn.style.backgroundColor = "black";
//         bnt.style.color = "white";
//         btn.innerText = 'night';
//     }

// })


// Another way

function toggleTheme() {
    var btn = document.getElementById("toggleBtn");

    if (document.body.style.backgroundColor === "white") {
        document.body.style.backgroundColor = "black";
        btn.style.backgroundColor = "black";
        btn.style.color = "white";
        btn.innerText = "Day";
    } else {
        document.body.style.backgroundColor = "white";
        btn.style.backgroundColor = "white";
        btn.style.color = "black";
        btn.innerText = "night";
    }
}