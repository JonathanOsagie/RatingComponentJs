var rated = 0;
var buttons = document.body.getElementsByClassName('btn-circle');

for (var i = 0; i < buttons.length; i++) {
    var currentBtn = buttons.item(i);
    // currentBtn.addEventListener("click", function () {
    //     ratingHandler(i,currentBtn)})
    currentBtn.addEventListener("click", function () {
        controlVariable(i, currentBtn)
    })
    console.log(buttons.item(i));

}

function submitHandler() {
    if (rated === 0) {
        alert("please choose rating");
    } else {
        localStorage.setItem("textvalue", rated);
        window.location.href = 'thanks.html';
    }
}

function controlVariable(givenValue,btnPressed) {
    console.log(givenValue)
}

function ratingHandler(ratingValue, currentBtnSelected) {
    console.log()
    if (rated === ratingValue) {
        rated = 0;
        // document.getElementById(ratingValue).style.backgroundColor = 'hsl(216, 12%, 8%)'; //lightgray
        currentBtn.classList.remove('circles-selected')
        //document.getElementById(ratingValue).classList.remove('circles-selected');
    } else {
        console.log(currentBtnSelected);

        rated = ratingValue;
        currentBtnSelected.classList.add('circles-selected');
        //document.getElementById(ratingValue).classList.add('circles-selected');
        for (var i = 0; i < buttons.length; i++) {
            if (ratingValue != i) {
                currentBtn.classList.remove('circles-selected');
                //document.getElementById(b).classList.remove('circles-selected');
            }
        }
    }
    //if(ratingValue Active) => remove color; if (ratingValue isNotActive) => give color, remove color from
}