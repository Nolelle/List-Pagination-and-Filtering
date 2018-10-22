/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
let studentList = document.querySelector('.student-list'); // pulls everything from list
let studentItem = document.querySelectorAll('.student-item'); // pulls only the first student from list.
let studentDetails = document.querySelectorAll('.student-details');
let studentJoined= document.querySelectorAll('.joined-details');

//let child = studentList.childNodes;
//console.log (child);
// console.log(studentList);
// console.log(studentItem);
// console.log(studentDetails);
// console.log(studentJoined);



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

const showPage = (list, page) => {
  for (let i = 0; i >= list.length; i++) {
    if (i >= list[i]  && i <= list[i]) {// if the index of a list item is >= the index of the first item that should be shown on the page, && the list item index is <= the index of the last item that should be shown on the page,
      return list;
    } else {

    }
  }
}

// Create and append the pagination links - Creating a function that can do this is a good approach




// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here
