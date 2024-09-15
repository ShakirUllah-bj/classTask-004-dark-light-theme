// document.getElementById("toggleBtn").addEventListener("click", function() {

//     var btn = document.getElementById("toggleBtn");

//     // var currentColor = window.getComputedStyle(document.body).backgroundColor;
//     if (btn.textContent === "Night") {
//         document.body.style.backgroundColor = "black";
//         btn.style.backgroundColor = "white";
//         btn.style.color = "black";
//         btn.textContent = 'Day';
//     } else {
//         document.body.style.backgroundColor = "white";
//         btn.style.backgroundColor = "black";
//         bnt.style.color = "white";
//         btn.innerText = 'Night';
//     }

// })


// Another way

function toggleTheme() {
    var btn = document.getElementById("toggleBtn");

    var currentColor = window.getComputedStyle(document.body).backgroundColor;
    if (currentColor === "rgb(255, 255, 255)") {
        document.body.style.backgroundColor = "black";
        btn.style.backgroundColor = "white";
        btn.style.color = "black";
        btn.innerText = "Day";
    } else {
        document.body.style.backgroundColor = "white";
        btn.style.backgroundColor = "black";
        btn.style.color = "white";
        btn.innerText = "night";
    }
}