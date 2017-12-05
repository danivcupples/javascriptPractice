var myName = prompt("What is your name?");

var newLang = prompt("What language besides English do you speak?");

var welcomeSaying = prompt("How do you greet others in that language?");

function greeting(name, language, saying){
  console.log(saying + " " + name + ", nice to speak with someone who knows " + language + ".");
}

greeting(myName, newLang, welcomeSaying);
