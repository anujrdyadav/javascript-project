
let myQuote = [
    {
        quote: "The purpose of our lives is to be happy.",
        name: " Dalai Lama"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        name: "John Lennon"
    },
    {
        quote: "Get busy living or get busy dying.",
        name: "Stephen King"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        name: "Mae West"
    },
    {
        quote: "Many of lifes failures are people who did not realize how close they were to success when they gave up.",
        name: "Thomas A. Edison"
    },
    {
        quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
        name: "Albert Einstein"
    },
    {
        quote: "Never let the fear of striking out keep you from playing the game.",
        name: "Babe Ruth"
    },
    {
        quote: "Money and success dont change people; they merely amplify what is already there.",
        name: "Will Smith"
    },
]
//localStorage.setItem('quote', JSON.stringify(myQuote))

let getUser = JSON.parse(localStorage.getItem('quote'))
const btnGenerator = document.querySelector(".btngenerator")
btnGenerator.addEventListener('click', function () {
    let index = Math.floor(Math.random() * getUser.length);
    let quoteValue = getUser[index].quote;
    let quoteValue2 = "- " + getUser[index].name;
    document.getElementById("quote1").innerHTML = quoteValue;
    document.getElementById("name-quote").innerHTML = quoteValue2;
}) 


const addInput = document.querySelector(".add-input")
const nameInput = document.querySelector(".nameInput")
const btnAdd = document.querySelector(".btnadd")

btnAdd.addEventListener('click', function () {

    const newData = JSON.parse(localStorage.getItem("quote"))
    if (!addInput.value && !nameInput.value) {
        return
    }
    newData.push({
        quote: addInput.value,
        name: nameInput.value
    })

    //    console.log(newData);
    localStorage.setItem('quote', JSON.stringify(newData))


    // myQuote.push(newData)

})



