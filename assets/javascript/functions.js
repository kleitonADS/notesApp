function switchbutton() {
  const html = document.documentElement;
  html.classList.toggle("dark");

  const imgTitle = document.querySelector(".title-notes img");
 
  const switchIcon = document.querySelector(".title-notes img");

  // console.log(switchIcon)

  if (html.classList.contains("dark")) {
     imgTitle.setAttribute("src", "./assets/img/draft-line.svg")


  } else {
    imgTitle.setAttribute("src", "./assets/img/draft-line-dark.svg")

  }






}




