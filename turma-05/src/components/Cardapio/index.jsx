function Cardapio() {
  const pizzas = [
    { id: 1, sabor: 'Mussarela' },
    { id: 2, sabor: 'Margherita' },
    { id: 3, sabor: 'Pepperoni' }
  ]

  return (
    <ul>
      {pizzas.map((pizza, indice) => {
        return <li key={`pizza-${indice}`}>{pizza.sabor}</li>
      })}
    </ul>
  )
}

export default Cardapio