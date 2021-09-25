export default function prompt () {
    const error = () => alert("Введите корректный возраст!")
    let age;
    let name = prompt("Как вас зовут?")
    while (true) {
        age = prompt("Сколько вам лет?")
        if (age !== null && age > 0) {
            break;
        } else error()
    }
    alert(`Привет, ${name.charAt(0).toUpperCase() + name.slice(1)}, тебе уже ${age} лет!`)
}