const sidd=document.getElementById("hed")
let start=document.getElementById("start")
let stop=document.getElementById("stop")

function sid() {
    sidd.innerHTML="I am clicked 2 sec later"
    console.log("func executed",Date.now())
}




// let clrts=setInterval(sid,2000)

let startf=function Starttime() {
    setInterval(sid,3000)
    console.log("start")
}

let vishen=setInterval(sid,3000)
function clr() {
    clearInterval(vishen)
    console.log("stop")
}

stop.addEventListener("click",clr)
start.addEventListener("click",vishen)

