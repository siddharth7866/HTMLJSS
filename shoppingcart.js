// // // let sid=document.getElementsByTagName('h1')[0]

// // // function Sid() {
// // //     // sid.innerHTML="I am clicked and now I am Sid Vishen"
// // //     // document.write(5+5)
// // //     // window.alert("Siddharth")
// // //     document.getElementsByTagName('button')[0].style.display="none"

// // //     window.print()

// // // }


// // // sid.addEventListener('click',Sid)


// // // // let x,y,z

// // // // x="sodd"

// // // // console.log(x)

// // // //this sis comment and it will not be executed

// // //  x="siddharth"
// // // // let x=10

// // // console.log(x)

// // // let A1="Siddharth"
// // // let A2="vishen"
// // // A1="vishen"
// // // console.log(A1)

// // // const _Name="Siddharth hidden"
// // // //_Name is a hidden variable

// // // console.log(_Name)

// // // let age=12,name="naamsiddharth"
// // // console.log(name)


// // // let siddate=new Date()
// // // console.log(siddate.setFullYear(2024))


// // // let rand=Math.random()
// // // console.log(rand)

// // // // let _1="Siddharth"
// // // // console.log(_1)

// // // let Name="siddharth",Age=23,Prof="Web Developer"

// // // console.log(Name)
// // // console.log(Age)
// // // console.log(Prof)

// // // let numb="5"
// // // console.log(numb+5+9+10)

// // let x

// // x=10
// // console.log(x)

// // z=1000
// // var z


// // console.log(z)

// // var ab=100
// // function sid() {
// //     var ab=1000
// //     console.log(x)
// // }


// // console.log(ab)

// // yash=10
// // let yashv
// // console.log(yashv)

// // var yash
// // yashv=20

// // var sidv={
// //     name:"Siddharth",
// //     profession:"Web Dev",
// //     time:function(){
// //         let x=34
// //         console.log(x)
// //     }
// // }


// // sidv.time()

// // sidv.cooks="Halwa"
// // console.log(sidv)

// // let demo=document.getElementById("demo")

// // let time=document.getElementById("time")
// // console.log(demo)

// // function disptime() {
// //     demo.innerHTML=Date()
// // }

// // time.addEventListener("click",disptime)


// // let sid="Siddharth"
// // console.log(sid[0])

// // console.log(sid.charAt(2))

// // console.log(sid.at(-2))

// // let as="Siddharth"
// // let food=prompt("your fav food is ")

// // console.log(`My name is ${as} and my fav food is ${food}`)

// let y=new Number(23)
// console.log(y)

// let x=new Number(45)
// console.log(x)


// let ab=10.345
// console.log(ab.toExponential(2))


// // let sid=[1,2,3,4,5,6,7,8,9,10]

// // console.log(sid.slice(4,-4))

// // let vis="      Sid              "
// // let fir="vis"
// // console.log(vis.concat('',fir))

// // console.log(vis.repeat(2))

// // let as="Siddharth"
// // let food=promt("your fav food is ")

// // console.log(`My name is ${as} and my fav food is ${food}`)

// // let y=new Number(123)
// // console.log(y.EPSILON)

// let sid=["mango","potato","Grapes"]
// let vishen=["papad","aachar","kapoor",["mango","potato","Grapes"]]
// let shahi=["Riyon","taramandal","siktour"]
// const newsid=sid.concat("Visen")
// console.log(vishen.flat())
// // console.log(sid.pop())
// // console.log(sid.push("Sidd"))
// // console.log(sid)
// // console.log(sid.at(-3))
// // console.log(sid.toString())
// // console.log(sid.length-1)

// // console.log(Array.isArray(sid))

// // let sid=[1,2,3,4,5,6,7,8,100]
// const price=[23,12,34,22,65,120]
// const minp=Math.max(23,12,34,22,65,120)
// console.log(`Max Funct-${minp}`)
// console.log(Math.log(10))
// const sid=Math.round(4.56)
// const vss=Math.ceil(4.56)
// const sss=Math.floor(4.56)
// const dss=Math.trunc(4.56)
// const tss=Math.sign(0)
// console.log(`tss-sign ${tss}`)
// console.log(`dss-trunc ${dss}`)
// console.log(`sss-floor ${sss}`)
// console.log(`vss-ceil ${vss}`)
// console.log(`sid-round ${sid}`)

