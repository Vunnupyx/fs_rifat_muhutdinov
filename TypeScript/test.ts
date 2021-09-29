interface IPerson {
    getFullName(): string;
}

class User implements IPerson {
    private _email: string;
    private _password: string;
    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string, email: string, password: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    get email(): string {
        return this._email;
    }

    set email(email: string) {
        //eslint-disable-next-line
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (pattern.test(String(email).toLowerCase()))
            this._email = email;
        else
            console.log('Не корректный email');
    }

    get password(): string {
        return this._password;
    }

    set password(password: string) {
        const reg_exp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (password.match(reg_exp))
            this._password = password;
        else
            console.log('Введите от 6 до 20 символов, которые содержат как минимум одну цифровую цифру, одну заглавную и одну строчную букву');
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(firstName: string) {
        if (firstName != null && firstName.length !== 0)
            this._firstName = firstName;
        else
            console.log("Не корректный: firstName")
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(lastName: string) {
        if (lastName != null && lastName.length !== 0)
            this._lastName = lastName;
        else
            console.log("Не корректный: firstName")
    }

    getFullName(): string {
        return `${this._firstName} ${this._lastName}`
    }
}

class Orders {
    public _user: User;
    private _orderDate: Date;
    private _orderStatus: string;
    private _orderCart: OrderCart;

    constructor(user: User, orderDate: Date, orderStatus: string, orderCart: OrderCart) {
        this.user = user;
        this.orderDate = orderDate;
        this.orderStatus = orderStatus;
        this.orderCart = orderCart;
    }

    get user(): User {
        return this._user;
    }

    set user(user: User) {
        if (user != null && user instanceof User)
            this._user = user;
        else
            console.log("Не корректный: user")
    }

    get orderDate(): Date {
        return this._orderDate;
    }

    set orderDate(orderDate: Date) {
        if (orderDate !== null)
            this._orderDate = orderDate;
        else
            console.log("orderDate - is null")
    }

    get orderStatus(): string {
        return this._orderStatus;
    }

    set orderStatus(orderStatus: string) {
        if (orderStatus != null && orderStatus.length !== 0)
            this._orderStatus = orderStatus;
        else
            console.log("Не корректный: orderStatus")
    }

    get orderCart(): OrderCart {
        return this._orderCart;
    }

    set orderCart(orderCart: OrderCart) {
        if (orderCart != null)
            this._orderCart = orderCart;
    }
}

class OrderCart {
    private _product: Product[];
    private _quantity: number;

    constructor(...product: Product[]) {
        this.product = product;
        this._quantity = this._product.length;
    }

    get product(): Product[] {
        return this._product;
    }

    set product(product: Product[]) {
        if (product != null)
            this._product = product;
    }

    get quantity(): number {
        return this._quantity;
    }

    addProduct(product: Product) {
        if (product != null) {
            this._product.push(product);
            this._quantity++;
        } else console.log('Product is not acceptable')
    }

    getProduct(index: number): Product {
        if (index >= this._quantity || index < 0) {
            console.log("Index is not acceptable");
            return;
        }
        return this._product[index]
    }

    setProduct(index: number, product: Product) {
        if (index >= this._quantity || index < 0) {
            console.log("Index is not acceptable");
            return;
        }
        if (product == null && product instanceof Product) {
            console.log('Product is not acceptable')
            return;
        }
        const i = this._product.indexOf(this._product[index]);
        this._product[i] = product;
    }

    removeProduct(index: number) {
        if (index >= this._quantity || index < 0) {
            console.log("Index is not acceptable");
            return;
        }
        this._product.splice(index, 1)
    }

    totalCost(): number {
        let sum = 0;
        for (let i = 0; i < this._product.length; ++i) {
            sum += +this._product[i].price;
        }
        return sum;
    }
}

class Product {
    private _name: string;
    private _price: number | string;
    private _description: string;

    constructor(name: string, price: number | string, description?: string) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    get name(): string {
        return this._name
    }

    set name(name: string) {
        if (name != null && name.length !== 0) {
            this._name = name;
        } else
            console.log("Не корректный: name");
    }

    get price(): number | string {
        return this._price;
    }

    set price(price: number | string) {
        if (this.isNumber(price))
            this._price = price;
        else
            console.log('Не корректный: price');
    }

    get description(): string {
        return this._description;
    }

    set description(description: string) {
        if (description != null)
            this._description = description;
        else
            console.log('Не корректный: description');
    }

    isNumber(num: number | string) {
        return typeof num === 'number' && !isNaN(num);
    }
}

function create<T>(c: { new(): T; }): T {
    return new c();
}

@decorate
class SomeClass {
}

const obj = create(SomeClass);
console.log(obj.constructor.name)

//eslint-disable-next-line
function decorate(constructor: Function) {
    console.log(`Object ${constructor.name} created!`);
}

console.log('')

const user = new User('Николай',
    'Печкин',
    'Nik@pechkin.com',
    'passlow1W');
user.firstName = 'Коля';
user.lastName = 'Печка';
console.log(user.firstName);
console.log(user.lastName);
console.log(user.getFullName());
console.log('');

user.email = 'emaillow'
user.password = 'passlow';
console.log(`логин: ${user.email} пароль ${user.password}`)
console.log('')

const product = new Product("Колбаса", 450, '');
const secondProduct = new Product("Сыр", 400, 'Тут должно быть описание');
console.log('')

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
const orderTrue = new Orders(user, date, 'Выполнен', orderCart)
console.log(orderTrue);
console.log('');


