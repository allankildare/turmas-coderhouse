fetch('./usuario.json')
  .then((res) => res.json())
  .then((json) => console.log('Este é o JSON formatado:\n', json))
