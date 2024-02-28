/*
const sid=
    function(color,height){
       this.color=color;
       this.height=height;
       this.play=function(){
           console.log(`let's play ${color}`)
       }
      
    }
    

sid.color="blue"


// const vishen=Object.create(sid)
// console.log(vishen.play())

 const vishen=new sid("red","6ft 4 inch")
 vishen.color="reeeed"
 console.log(vishen.color)
sid.prototype.wearshirt=function(){
    console.log(`I will wear ${this.color} shirt`)
}
vishen.wearshirt()

console.log(vishen.__proto__)
 
 
sid.prototype.life='wonderfull'

console.log(vishen.life)

console.log(vishen.hasOwnProperty('life'))

console.log(vishen instanceof sid)

sid.prototype.gotoparty=function (){
    console.log(`Hi Welcome to the party`)
}


vishen.gotoparty()

const vis=[2,3,4,5,6,7,8,3,4,5,1,1,33,2,1,2,34,8,4,58,8]

console.log(vis.__proto__)

Array.prototype.vishen=function () {
    return [...new Set(this)]
}

console.log(vis.vishen())


const Car=function (make,speed) {

    this.make=make;
    this.speed=speed;
    this.acc=function () {
        speed=speed+10
        console.log(`accelerate is ${speed}`)
    }
    this.brake=function () {
        speed=speed-5
        console.log(`brake ${speed}`)
    }
}


Car.prototype.brakess=function () {
    this.speed=this.speed+10
    console.log(`accelerate is ${this.speed}`)
}


const car1=new Car('BMW',120)

car1.brake()
car1.acc()
car1.acc()
car1.brake()
car1.brakess()


function siddharth(a,b){
    if (a>2 && b<10) {
        return a+b;
    }else{
        console.log("Parameters not upto mark")
    }
}

console.log(siddharth(1,2))

console.log(window)

function Setusername(username) {
    this.username=username
    console.log("Called")
}


function CreateUser(username,email,password) {
    Setusername.call(this,username)
    this.email=email
    this.password=password
}

// */
// const chai=new CreateUser("sid","Siddharth@chai.com","123@xyz")
// console.log(chai)

class Sdx{
    constructor(user,email,password){
        this.user=user
        this.email=email
        this.password=password
    }

    speak(){
        console.log(`this is ${this.user}'s account`)
    }

}

// const robin=new Sdx("siddharth","sid@gmail.com","123@xyz")

// robin.speak()

class Vishen extends Sdx{
    constructor(user,email){
        super(user,email)
        
    }
    speak(){
        super.speak()
        console.log(`I have same mail id that ${this.email}`)
    }
}

// const robin=new Sdx("siddharth","sid@gmail.com","123@xyz")

// robin.speak()

const vivan=new Vishen('sid',"sid@chai.com")

vivan.speak()


class Animal{
    constructor(name){
        this.name=name
    }

    speak(){
        console.log(`${this.name} makes noise`)
    }
}

class Dog extends Animal{
    constructor(name){
        super(name)
    }
    
    speak(){
        super.speak()
        console.log(`${this.name} barks`)
    }

}

const robin=new Dog("robin")
robin.speak()

class Superhoros{
    constructor(age,power){
        this.age=age
        this.power=power
    }

    yourname(){
        console.log(`hi my power is ${this.power}`)
    }
}


// const spiderman=new Superhoros("29","spark")
// spiderman.yourname()

class Marvel extends Superhoros{
    constructor(age,power,name){
        super(age,power)
        this.name=name
        
    }

    sid(){
        super.yourname()
        console.log(`and my name is ${this.name}`)
    }

}


const batman=new Marvel("29","thunderbolt","sid")

batman.sid()


const az=[1,2,3,4,5,6,8]

console.log(az.map((num)=>num+200))

console.log(az.reduce((acc,crvl)=>acc+crvl,0))

const cart=[
    {itemName:"book",
    price:23},
    {itemName:"cake",
    price:100},
    {itemName:"trimmer",
    price:150},
]


console.log(cart.reduce((acc,item)=>(acc+item.price),0))


const cart2=[
    {
        item:"books",
        price:100
    },
    {
        item:"Razor",
        price:60
    },
    {
        item:"Trimmer",
        price:900
    },
]
const price=cart2.reduce((acc,item)=>(acc+item.price),0)

console.log(price)


class Vishenss{
    constructor(username,vil){
        this.username=username
        this.vil=vil
    }

    intro(){
        console.log(`Hi I am from ${this.vil}`)
    }
}

class Siddharth extends Vishenss{
    constructor(username,vil,name){
        super(username,vil)
        this.name=name
    }

    intro(){
        super.intro()
        console.log(`And my name is ${this.name}  and username is ${this.username} `)
    }
}
const cast=new Vishenss("babu","Riyons")
const sid1=new Siddharth("Rajats","riyons","Rajat")

sid1.intro()






class Child{
    constructor(name,username){
        this.name=name
        this.username=username

    }

    speak(){
        console.log(`Hello I am ${this.name} `)
    }
}

class Ansh extends Child{
    constructor(gender,name,username){
        super(name,username)
        this.gender=gender
    }

    speak(){
        super.speak()
        console.log(`I am ${this.gender} and my username is ${this.username}`)
    }
}


const baby=new Child('ansh',"chuzua")

const ansh=new Ansh("male","Ansh Singh","Chuzua")


ansh.speak()

















