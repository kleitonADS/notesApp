function switchbutton() {
  const html = document.documentElement;
  html.classList.toggle("dark");

  const imgTitle = document.querySelector(".title-notes img");

  const imgDelete = document.querySelector(".input-box img");

  const imgButtonNotes = document.querySelector(".button-notes img")

   if (html.classList.contains("dark")) {
     imgTitle.setAttribute("src", "./assets/img/draft-line-w.svg")

     imgDelete.setAttribute("src", "./assets/img/delete-bin-line-w.svg")

     imgButtonNotes.setAttribute("src", "./assets/img/edit-line-w.svg")


  } else {
    imgTitle.setAttribute("src", "./assets/img/draft-line.svg")
    
    imgDelete.setAttribute("src", "./assets/img/delete-bin-line.svg")

    imgButtonNotes.setAttribute("src", "./assets/img/edit-line.svg")

  }






}




