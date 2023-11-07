// Luxon DateTime
const DateTime = luxon.DateTime

// criação de data a partir de um objeto
let dia2019 = DateTime.fromObject({
  day: 30,
  hour: 1,
  month: 4,
  year: 2019
}).toString()

// conversão de data no formato ISO
let dataLuxon = DateTime.fromISO(dia2019)
let dataFormatada = dataLuxon.toLocaleString(DateTime.DATE_HUGE)
console.log(`A data formatada é:\n${dataFormatada}`)

// criação de data local
let dia2023 = DateTime.local(2023, 1, 16, 12, 37)
console.log('A data original é\n', dia2023.toLocaleString(DateTime.DATE_HUGE))

// subtração de datas utilizando o método minus
const doisMesesAntes = dia2023.minus({ month: 2, day: 11 })
console.log('E 2 meses e 11 dias a data era\n', doisMesesAntes.toLocaleString(DateTime.DATE_HUGE))
