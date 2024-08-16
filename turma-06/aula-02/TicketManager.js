class TicketManager {
  #basePrice = 0.15; // propriedade privada

  constructor() {
    // no constructor definimos as propriedades publicas da classe
    this.events = [];
    this.nextId = 1;
  }

  // addEvent é um exemplo de método da classe
  addEvent(nome, lugar, preco, capacidade = 50, data = new Date()) {
    const novoEvento = {
      id: this.nextId++, // incrementa o id
      nome: nome,
      lugar: lugar,
      preco: preco + this.#basePrice,
      capacidade: capacidade,
      data: data,
      participants: [],
    };
    this.events.push(novoEvento); // adiciona o evento ao array de eventos
  }

  // Getter para os eventos
  getEvents() {
    return this.events
  }
}

const manager = new TicketManager() // criação da instância de TicketManager
manager.addEvent("Concerto de Rock", "Estádio", 100)
manager.addEvent("Peça de Teatro", "Teatro Municipal", 50, 100)
console.log(manager.getEvents())
