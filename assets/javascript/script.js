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
      
      // *******************TACHES EN COURS*****************
      // bouton modifier************************************

      modifBtn.addEventListener("click", function() {
            todo.appendChild(listItem)
            const newText =prompt();
            listItem.textContent=newText
            listItem.appendChild(modifBtn)
            listItem.appendChild(completeBtn)
            listItem.appendChild(dellBtn)
      })
      // bouton Terminée **********************************
      completeBtn.addEventListener("click", function() {
           
            
            if (completeBtn.textContent==="Terminée"){
                  finish.appendChild(listItem)
                  completeBtn.textContent="En cours"
                  return
            }
            if(completeBtn.textContent=== "En cours"){
                  todo.appendChild(listItem)
                  completeBtn.textContent="Terminée"
            }

      })
      // bouton supprimer********************************
      dellBtn.addEventListener("click", function (){
            listItem.remove()
            
      })


})