import React, { Component } from 'react'

class MenuClass extends Component {
  constructor() {
    super()

    this.state = {
      nome: 'Saulo',
      sobrenome: 'Vinicius'
    }
  }

  updateName = () => {
    this.setState({
      nome: 'Igor',
      sobrenome: 'Coelho'
    })
  }

  render() {
    return (
      <div onClick={this.updateName}>
        <p>Nome: {this.state.nome}</p>
        <p>Sobrenome: {this.state.sobrenome}</p>
      </div>
    )
  }
}

export default MenuClass