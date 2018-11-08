/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
//55 students

// Add variables that store DOM elements you will need to reference and/or manipulate
// let studentList = document.querySelector('.student-list');
let studentItem = document.querySelectorAll('.student-item');
let studentDetails = document.querySelector('.student-details');
let studentJoined= document.querySelector('.joined-details');

// let child = studentList.childNodes;
// console.log (child);
//console.log(studentList);
//console.log(studentItem);
// console.log(studentDetails);
// console.log(studentJoined);

// Create a function to hide all of the items in the list excpet for the ten you want to show
const showPage = (list,page) => { // showPage(10,1)
  let start = list * page - list;
  let end = start + list;
  console.log(studentItem);
  // console.log(start);
  // console.log(end);
 for (let i = 0; i <= list; i++) {
    if (i >= start && i < end) {
      studentItem[i].style.display = 'block';
    } else if (i < start && i >= end) {
      studentItem[i].style.display = 'none';
    }
  }
}
showPage(10,1);

// Create and append the pagination links - Creating a function that can do this is a good approach
// const appendPageLinks = (list) => {
//   showPage(studentList,1);
// let child = list.children;
// let pages = child.length / 10; // divides number of items in list by 10 to determine how many pages we will need.
// // console.log(pages);
// let div = document.createElement('div')
//   div.className == "pagination";
// let pageDiv = document.querySelector('.page')
//   pageDiv.appendChild(div);
//
//   for (var i = 1; i < pages; i++) {
//     let ul = document.createElement('ul');
//     div.appendChild(ul);
//     let li = document.createElement('li');
//     ul.appendChild(li);
//     let a = document.createElement ('a');
//     ul.appendChild(a);
//     a.textContent = (i).toString();
//     a.href = "#";
//
//     if(i == 1) {
//       a.className = "active";
//     }
//     a.addEventListener('click', (event) =>{
//       let aActive = document.querySelector(".active");
//       if(aActive !==null){
//         aActive.classList.remove("active");
//       }
//       event.target.className = "active";
//       showPage(10, parseInt(event.target.textContent));
//     });
//
//   }
//
//   }
//
//  // let aElements = document.getElementsByTagName('a');
//  // console.log(aElements);
//  //
//  //
//  //  aElements.addEventListener('click', () => {
//  //    if (aElements[0]) {
//  //      showPage(studentList, 0, 9);
//  //    } else if (aElements[1]) {
//  //      showPage(studentList, 10, 19);
//  //    } else if (aElements[2]) {
//  //      showPage(studentList, 20, 29);
//  //    } else if (aElements[3]) {
//  //      showPage(studentList, 30, 39);
//  //    } else if (aElements[4]) {
//  //      showPage(studentList, 40, 49);
//  //    } else if (aElements[5]) {
//  //      showPage(studentList, 50, 54);
//  //    }
//  //  })
//
// appendPageLinks(studentList);




// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here
