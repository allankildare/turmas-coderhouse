class TicketManager {
  #basePrice = 0.15;

  constructor() {
    this.events = [];
    this.nextId = 1;
  }

  addEvent(nome, lugar, preco, capacidade = 50, data = new Date()) {
    const novoEvento = {
      id: this.nextId++,
      nome: nome,
      lugar: lugar,
      preco: preco + this.#basePrice,
      capacidade: capacidade,
      data: data,
      participants: [],
    };
    this.events.push(novoEvento);
  }

  // Getter
  getEvents() {
    return this.events
  }
}

const manager = new TicketManager()
manager.addEvent("Concerto de Rock", "Estádio", 100)
manager.addEvent("Peça de Teatro", "Teatro Municipal", 50, 100)
console.log(manager.getEvents())
