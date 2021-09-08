function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
    let number = getRandomInt(1, 1000);
    let count = 0;
    let resume = true;


    while (resume) {
        console.log(number)
        let inputNumber = prompt('Введите число');

        if (inputNumber === null) {
            break;
        }

        count++;
        /*todo: строгое сравнение онли*/
        if (inputNumber == number) {
            resume = confirm(`Вы угадали! Количество попыток: ${count}. Начать заново?`)
            number = getRandomInt(1, 1000);
            count = 0;
        } else if (inputNumber < number && inputNumber !== "") {
            alert('Искомое число больше!');
        } else if (inputNumber !== "") {
            alert('Искомое число меньше!')
        }
    }
}
