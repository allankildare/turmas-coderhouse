import React, { Component } from 'react'
// function Saudacao(props) {
//   return (
//     <div>
//       Olá {props.nome}, é bom tê-lo de volta! e o DDD é {props.ddd}
//     </div>)
// }

class Saudacao extends Component {
  render() {
    return (
      <div>
        Olá {this.props.nome}, é bom tê-lo de volta! e o DDD é {this.props.ddd}
      </div>
    )
  }
}

export default Saudacao