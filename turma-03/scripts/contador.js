const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')
const contador = document.querySelector('span')

// if (contador.innerText === '0') {
//     subtrair.disabled = true
// }

subtrair.onclick = () => {
    // if (contador.innerText !== '0') {
    if (parseInt(contador.innerText) > 0) {
        contador.innerText = parseInt(contador.innerText) - 1
    }
}

function somarHandler() {
    contador.innerText = parseInt(contador.innerText) + 1
}

somar.addEventListener('click', somarHandler)