//A user should be able to see a list of current TO-DO’s
newItem ="";

document.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    // created a referencec id for the ol element
    const myList = document.getElementById("myList");

    // creats an li element
    newItem = document.createElement("li");

    // textcontent for newItem is left empty so user can enter text
    newItem.textContent = "";

    //  created a reference id for the input textbox
    let inputValue = document.getElementById("enter").value;

    // created the span element
    const span = document.createElement("span");
    // created a class reference
    span.className = "item-text";

    span.textContent = inputValue;

    newItem.appendChild(span);

    myList.appendChild(newItem);

    // after you type in text and click enter it should clear the textbox
    if ((inputValue = document.getElementById("enter").value = "")) {
      myList.appendChild(newItem) = "";
    }
  }
});

//A user should be able to mark a TO-DO as completed
myList.addEventListener("click", function(e) {
  if (e.target.nodeName === "SPAN") {
    e.target.parentElement.className = "done";
  } 
});

// A user should have the option of deleting

// const clearAllBtn = document.getElementById("btn");
clearAllBtn.addEventListener("click", function(e) {
// store the <ol></ol> element in a variable
const myList = document.getElementById("myList");
clearAllBtn.setAttribute("type", "button");
// loop through each child element
for (let i = 0; i < myList.childNodes.length; i++) {
  const childNode = myList.ChildNodes[i];
  if (childNode === false ) {
// set display = none
    myList.style = "display: none";
  }
}

});


