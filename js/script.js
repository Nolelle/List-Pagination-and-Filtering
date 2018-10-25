/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
let studentList = document.querySelector('.student-list'); // pulls everything from list
let parent = studentList;
let studentItem = document.querySelectorAll('.student-item');// pulls only the first student from list.
let studentDetails = document.querySelectorAll('.student-details');
let studentJoined= document.querySelectorAll('.joined-details');

// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 students, the last page will only display four
// So i created a funciton thats not what I was supposed to do, but i dont wanna delete cause i spend a couple of hours LOL.
// function hideItems (number) {
//     let parent= studentList;
//     //console.log(parent);
//     let child = studentItem;
//     //console.log(child);
//   for (let i = 0; i < number ; i++) {
//       parent.removeChild(child[i]);
//     }
//     return parent;
// }
// var result = hideItems(44);
// //console.log(result);
//test
const showPage = (list, firstItem,lastItem) => {
  let child = list.children;
  console.log(child);
 for (let i = 0; i <= child.length; i++) {
    if (i >= firstItem  && i <= lastItem) {
      child[i].hidden = false;
    } else {
      child[i].hidden = true;
    }
  }
}
//showPage(parent,0,2);
// Create and append the pagination links - Creating a function that can do this is a good approach

const appendPageLinks = () => {
  showPage (parent,0,9)
  let itemsperPage = 10;
if () {
  let pages = parent.length / itemsperPage;
}

}



// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here
