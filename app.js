let transactionName = document.querySelector('.transaction-name input')
let transactionAmount = document.querySelector('.transaction-amount input')
let addBtn = document.querySelector('.submit')
let totalBalance = document.querySelector('.total-balance span')
let totalIncome = document.querySelector('.income span')
let totalExpense = document.querySelector('.expense span')

addBtn.addEventListener("click",()=>{
    let availableBalance = parseFloat(totalBalance.textContent);
    let totIncome = parseFloat(totalIncome.textContent)
    let totExpense = parseFloat(totalExpense.textContent)
    let addedBalance = parseFloat(transactionAmount.value);
    let res = availableBalance+addedBalance
    if(addedBalance>0){
        totIncome+=addedBalance
        totalIncome.innerHTML = totIncome
    }
    else if(addedBalance<0){
        totExpense+=Math.abs(addedBalance)
        totalExpense.innerHTML = totExpense
    }
    if(!isNaN(res))
    totalBalance.innerHTML = res;
    else{
        alert("Enter valid input!")
    }
    if(res>0){
        totalBalance.style.color = "green"
    }
    else{
        totalBalance.style.color = "red"
    }
    displayHistory(addedBalance, transactionName.value)
    console.log(transactionName.value)
    transactionAmount.value = ""
    transactionName.value = ""
})
function displayHistory(addedBalance, name){
    let item = document.querySelector('.all-history')
    let newItem = ''
    if(addedBalance>0){
        newItem =`<div class="history" style = "border-right: 4px solid green">
                    <p>${name}</p>
                    <p>+$${addedBalance}</p>
                </div>`
        
    }
    else if(addedBalance<0){
        newItem =`<div class="history" style = "border-right: 4px solid red">
                    <p>${name}</p>
                    <p>-$${Math.abs(addedBalance)}</p>
                </div>`
    }
    item.innerHTML+=newItem
}
