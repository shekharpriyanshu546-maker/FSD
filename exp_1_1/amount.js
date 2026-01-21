let balance = 1000;
function deposit() {
    let amount = parseFloat(document.getElementById("amount").value);
    let message = document.getElementById("message");

    if (isNaN(amount) || amount <= 0) {
        message.style.color = "red";
        message.innerText = "Invalid amount!";
        return;
    }
    balance += amount;
    updateUI("Deposit Successful!");
}
function withdraw() {
    let amount = parseFloat(document.getElementById("amount").value);
    let message = document.getElementById("message");

    if (isNaN(amount) || amount <= 0) {
        message.style.color = "red";
        message.innerText = "Invalid amount!";
        return;
    }
    if (amount > balance) {
        message.style.color = "red";
        message.innerText = "Insufficient Balance!";
        return;
    }
    balance -= amount;
    updateUI("Withdrawal Successful!");
}
function updateUI(text) {
    document.getElementById("balance").innerText = balance;
    let message = document.getElementById("message");
    message.style.color = "green";
    message.innerText = text;
    document.getElementById("amount").value = "";
}
