var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class User {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
    get email() {
        return this._email;
    }
    set email(email) {
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (pattern.test(String(email).toLowerCase()))
            this._email = email;
        else
            console.log('Не корректный email');
    }
    get password() {
        return this._password;
    }
    set password(password) {
        const reg_exp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (password.match(reg_exp))
            this._password = password;
        else
            console.log('Введите от 6 до 20 символов, которые содержат как минимум одну цифровую цифру, одну заглавную и одну строчную букву');
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        if (firstName != null && firstName.length !== 0)
            this._firstName = firstName;
        else
            console.log("Не корректный: firstName");
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        if (lastName != null && lastName.length !== 0)
            this._lastName = lastName;
        else
            console.log("Не корректный: firstName");
    }
    getFullName() {
        return `${this._firstName} ${this._lastName}`;
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
            console.log("Не корректный: user");
    }
    get orderDate() {
        return this._orderDate;
    }
    set orderDate(orderDate) {
        if (orderDate !== null)
            this._orderDate = orderDate;
        else
            console.log("orderDate - is null");
    }
    get orderStatus() {
        return this._orderStatus;
    }
    set orderStatus(orderStatus) {
        if (orderStatus != null && orderStatus.length !== 0)
            this._orderStatus = orderStatus;
        else
            console.log("Не корректный: orderStatus");
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
    constructor(...product) {
        this.product = product;
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
        if (product != null) {
            this._product.push(product);
            this._quantity++;
        }
        else
            console.log('Product is not acceptable');
    }
    getProduct(index) {
        if (index >= this._quantity || index < 0) {
            console.log("Index is not acceptable");
            return;
        }
        return this._product[index];
    }
    setProduct(index, product) {
        if (index >= this._quantity || index < 0) {
            console.log("Index is not acceptable");
            return;
        }
        if (product == null && product instanceof Product) {
            console.log('Product is not acceptable');
            return;
        }
        const i = this._product.indexOf(this._product[index]);
        this._product[i] = product;
    }
    removeProduct(index) {
        if (index >= this._quantity || index < 0) {
            console.log("Index is not acceptable");
            return;
        }
        this._product.splice(index, 1);
    }
    totalCost() {
        let sum = 0;
        for (let i = 0; i < this._product.length; ++i) {
            sum += +this._product[i].price;
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
        return this._name;
    }
    set name(name) {
        if (name != null && name.length !== 0) {
            this._name = name;
        }
        else
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
function create(c) {
    return new c();
}
let SomeClass = class SomeClass {
};
SomeClass = __decorate([
    decorate
], SomeClass);
const obj = create(SomeClass);
console.log(obj.constructor.name);
function decorate(constructor) {
    console.log(`Object ${constructor.name} created!`);
}
console.log('');
const user = new User('Николай', 'Печкин', 'Nik@pechkin.com', 'passlow1W');
user.firstName = 'Коля';
user.lastName = 'Печка';
console.log(user.firstName);
console.log(user.lastName);
console.log(user.getFullName());
console.log('');
user.email = 'emaillow';
user.password = 'passlow';
console.log(`логин: ${user.email} пароль ${user.password}`);
console.log('');
const product = new Product("Колбаса", 450, '');
const secondProduct = new Product("Сыр", 400, 'Тут должно быть описание');
console.log('');
const orderCart = new OrderCart(product);
console.log(orderCart.product);
orderCart.addProduct(secondProduct);
console.log(orderCart.product);
console.log(orderCart.getProduct(2));
orderCart.setProduct(12, secondProduct);
orderCart.setProduct(2, secondProduct);
console.log(orderCart.product);
orderCart.removeProduct(1);
console.log(orderCart.product);
console.log(orderCart.totalCost());
console.log('');
const date = new Date('2014-11-13');
const orderTrue = new Orders(user, date, 'Выполнен', orderCart);
console.log(orderTrue);
console.log('');
