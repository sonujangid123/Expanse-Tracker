const totalInputDiv = document.querySelector("#totalInput");
const setBudgetInput = totalInputDiv.querySelector("input");
const setBudgetBtn = document.querySelector("button");


const buttons = document.querySelectorAll(".info span:last-of-type");


const addExpenDiv = document.querySelector("#addExpense");
const expenseNameInput = addExpenDiv.querySelector("input:first-of-type");
const expenseValueInput =  addExpenDiv.querySelector("input:last-of-type");
const  expenseNameBtn = addExpenDiv.querySelector("button");
const tbody = document.querySelector("table tbody");


let totalBudget = 0;
let count = 1;

setBudgetBtn.addEventListener("click" , ()=>{
    if( setBudgetInput.value.length === 0){
        alert("Enter Budget First");
    }else{
        totalBudget =  setBudgetInput.value;

        buttons[0].innerHTML = totalBudget;
        buttons[1].innerHTML = 0;
        buttons[2].innerHTML = totalBudget;

    }


})

expenseNameBtn.addEventListener("click" , ()=>{

    const name = expenseNameInput.value;
    const amount = expenseValueInput.value;

  

    if(amount>Number(buttons[2].innerHTML)){
        alert("Monthly Limit Exceeded")
    }else{

        const tr = document.createElement("tr");

        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
    
    
    
    
        td1.innerHTML = count++;
        td2.innerHTML = name;
        td3.innerHTML = amount;
        tr.append(td1, td2, td3);
        tbody.append(tr)
        buttons[1].innerHTML = Number(buttons[1].innerHTML) +  Number(amount);
        buttons[2].innerHTML = Number(buttons[2].innerHTML) -  amount;
    

    }

   



})





