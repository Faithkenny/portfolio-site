const content = `call me`;
// document.body.innerHTML = content;

const currentTime = new Date();

document.getElementById("date").innerHTML = `Today's date is ${currentTime.getMonth()}`;



document.querySelector("section h1").style.border = "1px solid red";

// document.querySelector("section h1").innerHTML = "1px solid red";



//This is one method
document.querySelectorAll("nav li:first-child").forEach(item => item.style.color = "red");
// document.querySelectorAll("nav li:last-child").forEach(item => item.style.color = "red");


//This is a second method
const highlightedItems = document.querySelectorAll("nav li");

highlightedItems.forEach((userItem) => {
    userItem.style.backgroundColor = "yellow";
});



// How to add a new element to an existing element using the template literal way

// target the element
const folioTitle = document.querySelector(".content-wrapper");

// template literal of what's the replacement
// const newContent = `x`;

  // change the content
  // folioTitle.innerHTML = newContent;

//   folioTitle.querySelector(ul li).forEach(item => item.style.color = "red");


document.querySelectorAll("video").forEach(item => item.setAttribute("src", ""));

// return document.querySelector("main").style;


// You don't have to use a template literal
const aTemplateLiteral = `Testing this out`; // strip the tags out so I could use innerText

const newParagraph = document.createElement("p");

newParagraph.classList.add("avatar-and-name");
newParagraph.setAttribute("id", "we-up");
newParagraph.innerHTML = aTemplateLiteral; //selah. why use innerHTML when the template literal has no html tag

document.querySelector("section").append(newParagraph);