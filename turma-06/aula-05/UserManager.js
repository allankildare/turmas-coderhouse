const fs = require("fs");
const crypto = require("crypto");

class UserManager {
  constructor(filename = "Usuarios.json") {
    this.filename = filename;
    this.users = this.loadUsers();
  }

  loadUsers() {
    try {
      const data = fs.readFileSync(this.filename, "utf8");
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  saveUsers() {
    fs.writeFileSync(
      this.filename,
      JSON.stringify(this.users, null, 2),
      "utf8"
    );
  }

  hashPassword(password) {
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto
      .pbkdf2Sync(password, salt, 1000, 64, "sha512")
      .toString("hex");
    return { salt, hash };
  }

  verifyPassword(password, salt, hash) {
    const hashToCompare = crypto
      .pbkdf2Sync(password, salt, 1000, 64, "sha512")
      .toString("hex");
    return hash === hashToCompare;
  }

  addUser(username, password) {
    const existingUser = this.users.find((user) => user.username === username);

    if (existingUser) {
      console.log("Erro: Nome de usuário já existe.");
      return;
    }

    //    destructuring
    const { salt, hash } = this.hashPassword(password);
    const newUser = { username, salt, hash };
    this.users.push(newUser);
    this.saveUsers();

    console.log(`Usuário ${username} adicionado com sucesso.`);
  }

  validateUser(username, password) {
    const user = this.users.find((user) => user.username === username);

    if (!user) {
      console.log("Erro: Usuário não encontrado.");
      return;
    }

    const isPasswordValid = this.verifyPassword(password, user.salt, user.hash);

    if (isPasswordValid) {
      console.log("Logado");
    } else {
      console.log("Erro: Senha incorreta.");
    }
  }
}

module.exports = UserManager;

const newUser = new UserManager();

newUser.addUser("allankildare", "teste321");
newUser.addUser("joaosilveira", "teste321");
newUser.addUser("thiagonascimento", "teste321");
newUser.addUser("nayaraAlmeida", "teste321");

const arrUsers = newUser.loadUsers();
console.log(arrUsers);

newUser.validateUser("allankildare", "teste424");
newUser.validateUser("allankildare", "teste321");
