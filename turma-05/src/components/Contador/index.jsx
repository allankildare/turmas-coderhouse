import { useState } from 'react'

export default function Contador() {
  const [contClique, setContClique] = useState(0)

  function adicionaClique() {
    setContClique(contClique + 1)
  }

  return (
    <div>
      <button onClick={adicionaClique}>Clique aqui</button>
      <div>Você clicou {contClique} vezes</div>
    </div>
  )
}
