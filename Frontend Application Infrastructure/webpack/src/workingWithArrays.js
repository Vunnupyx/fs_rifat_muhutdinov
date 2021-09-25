export default function sortArray() {
    let array = [];

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (let i = 0; i < 10; i++)
        array[i] = getRandomInt(0, 9);

    function sortArrayByOrder(array, sortOrder) {
        if (sortOrder === "asc") {
            for (let i = 0; i < array.length - 1; i++) {
                let min = i
                for (let j = i + 1; j < array.length; j++) {
                    if (array[min] > array[j])
                        min = j
                }
                if (min !== i) {
                    let temp = array[min]
                    array[min] = array[i]
                    array[i] = temp
                }
            }
        } else if (sortOrder === "desc") {
            for (let i = 0; i < array.length - 1; i++) {
                let max = i
                for (let j = i + 1; j < array.length; j++) {
                    if (array[max] < array[j])
                        max = j
                }
                if (max !== i) {
                    let temp = array[max]
                    array[max] = array[i]
                    array[i] = temp
                }
            }
        }
    }

    sortArrayByOrder(array, "asc")
    console.log(array)
    let result = array.filter(i => i % 1 === 0 && i % 2 !== 0).map(i => x += i * i, x = 0).reverse()[0]
    console.log(result)
}