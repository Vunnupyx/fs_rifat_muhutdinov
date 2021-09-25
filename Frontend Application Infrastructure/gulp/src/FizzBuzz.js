(function () {
    let array = [];
    for (let i = 1; i <= 100; i++) {
        array.push(i);

        if (i % 3 === 0) {
            array.splice(i - 1, 1, 'Fizz');
        }

        if (i % 5 === 0) {
            array.splice(i - 1, 1, 'Buzz');
        }

        if (i % 15 === 0) {
            array.splice(i - 1, 1, 'FizzBuzz');
        }
    }
    console.log(array);
})();
