const sidd=document.getElementById("hed")
let start=document.getElementById("start")
let stop=document.getElementById("stop")
let stb

function sid() {
    sidd.innerHTML="I am clicked 2 sec later"
    console.log("func executed",Date.now())
}




// let clrts=setInterval(sid,2000)

function Starttime() {
    if (!stb) {
        stb=setInterval(sid,1000)
    }
    console.log(typeof(stb))
    console.log("start")
}

// let vishen=setInterval(sid,3000,(click=sid))
function clr() {
    clearInterval(stb)
    stb=null
    console.log("stop")
}

stop.addEventListener("click",clr)
start.addEventListener("click",Starttime)

