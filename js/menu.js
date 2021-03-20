let menu = document.querySelector('#menumobile');
menu.addEventListener('click', AbrirMenu);
let menuAberto = false;

function AbrirMenu(){
  if (menuAberto === false){
    const home = document.querySelector('#Hometext');
    const teo = document.querySelector('#Theology');
    const IT = document.querySelector('#IT');
    const law = document.querySelector('#Law');
    const others = document.querySelector('#Others');
    home.style.display = "block";
    teo.style.display = "block";
    IT.style.display = "block";
    law.style.display = "block";
    others.style.display = "block";
    menuAberto = true;
    MoverSection();
  } else {
    const home = document.querySelector('#Hometext');
    const teo = document.querySelector('#Theology');
    const IT = document.querySelector('#IT');
    const law = document.querySelector('#Law');
    const others = document.querySelector('#Others');
    home.style.display = "none";
    teo.style.display = "none";
    IT.style.display = "none";
    law.style.display = "none";
    others.style.display = "none";    
    menuAberto = false;
    MoverSection();
    }
}

function MoverSection(){
  let contem = document.querySelector('.marginTrue');
  if (contem === null){
    let marginSection = document.querySelector('section');
    marginSection.classList.add('marginTrue');
  } else {
    let marginSection = document.querySelector('section');
    marginSection.classList.remove('marginTrue');
}
}