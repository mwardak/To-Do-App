//A user should be able to see a list of current TO-DO’s

  document.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
      const myList = document.getElementById("myList");
      let newItem = document.createElement("li");
      newItem.textContent = "";

      let inputValue = document.getElementById("enter").value;
      newItem.textContent = inputValue;

      myList.appendChild(newItem);
    } else {
    }
  });





//A user should be able to mark a TO-DO as completed
function btn() {
  if (btn){
    document.getElementsByClassName("text-decoration:line-through");
  }
}


// //When a user mark’s a TO-DO as completed the message of the TO-DO should be crossed out (using strikethrough font)

// A user should have the option of deleting






