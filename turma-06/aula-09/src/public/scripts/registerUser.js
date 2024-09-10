const userForm = document.getElementById('userForm')

function showToast(message, status) {
    let toastDiv = document.getElementById('toastDiv')

    if (!toastDiv) {
        toastDiv = document.createElement('div')
        toastDiv.id = 'toastDiv'
        userForm.appendChild(toastDiv)
    }
    
    toastDiv.className = `toast ${status}`
    toastDiv.textContent = message
}
userForm.addEventListener('submit', async (event) => {
    // Preveni o comportamento padrão de submit
    event.preventDefault()

    const name = document.getElementById('nameInput')
    const email = document.getElementById('emailInput')
    const password = document.getElementById('passwordInput')
    const passwordConfirmation = document.getElementById('passwordConfirmationInput')

    if (password.value !== passwordConfirmation.value) {
        alert('Senhas não conferem')
        return
    }

    const payload = {
        user: {
            name: name.value,
            email: email.value,
            password: password.value,
        }
    }

    try {
        const response = await fetch('http://localhost:8080/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        const jsonRes = await response.json()
        console.log('res:\n', jsonRes)
        showToast(jsonRes.message, jsonRes.status)

        return jsonRes
    } catch (error) {
        throw new Error(error)
    }
})