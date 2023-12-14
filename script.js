/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */
const Inputbox =document.getElementById("input-box");
const listcontainer =document.getElementById( "list-container");

function addToDoItem()
{
  if(Inputbox.value === '')
  {
    alert("the input is invalid");
}
else
{
let li =document.createElement("li");// html element with the tag name 'li' is created
li.innerHTML =Inputbox.value;
listcontainer.appendChild(li);
let span = document.createElement("Span")
span.innerHTML="\u00d7";
li.append(span);

//
// Variables
//

// Constants
const appID = "app";
const headingText = "To do. To done. ✅";

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//

// Add a heading to the app container
 function inititialise() {
  
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }
  Inputbox.value=""; //this clears the input box so that we can enter the next
  SaveList();
}
  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);
 listcontainer.addEventListener(

  "click", function(TheElement)
  {
    if(TheElement.target.tagName === "LI")
    {
      TheElement.target.classlist.toggle("checked");// toggles the status of the element
      SaveList(); // fuction cell
    }
    else if (TheElement.target.tagName ==="SPAN")
    {
      TheElement.target.parentElement.remove();
      SaveList();
    }
  }, false
 )
 function SaveList()
 {
  localStorage.setItem("data",listcontainer.innerHTML);
 }
  // Init complete
  console.log("App successfully initialised");
  function Showlist()
{
  listcontainer.innerHTML =localStorage.getItem("data")
}

//
// Inits & Event Listeners
//
inititialise();
showlist();