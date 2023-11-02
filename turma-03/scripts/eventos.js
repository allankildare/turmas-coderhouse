const btnMouse = document.getElementById('mouse')
const nomeEvento = document.getElementById('nomeEvento')
const inputNome = document.getElementById('nome')

function onMouseDown() {
    // let textoOriginal = nomeEvento.textContent
    nomeEvento.textContent = 'Evento de mousedown'
}
btnMouse.onmousedown = onMouseDown

btnMouse.addEventListener('mouseup', () => {
    // let textoOriginal = nomeEvento.textContent
    nomeEvento.textContent = 'Evento de mouseup'
})

btnMouse.addEventListener('mouseover', () => {
    nomeEvento.textContent = 'O mouse está sobre o botão'
})

btnMouse.addEventListener('mouseout', () => {
    nomeEvento.textContent = 'O mouse está fora do botão'
})

inputNome.addEventListener('keydown', (event) => {
    console.log('keydown')
    console.log(event.key)
    // document.getElementById('nomeImpresso').textContent = document.getElementById('nomeImpresso').textContent + event.key
})

inputNome.addEventListener('change', (event) => {
    // event.preventDefault()
    console.log('change foi disparado')
    console.log(event.target.value)
    // document.getElementById('nomeImpresso').textContent = `O seu nome é ${event.target.value}`
})

inputNome.addEventListener('input', (event) => {
    // event.preventDefault()
    console.log('input foi disparado')
    console.log(event.target.value)
    document.getElementById('nomeImpresso').textContent = `O seu nome é ${event.target.value}`
})