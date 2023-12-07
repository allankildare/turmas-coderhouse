function Button({ text }) {
  function ola() {
    console.log('Olá Coders')
  }

  return (
    <button type="button" onClick={ola}>
      {text}
    </button>
  )
}

export default Button