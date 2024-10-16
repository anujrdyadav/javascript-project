
let myQuote = [
    {
        quote: "The purpose of our lives is to be happy.",
        author: " Dalai Lama"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "Get busy living or get busy dying.",
        author: "Stephen King"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        quote: "Many of lifes failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison"
    },
    {
        quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
        author: "Albert Einstein"
    },
    {
        quote: "Never let the fear of striking out keep you from playing the game.",
        author: "Babe Ruth"
    },
    {
        quote: "Money and success dont change people; they merely amplify what is already there.",
        author: "Will Smith"
    },
]
// localStorage.setItem('quote', JSON.stringify(myQuote))

let getUser = JSON.parse(localStorage.getItem('quote'))
const btnGenerator = document.querySelector(".btngenerator")
btnGenerator.addEventListener('click', function () {
    let quoteIndex = Math.floor(Math.random() * getUser.length);
    let quoteName = getUser[quoteIndex].quote;
    let quoteAuthor = "- " + getUser[quoteIndex].author;

    document.getElementById("quote-name").innerHTML = quoteName;
    document.getElementById("name-author").innerHTML = quoteAuthor;
})


const addQuoteInput = document.querySelector(".add-input")
const authorNameInput = document.querySelector(".name-input")
const btnAddQuote = document.querySelector(".btn-add")

btnAddQuote.addEventListener('click', function () {

    const addNewData = JSON.parse(localStorage.getItem("quote"))
    if (!addQuoteInput.value && !authorNameInput.value) {
        return
    }
    addNewData.push({
        quote: addQuoteInput.value,
        author: authorNameInput.value
    })

    //    console.log(newData);
    localStorage.setItem('quote', JSON.stringify(addNewData))


})



