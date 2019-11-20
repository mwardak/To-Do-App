//A user should be able to see a list of current TO-DO’s
  
  document.addEventListener("keyup", function(e){
    
  if (e.keyCode === 13) {
      const myList = document.getElementById("myList");
      let newItem = document.createElement("li")
      newItem = myList.appendChild(newItem).value ==="";
      newItem.appendChild(document.createTextNode("- "+myList));

  } else {
      
  } 
  });





//A user should be able to mark a TO-DO as completed

// //When a user mark’s a TO-DO as completed the message of the TO-DO should be crossed out (using strikethrough font)

// A user should have the option of deleting






//   let input = document.getElementById("input");
//   let item = input.value;

//   // ol = document.getElementById("list");

//   let textnode = document.createTextNode(item).appendChild;

//   if (item){
//       textnode;
//   } else {
        
//   }
// }