// //To use math object we do not have to create object

// const sid={
//     name:"Siddharth",
//     education:"B.Tech",
//     profession:"Web Developer",
//     hobby:"Reading books"
// }

// console.log(sid.name)

// for(i in sid){
//     console.log(` object-${i}:${sid[i]}`)
// }

// console.log(Object.keys(sid))
// const val=Object.values(sid)
// console.log(typeof(val))
// console.log(Array.isArray(val))

// try{
//     alddert("Hi I am siddharth")
// }
// catch(e){
//     console.log(sid.name)
//     console.log(sid.msg)
// }
// throw new Error {"Its related to alert"}

// var sid=[1,2,3,4,5,6,7,8,9,10]
// var all5=sid.every((x)=>x>5)
// console.log(`All value in sid are over 5 is ${all5}`)

// var vishen=[1,2,3,454,12,43,56,78]
// var all10=vishen.every((x)=>x<1000)
// console.log(`In vishen array all values are over 10 is ${all10}`)


// console.log(Math.trunc(-23.4))
// console.log(Math.floor(-23.4))

// let shahi=3.4.toFixed(3)
// console.log(typeof(+shahi))

// let sid=12334_45
// console.log(sid)

// let PI=3.14
// console.log(PI)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(2**53+3)

// const bigint=BigInt(23)
// const sid="siddharth"
// console.log(typeof(bigint))
// console.log(typeof(sid))

console.log(new Date(2037,10,31))

let now=new Date()
let date=`${now.getDate()}`.padStart(2,0)
let year=now.getFullYear().toString()
let year2=year.slice(-2)
let month=now.getMonth()+1
let minute=now.getMinutes()
let hour=now.getHours()

console.log(`${date}/${month}/${year2},${hour}:${minute}`)

const locale=navigator.language
let nav=navigator
console.log(locale)
console.log(nav)

let par=document.getElementById("demo")
let btn=document.getElementById("btn")
console.log(par)
console.log(btn)
let tc=0

function sid(){
    
    let html=`
    <h1> I am clicked and I came after the button clicked</h1>
    <h2>Hello Guys</h2>
    `
    if(tc<1){
        par.insertAdjacentHTML("afterbegin",html)
        tc=tc+1
    }else{
        alert("Not more than 1")
        return
    }
    
}

btn.addEventListener("click",sid)

let time=document.getElementById("time")

function vishen() {
    tc=0
    par.innerHTML=''
    console.log("clecked time")
}

time.addEventListener("click",vishen)

// const sid=[1,[1,2,3]]
// const vishen=[1,2,3,4,5]

// console.log(sid.flat().reduce((x,y)=>(x+y),0))

// console.log(vishen.reduce((x,y)=>{
//     return x+y
// },0))


// const dogAge=[5,2,4,1,15,8,3]
// const

// function calcAverageHumanAge(a){
//     let age=a
//     .map((x)=>x<=2?2*x:16+x*4)
//     .filter((x)=>x>18)
//     .reduce((x,y,i,arr)=>(x+y/arr.length),0)
//     // console.log(age)
//     // let ftr=age.filter((x)=>x>18)
//     // console.log(ftr)
//     // let average=ftr.reduce((x,y)=>(x+y),0)
//     console.log(`The average age of dog is ${age}`)
   
// }


// calcAverageHumanAge(dogAge)

(function(){
    console.log("Hello Siddharth")
})()

function findmax(){
    let max=0
    for(let i=0;i<arguments.length;i++){
        if(arguments[i]>max){
            max=arguments[i]
        }
    }
    console.log(max)
}

findmax(1,2,3,4,5,6)

const person={
    fullName:function(){
        return this.firstName + " "+ this.lastName;
    }
}

function intro(){
    return`I am ${this.firstName} and family name is ${this.lastName}`
}

const sid={
    firstName:"Siddharth",
    lastName:"Vishen"
    
}

let sidd=intro.bind(sid)
console.log(sidd())

//create context
//provide context
//consume the context

//usecontext context provider

//React Js Interview Question
// What is callbacl and use effect and usememo
//npm create vite@latest 


