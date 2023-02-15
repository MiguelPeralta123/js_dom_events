
/* ***** SELECTING DOM ELEMENTS ***** */

// QuerySelector
/*Returns from 0 up to 1 elements*/
/* <--- CODE
console.log("QuerySelector")
const heading = document.querySelector(".header__text h2")
heading.textContent = "New heading"
console.log(heading)
*/

// QuerySelectorAll
/*Returns from 0 up to n elements*/

/* <--- CODE
console.log("QuerySelectorAll")
const links = document.querySelectorAll(".nav a")
links[0].textContent = "New link"
//links[0].href = "https://youtu.be/q6zrcUkXfgc?list=PLlIdsFpc6SaeFlIcC8Gt1aN15WVIXafjf"
links[0].classList.add("newClass")
console.log(links[0])
links[0].classList.remove("newClass")
console.log(links[0])
*/

/*GetElementById isn´t very common nowadays, so we´ll mainly use QuerySelector and QuerySelectorAll*/


/* ***** CREATING NEW ELEMENTS WITH JS ***** */

// Creating a link for nav
/* <--- CODE
const newLink = document.createElement("A")
newLink.href = "https://youtu.be/q6zrcUkXfgc?list=PLlIdsFpc6SaeFlIcC8Gt1aN15WVIXafjf"
newLink.textContent = "80s Playlist"
newLink.classList.add("nav__link")
// Adding the element to nav
const nav = document.querySelector(".nav")
nav.appendChild(newLink)
*/


/* ***** EVENTS ***** */

// Events for window and document
/* <--- CODE
console.log("Starting")
window.addEventListener("load", () => {
    console.log("load executes once the HTML, images, stylesheets, etc have completely loaded")
})
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded executes once the HTML has completely loaded")
})
console.log("Finishing")
*/

// Click event
/* <--- CODE
const btnSend = document.querySelector(".button--main")
btnSend.addEventListener("click", (e) => {
    // e references the event, it has several properties and methods
    console.log(e)
    // preventDefault prevents page from reloading, this is useful for validating data before send it, for example
    e.preventDefault()
    console.log("Sending form")
})
*/

// Keyboard events
/* <--- CODE
const user = {
    name: "",
    email: "",
    message: ""
}

// This method takes an argument, which is the event object
const readInput = (e) => {
    // Target references the input that´s triggering the event
    user[e.target.id] = e.target.value
    console.log(user)
}

const name = document.querySelector("#name")
const email = document.querySelector("#email")
const message = document.querySelector("#message")

// "input" event is called whenever we type the keyboard
// "change" event is called when an input is unfocused
name.addEventListener("input", readInput)
email.addEventListener("input", readInput)
message.addEventListener("input", readInput)
*/