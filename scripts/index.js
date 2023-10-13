document.addEventListener("DOMContentLoaded", () => {
    const balance = 1000
    let currentBalance = balance

    const messageElement = document.getElementById("mensaje")
    const balanceElement = document.getElementById("saldo")
    const amountElement = document.getElementById("importe")
    const withdrawButton = document.getElementById("retirar")
    const depositButton = document.getElementById("depositar")

    withdrawButton.addEventListener("click", () => {
        const amount = parseFloat(amountElement.value)
        if (isNaN(amount) || amount <= 0 || amount > currentBalance) {
            messageElement.textContent = "Monto no válido"
        } else {
            currentBalance -= amount
            updateBalance()
            messageElement.textContent = `Retirado: ${amount}€`
        }
    })

    depositButton.addEventListener("click", () => {
        const amount = parseFloat(amountElement.value)
        if (isNaN(amount) || amount <= 0) {
            messageElement.textContent = "Monto no válido"
        } else {
            currentBalance += amount
            updateBalance()
            messageElement.textContent = `Depositado: ${amount}€`
        }
    })

    const updateBalance = () => {
        balanceElement.textContent = `Saldo: ${currentBalance}€`
    }
})