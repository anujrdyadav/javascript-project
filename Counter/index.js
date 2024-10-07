const countValue = document.getElementById("number");
const btnIncrement = document.getElementById("increase");
const btnReset = document.getElementById("reset");
const btndecrement = document.getElementById("decrease");


btnIncrement.addEventListener('click', function () {
    countValue.value++;
    countValue.style.color = "red"
}
)
btnReset.addEventListener('click', function () {
    countValue.value = 0;
    countValue.style.color = "black"
}
)
btndecrement.addEventListener('click', function () {
    if(countValue.value > 0){
         countValue.value--;
    }
    else{
        alert("Negetive")
    }
    countValue.style.color = "blue"
}
)