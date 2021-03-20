let english = document.querySelector('#english');
english.addEventListener('click', ChangeToEnglish);
let brazil = document.querySelector('#brazil');
brazil.addEventListener('click', ChangeToPortuguese);
let home = document.querySelector('#Hometext');
let theology = document.querySelector('#Theology');
let it = document.querySelector('#IT');
let law = document.querySelector('#Law');
let others = document.querySelector('#Others');
let tech = document.querySelector('#tech');
let whoAmI1 = document.querySelector('#text1');
let whoAmI2 = document.querySelector('#text2');
let whoAmI3 = document.querySelector('#text3');
let whoAmI4 = document.querySelector('#text4');
let whoAmI5 = document.querySelector('#text5');
let whoAmI6 = document.querySelector('#text6');
let whoAmI7 = document.querySelector('#text7');
let whoAmI8 = document.querySelector('#text8');
let whoAmI9 = document.querySelector('#text9');
let whoAmI10 = document.querySelector('#text10');
let IGTI = document.querySelector('#IGTI');
let DIO = document.querySelector('#DIO');
let IFRO = document.querySelector('#IFRO');
let trybe = document.querySelector('#Trybe');
let cruzeiro = document.querySelector('#cruzeiro');
let uff = document.querySelector('#uff');
let linkedin = document.querySelector('#linkedin');

function ChangeToEnglish() {
  home.innerHTML = 'Home';
  theology.innerHTML = 'Theology';
  it.innerHTML = 'Information Technoly';
  law.innerHTML = 'Law';
  others.innerHTML = 'Others';
  tech.innerHTML = 'Technologies learned';
  whoAmI1.innerHTML = "I'm brazilian, from Rio de Janeiro and, currently, I live at 'the wonderful city'.";
  whoAmI2.innerHTML = 'Lawyer and civil servant of Federal University of Rio de Janeiro, in transition of career to work as System Developer.';
  whoAmI3.innerHTML = "I'm self-taught and I've been studying Python, by my self after 'being in love' for this language. Whenever possible, I enroll in a course/bootcamp to get more qualified, as I did with";
  whoAmI4.innerHTML = ', the ';
  DIO.innerHTML = "Cloud Computing and Serverless's Bootcamp of Digital Innovation One";
  IGTI.innerHTML = "Machine Learning's Bootcamp from IGTI";
  whoAmI5.innerHTML = ' and the course of ';
  IFRO.innerHTML = 'Database Administrator from IFRO.';
  whoAmI6.innerHTML = "I'm studying ";
  trybe.innerHTML = 'web development at Trybe';
  whoAmI7.innerHTML = ", and I'm graduating in Faculty of  ";
  cruzeiro.innerHTML = 'Analysis and systems development at Universidade Cruzeiro do Sul';
  whoAmI8.innerHTML = ' and ';
  uff.innerHTML = 'Computer Systems at Federal Fluminense University.';
  whoAmI9.innerHTML = 'I like to read and I, always, need to be studying.';
  whoAmI10.innerHTML = "I'm powered by challenges, resilient, curious and learn fast. I like to work with people who inspire me and require my best.";
  ChangeLinkEnglish();
}

function ChangeToPortuguese() {
  home.innerHTML = 'Home';
  theology.innerHTML = 'Teologia';
  it.innerHTML = 'Tecnologia da Informação';
  law.innerHTML = 'Direito';
  others.innerHTML = 'Outros';
  tech.innerHTML = 'Tecnologias aprendidas';
  whoAmI1.innerHTML = 'Sou brasileiro, natural do Rio de Janeiro e, atualmente, moro na cidade maravilhosa.';
  whoAmI2.innerHTML = 'Advogado, registrado na OAB/RJ, e servidor público da UFRJ, em transição de carreira para trabalhar com programação.';
  whoAmI3.innerHTML = 'Sou autodidata e venho estudando Python, por conta própria por ter me apaixonado por esta linguagem. Sempre que possível, me inscrevo em algum curso/bootcamp para me qualificar mais, como fiz com o';
  whoAmI4.innerHTML = ', o ';
  DIO.innerHTML = 'Bootcamp de Cloud Computing e Serverless da Digital Innovation One';
  IGTI.innerHTML = 'Bootcamp do IGTI de Machine Learning';
  whoAmI5.innerHTML = ' e o curso de ';
  IFRO.innerHTML = 'Administrador de Banco de Dados do IFRO.';
  whoAmI6.innerHTML = 'Estou estudando';
  trybe.innerHTML = 'desenvolvimento web na Trybe';
  whoAmI7.innerHTML = ' e cursando faculdade de ';
  cruzeiro.innerHTML = 'Análise e desenvolvimento de sistemas na Universidade Cruzeiro do Sul';
  whoAmI8.innerHTML = ' e ';
  uff.innerHTML = 'Sistemas da computação na UFF.';
  whoAmI9.innerHTML = 'Gosto de ler e, preciso, estar sempre estudando alguma coisa.';
  whoAmI10.innerHTML = 'Sou movido a desafios, resiliente, curioso e aprendo rápido, gosto de trabalhar com pessoas que me inspiram e exigem o meu melhor.';
  ChangeLinkPortuguese();
}

function ChangeLinkEnglish() {
  document.getElementById('linkedin').href = 'https://www.linkedin.com/in/marcelofcdantas/?locale=en_US';
}

function ChangeLinkPortuguese() {
  document.getElementById('linkedin').href = 'https://www.linkedin.com/in/marcelofcdantas';
}

window.onload = ChangeToPortuguese();