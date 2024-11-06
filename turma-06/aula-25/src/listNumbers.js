function listNumbers (...numbers) {
    const onlyNumbers = numbers.filter((item) => {
        if (typeof item === 'number') return item
    })

    // for (let i = 0; i < onlyNumbers.length; i++) {
    //     console.log(onlyNumbers[i])
    // }

    // onlyNumbers.forEach((item) => {
    //     console.log(item)
    // })

    for (const number of onlyNumbers) {
        console.log(number)
    }
}

listNumbers(1, 2, 3, 4, 5, 'alkhaskdhb', 6, '7', 8, '90', 10)