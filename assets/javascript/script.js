let todo = document.getElementById("todo");
let finish = document.getElementById("finish");
let text = document.querySelector(".text");
const btn = document.getElementById("btn");
const error=document.getElementById("error")
let tasks=[]

btn.addEventListener("click", function (){
      error.textContent=""
      if (!text.value){
            error.textContent="Merci de saisir une tâche avant de cliquer sur Ajouter"
            return
      }

      if (tasks.includes(text.value)){
            error.textContent="Cette tâche existe déjà !"
            return
     }
      tasks.push(text.value)
      let listItem=document.createElement("li")
      listItem.textContent=text.value
      todo.appendChild(listItem)
      text.value=""

      const modifBtn=document.createElement("button")
      listItem.appendChild(modifBtn)
      modifBtn.textContent="Modifier"
      modifBtn.style.color= "white";
      modifBtn.style.background = "blue";
      modifBtn.style.padding = "0 10px";
      modifBtn.style.margin = "0 10px";

      const completeBtn=document.createElement("button")
      listItem.appendChild(completeBtn)
      completeBtn.textContent="Terminée"
      completeBtn.style.color= "white";
      completeBtn.style.background = "green";
      completeBtn.style.padding = "0 10px";
      completeBtn.style.margin = "0 10px";
     
      const dellBtn=document.createElement("button")
      listItem.appendChild(dellBtn)
      dellBtn.textContent="Supprimer"
      dellBtn.style.color= "white";
      dellBtn.style.background = "red";
      dellBtn.style.padding = "0 10px";
      dellBtn.style.margin = "0 10px";

      modifBtn.addEventListener("click", function() {
            todo.appendChild(listItem)
            modifBtn.textContent


      })

      completeBtn.addEventListener("click", function() {
            todo.appendChild(listItem)
            completeBtn.style.visibility="hidden"
      
      })

      dellBtn.addEventListener("click", function (){
            todo.appendChild(listItem)
            listItem.remove()
            
      })

      modifBtn.addEventListener("click", function() {
            finish.appendChild(listItem)
            modifBtn.style.visibility="hidden"

      })

      completeBtn.addEventListener("click", function() {
            finish.appendChild(listItem)
            completeBtn.textContent="En cours"
           
      
      })

      dellBtn.addEventListener("click", function (){
            finish.appendChild(listItem)
            listItem.remove()
            
      })


})