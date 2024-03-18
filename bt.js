// const sidd=document.getElementById("hed")
// let start=document.getElementById("start")
// let stop=document.getElementById("stop")
// let stb

// let ars=document.getElementsByTagName("h1")
// console.log(ars)

// function sid() {
//     sidd.innerHTML="I am clicked 2 sec later"
//     console.log("func executed",Date.now())
// }




// let clrts=setInterval(sid,2000)

// function Starttime() {
//     if (!stb) {
//         stb=setInterval(sid,1000)
//     }
//     console.log(typeof(stb))
//     console.log("start")
// }

// // let vishen=setInterval(sid,3000,(click=sid))
// function clr() {
//     clearInterval(stb)
//     stb=null
//     console.log("stop")
// }

// function Starttime(params) {
    
// }

// stop.addEventListener("click",clr)
// start.addEventListener("click",Starttime)

let strng="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 strng=strng +'#@!*&%'
 strng=strng+'1234567890'
 
 let rand=Math.floor((Math.random()*10))
// console.log(strng)
let pass=""
console.log(rand)

for (let index = 0; index < rand; index++) {
    const element = strng[index];
    pass=pass+element
    // console.log(element)
    
}

console.log(pass)
//  console.log(pass)
//  console.log(`Random Number ${rand}`)

//  console.log(strng[3])
 

