
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


// function to add task

function addTask(){
     
    if(inputBox.value == '' ){
        alert("Please Enter some Task !");
    }
    
   else {
     let li = document.createElement("li");
     li.innerHTML = inputBox.value ;

     listContainer.appendChild(li);

         let span = document.createElement("span");
    span.innerHTML = "Delete" ;
    li.appendChild(span);
   }

   
    inputBox.value = "" ;
    saveData()



}

// remove function and checked function 

listContainer.addEventListener("click" , function(e) {
    if(e.target.tagName == "LI"){
       
        e.target.classList.toggle("checked") ;
        saveData()

    }
    
    else if (e.target.tagName == "SPAN"){
        e.target.parentElement.remove() ;
        saveData()
    }
});


function saveData(){
     localStorage.setItem("data" , listContainer.innerHTML);

}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();

