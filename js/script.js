/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
//55 students

// Add variables that store DOM elements you will need to reference and/or manipulate
let studentList = document.querySelector('.student-list');
let studentItem = document.querySelectorAll('.student-item');
let studentDetails = document.querySelector('.student-details');
let studentJoined= document.querySelector('.joined-details');


// Create a function to hide all of the items in the list excpet for the ten you want to show
const showPage = (list,page) => { // showPage(10,1)
  let start = list * page - list;
  let end = start + list;

 for (let i = 0; i < studentItem.length; i++) {
    if (i >= start && i < end) {
      studentItem[i].style.display = 'block'
    } else if (i < start || i >= end) {
      studentItem[i].style.display = 'none';
    }
  }
}
//showPage(10,1);

// Create and append the pagination links - Creating a function that can do this is a good approach
const appendPageLinks = (list) => {
showPage(10,1);

let pages = Math.ceil(list / 10 ) //find number of pages rounded up.


let div = document.createElement('div')
div.className = "pagination";

let pageDiv = document.querySelector('.page')
pageDiv.appendChild(div);

let ul = document.createElement('ul');


  for (var i = 1; i <= pages; i++) { //create li, and a elements for pagination.

    div.appendChild(ul);

    let li = document.createElement('li');
    ul.appendChild(li);

    let a = document.createElement ('a');
    ul.appendChild(a);
    a.textContent = (i).toString(); //set page number equal to index of loop
    a.href = "#"; //when clicking page number, this will bring the user back to the top of the page.

    if(i == 1) {
      a.className = "active";
    }
    a.addEventListener('click', (event) =>{
      let aActive = document.querySelector(".active");
      if (aActive !== null) {//check if there is an active class.
        aActive.classList.remove("active"); //remove previous active class
      }
      event.target.className = "active"; // event targeted a as new active class.
      showPage(10, parseInt(event.target.textContent)); //call showpage function to display targeted page.
    });
  }
  }
appendPageLinks(studentItem.length); //added parameter so that function will create the appropiate amount of links.


// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here
