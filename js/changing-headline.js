const changingHeadline = document.getElementById("changing-headline");

const contentArray = ["Web Developer", "Programmer", "UX Designer"];
const colorArray = ["#ff0033", "#ff0033", "#ff0033"];
let index = 0

function changeHeadline() {
    changingHeadline.style.animation = "none";
    changingHeadline.offsetHeight;
    changingHeadline.style.animation = null;
    changingHeadline.style.animation = "changeAnimation 1s ease-in-out";

    setTimeout(() => {
        changingHeadline.textContent = contentArray[index];
        changingHeadline.style.color = colorArray[index];
        index = (index + 1) % contentArray.length;
    }, 300);
}

changeHeadline()

setInterval(changeHeadline, 2000)