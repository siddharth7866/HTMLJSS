const sidd=document.getElementById("hed")
let start=document.getElementById("start")
let stop=document.getElementById("stop")

function sid() {
    sidd.innerHTML="I am clicked 2 sec later"
    console.log("func executed",Date.now())
}




let clrt=setInterval(sid,2000)

function clr(params) {
    clearTimeout(clrt)
    
}

stop.addEventListener("click",clr)

