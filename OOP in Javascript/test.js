class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        if (firstName != null && firstName.length !== 0)
            this._firstName = firstName;
        else
            console.log("Не корректный: firstName")
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lastName) {
        if (lastName != null && lastName.length !== 0)
            this._lastName = lastName;
        else
            console.log("Не корректный: firstName")
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class User extends Person {
    constructor(firstName, lastName, email, password) {
        super(firstName, lastName)
        this.email = email
        this.password = password
    }

    get email() {
        return this._email;
    }

    set email(email) {
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (pattern.test(String(email).toLowerCase()))
            this._email = email;
        else
            console.log('Не корректный email')
    }

    get password() {
        return this._password;
    }

    set password(password) {
        let reg_exp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (password.match(reg_exp))
            this._password = password;
        else
            console.log('Введите от 6 до 20 символов, которые содержат как минимум одну цифровую цифру, одну заглавную и одну строчную букву')
    }

}

class Orders {
    constructor(user, orderDate, orderStatus, orderCart) {
        this.user = user;
        this.orderDate = orderDate;
        this.orderStatus = orderStatus;
        this.orderCart = orderCart;
    }

    get user() {
        return this._user;
    }

    set user(user) {
        if (user != null && user instanceof User)
            this._user = user;
        else
            console.log("Не корректный: user")
    }

    get orderDate() {
        return this._orderDate;
    }

    set orderDate(orderDate) {
        let reg_exp = /^\d{4}-\d{2}-\d{2}$/;
        if (reg_exp.test(orderDate)) {
            this._orderDate = new Date(orderDate);
        } else
            console.log("Дату следует ввести в формате yyyy-mm-dd");
    }

    get orderStatus() {
        return this._orderStatus;
    }

    set orderStatus(orderStatus) {
        if (orderStatus != null && orderStatus.length !== 0)
            this._orderStatus = orderStatus;
        else
            console.log("Не корректный: orderStatus")
    }

    get orderCart() {
        return this._orderCart;
    }

    set orderCart(orderCart) {
        if (orderCart != null)
            this._orderCart = orderCart;
    }
}

class OrderCart {
    constructor(product) {
        this.product = [product] || [new Product()];
        this._quantity = this._product.length;
    }

    get product() {
        return this._product;
    }

    set product(product) {
        if (product != null)
            this._product = product;
    }

    get quantity() {
        return this._quantity;
    }

    addProduct(product) {
        if (product != null && product instanceof Product) {
            this._product.push(product);
            this._quantity++;
        } else console.log('Product is not acceptable')
    }

    getProduct(index) {
        if (index >= this._quantity || index < 0) {
            console.log("Index is not acceptable");
            return;
        }
        return this._product[index]
    }

    setProduct(index, product) {
        if (index >= this._quantity || index < 0) {
            console.log("Index is not acceptable");
            return;
        }
        if (product == null && product instanceof Product) {
            console.log('Product is not acceptable')
            return;
        }
        let i = this._product.indexOf(this._product[index]);
        this._product[i] = product;
    }

    removeProduct(index) {
        if (index >= this._quantity || index < 0) {
            console.log("Index is not acceptable");
            return;
        }
        this._product.splice(index, 1)
    }

    totalCost() {
        let sum = 0;
        for (let i = 0; i < this._product.length; ++i) {
            sum += this._product[i].price;
        }
        return sum;
    }
}

class Product {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    get name() {
        return this._name
    }

    set name(name) {
        if (name != null && name.length !== 0) {
            this._name = name;
        } else
            console.log("Не корректный: name");
    }

    get price() {
        return this._price;
    }

    set price(price) {
        if (this.isNumber(price))
            this._price = price;
        else
            console.log('Не корректный: price');
    }

    get description() {
        return this._description;
    }

    set description(description) {
        if (description != null)
            this._description = description;
        else
            console.log('Не корректный: description');
    }

    isNumber(num) {
        return typeof num === 'number' && !isNaN(num);
    }
}

//
//Linked List
//

class Node {
    constructor(next, value) {
        this.next = next;
        this.value = value;
    }
}

class Entity {
//Ошибки не пойму почему
    /*name: string;
    head: Node;
    tail: Node;
    size = 0;*/

    constructor(name, products) {
        this.name = name;
        this.head = null
        this.tail = null
        this._size = 0
        this.addAll(products);

    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get size() {
        return this._size
    }

    linkByIndex(index) {
        if (index >= this.size && index < 0)
            console.log("Index is not acceptable")
        let arrayNode = this.head.next;
        for (let i = 0; i < index; i++) {
            arrayNode = arrayNode.next;
        }
        return arrayNode;
    }

    addAll(products) {

        for (let product in products) {
            this.add(product);
        }
        return true;
    }

    add(product) {
        let newNode = new Node(null, product);
        let last = this.tail;
        this.tail = newNode;
        if (last === null) {
            this.head = newNode;
        } else {
            last.next = newNode;
        }
        this._size++;
    }

    addByIndex(index, product) {
        // Если индекс равен нулю -- добавление в начало O(1)
        if (index === this.size) {
            this.add(product);
        } else {
            let previousLink = this.linkByIndex(index - 1);
            previousLink.next = new Node(previousLink.next, product);
        }
        this._size++;
    }

    get(index) {
        if (index >= this.size && index < 0)
            console.log("Index is not acceptable");
        let node = this.linkByIndex(index);
        return node.value;
    }

    find(product) {
        if (!this.head) {
            return;
        }
        let current = this.head;
        while (current) {
            if (current.value === product)
                return current
            current = current.next;
        }
    }


    set(index, product) {
        if (index >= this.size && index < 0)
            console.log("Index is not acceptable");
        let lostLink = this.linkByIndex(index);
        let editLink = this.linkByIndex(index);
        editLink.value = product;
        return lostLink.value;
    }

    remove(index) {
        if (index >= this.size && index < 0)
            console.log("Index is not acceptable");
        let lostLink = this.linkByIndex(index);
        if (index === 0)
            this.head.next = this.linkByIndex(index + 1);
        let previousLink = this.linkByIndex(index - 1);
        previousLink.next = this.linkByIndex(index + 1);
        this._size--;
        return lostLink.value;
    }

    toArray() {
        const output = [];
        let current = this.head;
        while (current) {
            output.push(current);
            current = current.next;
        }
        return output;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this._size = 0;
    }
}


let person = new Person('Николай', 'Печкин');
console.log(person.getFullName());
person.firstName = 'Коля';
person.lastName = 'Печка';
console.log(person.firstName);
console.log(person.lastName);
console.log('');

let user = new User('Николай',
    'Печкин',
    'Nik@pechkin.com',
    'passlow1W');
console.log(user.getFullName());
user.email = 'emaillow'
user.password = 'passlow';
console.log(`логин: ${user.email} пароль ${user.password}`)
console.log('')

let product = new Product("Колбаса", 450, '');
let secondProduct = new Product("Сыр", 400, 'Тут должно быть описание');
let emptyProduct = new Product();
console.log('')

let orderCart = new OrderCart(product);
console.log(orderCart.product);
orderCart.addProduct(secondProduct);
orderCart.addProduct(emptyProduct);
console.log(orderCart.product);
console.log(orderCart.getProduct(2));
orderCart.setProduct(12, secondProduct);
orderCart.setProduct(2, secondProduct);
console.log(orderCart.product);
orderCart.removeProduct(2);
orderCart.addProduct('')
console.log(orderCart.product);
console.log(orderCart.totalCost());
console.log('');

let orderTrue = new Orders(user, '2014-11-13', 'Выполнен', orderCart)
console.log(orderTrue);
let orderFalse = new Orders('', '', '', '')
console.log(orderFalse)
console.log('');

//Entity
let prArray = {product, secondProduct}
let entity = new Entity('MyName', prArray)
console.log(entity.size)
let array = entity.toArray()
console.log(array)


