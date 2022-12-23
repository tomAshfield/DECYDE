//List for the user to put their ideas in
let ideas = ['Go to park', 'Make Dinner', 'Have fun', 'Cuddle bf'];

//Takes in nothing; adds whatever they inputted into the text box
function addIdeas(){
    let temp = ideas.map(idea => `<li>${idea}</li>`).join('\n');
    document.querySelector('ul').innerHTML = temp;
}

//Call function in order to display it on the website
addIdeas();

//Setting variables to event actions
let btnAdd = document.querySelector('button');
let input = document.querySelector('input');

//Wating for the submit button to be clicked to then add the idea to the array list and website list
btnAdd.addEventListener('click', () =>{
    ideas.push(input.value);
    input.value = '';
    addIdeas();
});