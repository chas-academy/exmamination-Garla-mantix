const desc = document.getElementById("desc");
const amount = document.getElementById("amount");
const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");
const transactionList = document.getElementById("transactionList"); // This seems unnecessary, but I did not want to leave it unused.
const balance = document.getElementById("balance");
const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");

let income = [];
let expenses = [];
let transactions = [];

// Function to add an income
function addIncome() {
    if (!desc || !amount) return; // My code did not pass the "npm test", and I could not understand why... Adding these solved the problem.
    const incomeDesc = desc.value;
    const incomeAmount = Number(amount.value);
    const transaction = { description: incomeDesc, amount: incomeAmount, type: 'Inkomst' };
    
    if (incomeDesc && incomeAmount > 0) {
        income.push({ desc: incomeDesc, amount: incomeAmount });
        transactions.push(transaction);
        updateIncomeList();
        updateBalance();
        updateTransactionList();
        desc.value = '';
        amount.value = '';
    } else {
        alert("Please enter a valid description and amount.");
    }
};

// Function to add an expense
function addExpense() {
    if (!desc || !amount) return; // My code did not pass the "npm test", and I could not understand why... Adding these solved the problem.
    const expenseDesc = desc.value;
    const expenseAmount = Number(amount.value);
    const transaction = { description: expenseDesc, amount: expenseAmount, type: 'Utgift' };

    if (expenseDesc && expenseAmount > 0) {
        expenses.push({ desc: expenseDesc, amount: expenseAmount });
        transactions.push(transaction);
        updateExpenseList();
        updateBalance();
        updateTransactionList();
        desc.value = '';
        amount.value = '';
    } else {
        alert("Please enter a valid description and amount.");
    }
};

// Update the income list on the page
function updateIncomeList() {
    if (!incomeList) return; // My code did not pass the "npm test", and I could not understand why... Adding these solved the problem.
    incomeList.innerHTML = '';
    income.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.desc} - ${item.amount} kr (Inkomst)`;
        incomeList.appendChild(li);
    });
};

function updateExpenseList() {
    if (!expenseList) return; // My code did not pass the "npm test", and I could not understand why... Adding these solved the problem.
    expenseList.innerHTML = '';
    expenses.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.desc} - ${item.amount} kr (Utgift)`;
        expenseList.appendChild(li);
    });
};

// Update the balance
function updateBalance() {
    if (!balance) return; // My code did not pass the "npm test", and I could not understand why... Adding these solved the problem.
    const totalIncome = income.reduce((sum, item) => sum + item.amount, 0);
    const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
    const currentBalance = totalIncome - totalExpenses;
    
    balance.textContent = `${currentBalance}`;
};

// Update the transaction list
function updateTransactionList() {
    if (!transactionList) return; // My code did not pass the "npm test", and I could not understand why... Adding these solved the problem.
    transactionList.innerHTML = '';
    transactions.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.description}: ${item.amount} kr (${item.type})`;
        transactionList.appendChild(li);
    });
};

// Event listeners for buttons
if (incomeBtn) { // My code did not pass the "npm test", and I could not understand why... Adding these solved the problem.
    incomeBtn.addEventListener("click", () => {
        addIncome();
    });
};

if (expenseBtn) { // My code did not pass the "npm test", and I could not understand why... Adding these solved the problem.
    expenseBtn.addEventListener("click", () => {
        addExpense();
    });
};