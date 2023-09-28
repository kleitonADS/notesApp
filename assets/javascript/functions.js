    const notesContainer = document.querySelector(".notes-container");
    const createBtn = document.querySelector(".button-notes")
    let notes = document.querySelectorAll(".input-box")
    let html = document.documentElement;

    let imgTitle = document.querySelector(".title-notes img");

    let imgButtonNotes = document.querySelector(".button-notes img")
    

    function showNotes() {
      const theme = localStorage.getItem('website_theme');
      if(theme != null){
        html.classList.remove('default', 'dark'); 
        html.classList.add(theme);
     }

      notesContainer.innerHTML = localStorage.getItem("notes")


     if (html.classList.contains("dark")) {
        imgTitle.setAttribute("src", "./assets/img/draft-line-w.svg")

        imgButtonNotes.setAttribute("src", "./assets/img/edit-line-w.svg")
    } else {
        imgTitle.setAttribute("src", "./assets/img/draft-line.svg")

        imgButtonNotes.setAttribute("src", "./assets/img/edit-line.svg")
    }



    }

    showNotes()


    function updateStorage(){

      localStorage.setItem("notes", notesContainer.innerHTML)
  
    }

    createBtn.addEventListener("click", ()=>{
  
      let inputBox = document.createElement("p")
      let img = document.createElement("img");
      inputBox.className = "input-box";
      inputBox.setAttribute("contenteditable", "true")
      img.src = "./assets/img/delete-bin-line.svg"
      notesContainer.appendChild(inputBox).appendChild(img)
    })

    notesContainer.addEventListener("click", e =>{
      
      notes = document.querySelectorAll(".input-box");
      if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
      }
      else if( e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
          nt.onkeyup = function(){
            updateStorage();
            console.log("save notes")
          }
        })
      }
    })

    document.addEventListener("keydown", event =>{
      if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
      }
    })






function switchbutton() {
  html = document.documentElement;
  html.classList.toggle("dark");

  imgTitle = document.querySelector(".title-notes img");

  imgButtonNotes = document.querySelector(".button-notes img")

   if (html.classList.contains("dark")) {
     imgTitle.setAttribute("src", "./assets/img/draft-line-w.svg")

     imgButtonNotes.setAttribute("src", "./assets/img/edit-line-w.svg")

     localStorage.setItem('website_theme','dark');


  } else {
    imgTitle.setAttribute("src", "./assets/img/draft-line.svg")

    imgButtonNotes.setAttribute("src", "./assets/img/edit-line.svg")

    localStorage.setItem('website_theme','default');

  }
}




