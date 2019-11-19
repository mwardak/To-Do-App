//A user should be able to see a list of current TO-DO’s
   
    function toDo(){
    
    const myList = document.getElementById("myList");

    let newItem = document.createElement("li");

    newItem.textContent = "";

    let keyCode = document.addEventListener("keyup", function(){
    
    

    if (keyCode === 13) {
        newItem = myList.appendChild(newItem);
        
    } else {
        newItem = "";
    } 
    });
  
}

toDo();

  

//A user should be able to mark a TO-DO as completed


// //When a user mark’s a TO-DO as completed the message of the TO-DO should be crossed out (using strikethrough font)



// A user should have the option of deleting
