document.addEventListener("DOMContentLoaded", function () {
    const balance = 1000;
    let currentBalance = balance;

    const messageElement = document.getElementById("message");
    const balanceElement = document.getElementById("balance");
    const amountElement = document.getElementById("amount");
    const withdrawButton = document.getElementById("withdraw");
    const depositButton = document.getElementById("deposit");

    withdrawButton.addEventListener("click", function () {
        const amount = parseFloat(amountElement.value);
        if (isNaN(amount) || amount <= 0 || amount > currentBalance) {
            messageElement.textContent = "Monto no válido";
        } else {
            currentBalance -= amount;
            updateBalance();
            messageElement.textContent = `Retirado: ${amount}€`;
        }
    });

    depositButton.addEventListener("click", function () {
        const amount = parseFloat(amountElement.value);
        if (isNaN(amount) || amount <= 0) {
            messageElement.textContent = "Monto no válido";
        } else {
            currentBalance += amount;
            updateBalance();
            messageElement.textContent = `Depositado: ${amount}€`;
        }
    });

    function updateBalance() {
        balanceElement.textContent = `Saldo: ${currentBalance}€`;
    }
});