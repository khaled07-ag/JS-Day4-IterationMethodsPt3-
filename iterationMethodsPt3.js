const transactions = [
    ["income", 1000],
    ["income", 1500],
    ["expense", 500],
    ["expense", 300],
    ["income", 700],
];
const income = transactions.filter((lett)=>{
   
        return lett[0]=="income";
    
})
console.log(income)
const expense = transactions.filter((lett)=>{
    return lett[0]=="expense";
})
console.log(expense);
let total = 0;
 const totalIncome = transactions.forEach((transaction)=>{
    if(transaction[0]=="income"){
        total=total+transaction[1]
    }
    
 })
 console.log(total)
 let total1=0
 const totalExpense = transactions.forEach((transaction)=>{
    if(transaction[0]=="expense"){
        total1=total1+transaction[1]
    }
    
 })
 console.log(total1)
 console.log(total-total1)
 const above = transactions.filter((transaction)=>{
    return transaction[1]>=500
 })
 console.log(above)