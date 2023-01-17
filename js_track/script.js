 // get the heading element

 const heading = document.querySelector("#headingTotal");

 //get the reference to desc element
 const inputDescEl = document.querySelector("#inputDesc");

 //get the referenc to input amount
 const inputElement = document.querySelector("#inputAmount");

 // get the ref to the table

 const expenseTable = document.querySelector("#expenseTable");

 //init value of expense at 0;
 let totalExpense = 0;

 // set the heading element to totalExpense

 heading.textContent = totalExpense;

 // onButtonClick add inputAmount to totalExpense

 // allExpenses at once place

 const allExpenses = [];

 function addExpenseToTotal() {
   const expenseItem = {};
   // read the value from input amount
   const textAmount = inputElement.value;

   //read the value from input desc

   const textDesc = inputDescEl.value;

   // convert it to number

   //put it in object

   expenseItem.desc = textDesc;

   expenseItem.amount = textAmount;

   expenseItem.moment = new Date();

   allExpenses.push(expenseItem);

   let expense = parseInt(textAmount);

   // add the value to totalExpense

   totalExpense = totalExpense + expense;

   let someText = `Total: ${totalExpense}`;

   // set the heading element ot totalExpense
   heading.textContent = someText;


   renderList(allExpenses)
  

   



 }

 // View Layer


 function renderList(arrOfList){


   const allExpenseHTML = arrOfList.map((expense) =>
     createListItem(expense)
   );


   const joinedAllexpenseHTML = allExpenseHTML.join('');

   expenseTable.innerHTML = joinedAllexpenseHTML;

 }






 function createListItem({ desc, amount, moment }) {
   return `

       <li class="list-group-item d-flex justify-content-between">
                       <div class="d-flex flex-column">
                           ${desc}
                           <small class="text-muted">${getDateString(moment)}</small>
                       </div>
                       <div>
                           <span class="px-5">
                               ${amount}
                               </span>
                               <button 
                               type="button" class="btn btn-outline-danger btn-sm "
                               
                               onclick="deleteItems(${moment.valueOf()})"
                               >
                               <i class="fas fa-trash-alt"></i>
                           </button>
                       </div>
                   </li>
       
       `;
 }

 // controller functions

 // get date string
 function getDateString(momento) {
   return momento.toLocaleDateString("en-US", {
     year: "numeric",
     month: "long",
     day: "numeric",
   });
 }

 // delete item

 function deleteItems(dateValue) {

//  const newArr = [];


//      for(let i=0; i<allExpenses.length; i++){

//         if(allExpenses[i].moment.valueOf()!==dateValue){
//             newArr.push(allExpenses[i])

//          }



  
//     }



// const newArr  = allExpenses.filter((expense)=>{

//     if(expense.moment.valueOf() !== dateValue){

//         return expense;
//     }


// })


const newArr = allExpenses
         .filter(expense => expense.moment.valueOf() !== dateValue)




    
renderList(newArr)



       
   }

  



 //Get the btn element

 const element = document.querySelector("#btnAddExpense");

 //listen to click event
 element.addEventListener("click", addExpenseToTotal, false);