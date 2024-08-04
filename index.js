const title = document.querySelector(".title");


const careers = [
"a Web Developer" , "a Front-end Developer", 
"an Artist", "an SEO Specialist", "a WordPress Developer"
];

let careerIndex = 0;
let characterIndex = 0;

updateCareer();

function updateCareer(){
  characterIndex ++;
title.innerHTML =
  `<h1>I am ${careers[careerIndex].slice(0, characterIndex)}
  </h1>`;
  
if (characterIndex === careers[careerIndex].length)
  {
careerIndex++;
characterIndex = 0;
}
if (careerIndex === careers.length){
  careerIndex = 0;
}
  setTimeout(updateCareer, 250);
  
}
