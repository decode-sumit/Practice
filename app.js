const form=document.querySelector(".form")
const list=document.querySelector(".list")

function createTodo(text){
    const li=document.createElement("LI")
    li.classList.add("list-item","flex");
    li.innerHTML=`<div class="text">${text}</div>
    <button class="del" >Detele</button>`
    list.append(li);
    

}

form.addEventListener("submit", function(e){
    e.preventDefault();
    let todoText=form.elements.todoInfo.value;
   createTodo(todoText)
   form.elements.todoInfo.value ="";
});

list.addEventListener("click", function(event){
if(event.target.nodeName==="BUTTON"){
    let command=confirm("muchbi naki??")
    if(command==true){
        alert("thikache muche dilam!!")
    event.target.parentNode.remove()}
    
    else{
        
      }

}})