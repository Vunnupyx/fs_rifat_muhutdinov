export default function palindrome () {
    let inputText = prompt("Проверка слова на палиндром. Введите слово:");
    let reverseText = inputText.split('').reverse().join('');
    if (inputText === reverseText) {
        alert(`"${inputText}" палиндром!`);
    } else {
        alert(`"${inputText}" не палиндром!`)
    }
}
