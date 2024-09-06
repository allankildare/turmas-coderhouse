// elements
const messagesUl = document.getElementById('messages')
const chatInput = document.getElementById('chat')
const btnEnviar = document.getElementById('btnEnviar')

console.log('Você está vendo uma página gerada usando Handlebars')

// inicializacao do socket
const socket = io()

// configuração do cliente
socket.on('event_for_individual_socket', (data) => {
    console.log('Mensagem recebida:\n', data)
    
    if (Array.isArray(data)) {
        messagesUl.innerHTML = '' // limpa conteúdo do elemento UL

        // adiciona LIs com todas as messagens
        data.forEach((item) => {
            const newItem = document.createElement('li')
            newItem.textContent = item.message
            messagesUl.appendChild(newItem)
        })
    }
})

socket.on('event_for_all', (data) => {
    console.log('Mensagem recebida:\n', data)
})

socket.on('event_for_everyone_but_the_current_socket', (data) => {
    console.log('Mensagem recebida:\n', data)
})

btnEnviar.addEventListener('click', () => {
    const value = chatInput.value
    socket.emit('message', { socketId: socket.id, message: value })
})