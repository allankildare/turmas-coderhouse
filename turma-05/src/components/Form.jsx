function Form({ title, render }) {
  return (
    <>
      <h1>{ title }</h1>
      {render({ text: 'Exemplo de botão' })}
    </>
  )
}

export default Form