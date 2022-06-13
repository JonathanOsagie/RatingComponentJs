var rated = 0;
var buttons = document.body.getElementsByClassName('btn-circle');
var currentBtn;
var i = 0;

for (const button of buttons) {
     button.addEventListener("click", function () {
         ratingHandler(button.innerHTML, button)})
}

function submitHandler() {
    if (rated === 0) {
        alert("please choose rating");
    } else {
        localStorage.setItem("textvalue", rated);
        window.location.href = 'thanks.html';
    }
}

function ratingHandler(ratingValue, currentBtnSelected) {
    if (rated === ratingValue) {
        rated = 0;
        currentBtnSelected.classList.remove('circles-selected')
    } else {
        rated = ratingValue;
        currentBtnSelected.classList.add('circles-selected');
        for (const button of buttons) {
            if (ratingValue != button.innerHTML) {
                button.classList.remove('circles-selected');
            }
        }
    }
}