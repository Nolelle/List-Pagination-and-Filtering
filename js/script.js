/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
let studentList = document.querySelector('.student-list');
let studentItem = document.querySelector('.student-item');
let studentDetails = document.querySelector('.student-details');
let studentJoined= document.querySelector('.joined-details');

// let child = studentList.childNodes;
// console.log (child);
//console.log(studentList);
//console.log(studentItem);
// console.log(studentDetails);
// console.log(studentJoined);



// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 students, the last page will only display four
function hideItems (number) {
    let child = studentItem;
    console.log(child);
    let parent= studentItem.parentNode;
    console.log(parent);

    for (let i = 0; i < number; i += 1) {
       parent[i] = parent.removeChild(child);
    }

    return parent;
}

var result = hideItems(52);
//console.log(result);


// Create and append the pagination links - Creating a function that can do this is a good approach




// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here
