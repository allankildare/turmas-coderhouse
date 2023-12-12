import Menu from './components/Menu'
import Alerta from './components/Alerta'
import Form from './components/Form'
import Button from './components/Button'
import Contador from './components/Contador'
import Cardapio from './components/Cardapio'
import AppContainer from './components/AppContainer'
import Pokemon from './components/Pokemon'

function App() {
  return (
    <div className="App">
      <Menu />
      <AppContainer>
        <Form title="Formulário" render={Button} />
        <Contador />
        <Alerta>
          Alerta
        </Alerta>
        <Cardapio />

        <Pokemon />
      </AppContainer>

    </div>
  );
}

export default App;
