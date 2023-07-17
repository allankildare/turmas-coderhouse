let entrada = prompt("Inserir um nome")
//Repetimos até que "ESC“ seja inserido.
while (entrada != "ESC" ){
   switch (entrada) {
       case "ANA":
            alert("OLÁ, ANA");
            break
        case "JOÃO":
        case "joão":
        case "João":
            alert("OLÁ, JOÃO");
            break;
       default:
           alert("QUEM É VOCÊ?")
           break;
   }
   entrada = prompt("Inserir um nome");
}
