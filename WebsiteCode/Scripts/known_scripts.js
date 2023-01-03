//List for the user to put their ideas in
let ideas = ['Go to park', 'Make Dinner', 'Have fun', 'Cuddle bf'];
let finalIdeas = [];
let finalIdea = [];
let fIdea;

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Takes in nothing; adds whatever they inputted into the text box
function addIdeas(){
    let temp = ideas.map(idea => `<li>${idea}</li>`).join('\n');
    document.querySelector('.ideaList').innerHTML = temp;
}

//Call function in order to display it on the website
addIdeas();

//Setting variables to event actions
let input = document.querySelector('input');

//Wating for the submit button to be clicked to then add the idea to the array list and website list
function addIdea(){
    ideas.push(input.value);
    input.value = '';
    addIdeas();
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function FinalIdeas(){
  finalIdea.push(fIdea)
  let temp = finalIdea.map(idea => `<li>${idea}</li>`).join('\n');
  document.querySelector('.FDList').innerHTML = temp;
}


function nextStep(){
  shuffle(ideas);
  userPrompt();
  FinalIdeas();
}

//Shuffle the ideas when the user is ready to move on
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    finalIdeas = array;
  }

function userPrompt() {
  let index = prompt("Enter a number between 1-" + finalIdeas.length, "");
  fIdea = finalIdeas[parseInt(index - 1)];
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Hide/Show the final decision DIV
/*function hideShow() {
    var x = document.getElementById(".FDList");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }*/